import R from "ramda";
import { employees, Employee, EmployeeTransform } from "./employees";

type GroupResult<T> = { keys: string[]; values: { [index: string]: T[] } };
const groupBy = <T>(list: ReadonlyArray<T>, fn: (a: T) => string): GroupResult<T> =>
  (groupedResult => ({ keys: Object.keys(groupedResult), values: groupedResult }))(R.groupBy(fn, list));

const getQuarter = (date: Date) => Math.floor((date.getMonth() + 3) / 3);

const getRole = (e: Employee) =>
  e.grade === "Consultant - Graduate" ? "twu" : e.department === "Professional Services" ? "laterals" : "ops";

const transform = (employees: Employee[]) =>
  getCountry(
    groupBy(
      employees.map(
        e => ({ country: e.country, role: getRole(e), quarter: getQuarter(new Date(e.start_date)) } as EmployeeTransform)
      ),
      e => e.country
    )
  );

const getCountry = (byCountry: GroupResult<EmployeeTransform>) =>
  byCountry.keys.map(country => ({
    [country]: { actuals: getActuals(groupBy(byCountry.values[country], e => `q${e.quarter}`)) }
  }));

const getActuals = (byQuarter: GroupResult<EmployeeTransform>) =>
  byQuarter.keys.reduce((o, quarter) => ({ ...o, [quarter]: getRoles(groupBy(byQuarter.values[quarter], e => e.role)) }), {
    q1: {},
    q2: {},
    q3: {},
    q4: {}
  });

const getRoles = (byRole: GroupResult<EmployeeTransform>) =>
  byRole.keys.reduce((o, role) => ({ ...o, [role]: byRole.values[role].length }), {
    ops: 0,
    laterals: 0,
    twu: 0
  });

console.log(JSON.stringify(transform(employees)));
