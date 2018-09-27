export type EmployeeTransform = { role: string; quarter: number; country: string };

export type Employee = {
  grade: string;
  country: string;
  employment_type: string;
  department: string;
  offered_job_role: string;
  start_date: Date;
};

export const employees = JSON.parse(`[
    {
        "grade": "Consultant",
        "country": "China",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-22"
    }`) as Employee[];
