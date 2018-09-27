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
    },
    {
        "grade": "Consultant",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Delivery and Capabilities",
        "offered_job_role": null,
        "start_date": "2018-01-29"
    },
    {
        "grade": "Senior Consultant",
        "country": "Chile",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-02"
    },
    {
        "grade": "Consultant",
        "country": "UK",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-29"
    },
    {
        "grade": "Principal Consultant",
        "country": "UK",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-22"
    },
    {
        "grade": "Senior Consultant",
        "country": "Australia",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "Ecuador",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Senior Consultant",
        "country": "UK",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Principal Associate",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Business Development - IS",
        "offered_job_role": null,
        "start_date": "2018-01-29"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "UK",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-07"
    },
    {
        "grade": "Consultant",
        "country": "China",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-30"
    },
    {
        "grade": "Consultant",
        "country": "Australia",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-22"
    },
    {
        "grade": "Consultant",
        "country": "Spain",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Senior Consultant",
        "country": "China",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-23"
    },
    {
        "grade": "Associate",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Operations",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-15"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "UK",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Principal Consultant",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-29"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "Spain",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant",
        "country": "China",
        "employment_type": "Regular",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-10"
    },
    {
        "grade": "Consultant",
        "country": "China",
        "employment_type": "Regular",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-19"
    },
    {
        "grade": "Associate",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Marketing",
        "offered_job_role": null,
        "start_date": "2018-01-22"
    },
    {
        "grade": "Senior Associate",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "People - Recruiting",
        "offered_job_role": null,
        "start_date": "2018-01-29"
    },
    {
        "grade": "Associate",
        "country": "China",
        "employment_type": "Temporary",
        "department": "People Recruiting",
        "offered_job_role": null,
        "start_date": "2018-01-14"
    },
    {
        "grade": "Principal Consultant",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Business Development - IS",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Principal Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Senior Consultant",
        "country": "Germany",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-01"
    },
    {
        "grade": "Consultant",
        "country": "India",
        "employment_type": "Regular",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-05"
    },
    {
        "grade": "Consultant",
        "country": "Germany",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-01"
    },
    {
        "grade": "Consultant",
        "country": "Spain",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Associate",
        "country": "UK",
        "employment_type": "Full-time",
        "department": "People - Recruiting",
        "offered_job_role": null,
        "start_date": "2018-01-29"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "Spain",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "Australia",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Associate",
        "country": "Germany",
        "employment_type": null,
        "department": null,
        "offered_job_role": null,
        "start_date": "2018-02-01"
    },
    {
        "grade": "Associate",
        "country": "UK",
        "employment_type": "Contract",
        "department": "People - Recruiting",
        "offered_job_role": null,
        "start_date": "2018-01-02"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "Australia",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-29"
    },
    {
        "grade": "Associate",
        "country": "Brasil",
        "employment_type": "Full-time",
        "department": "Finance",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "Germany",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-01"
    },
    {
        "grade": "Principal Associate",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Business Development - IS",
        "offered_job_role": null,
        "start_date": "2018-01-29"
    },
    {
        "grade": "Consultant",
        "country": "China",
        "employment_type": "Full-time",
        "department": "Delivery and Capabilities",
        "offered_job_role": null,
        "start_date": "2018-01-23"
    },
    {
        "grade": "Lead Consultant",
        "country": "UK",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Senior Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-29"
    },
    {
        "grade": "Senior Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-15"
    },
    {
        "grade": "Principal Associate",
        "country": "UK",
        "employment_type": "Full-time",
        "department": "Techops - Infrastructure",
        "offered_job_role": null,
        "start_date": "2018-01-29"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "Germany",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-01"
    },
    {
        "grade": "Lead Consultant",
        "country": "Spain",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-29"
    },
    {
        "grade": "Senior Consultant",
        "country": "Germany",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-01"
    },
    {
        "grade": "Lead Associate",
        "country": "Ecuador",
        "employment_type": "Full-time",
        "department": "Finance",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "Australia",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant",
        "country": "Brasil",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant",
        "country": "Brasil",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-15"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant",
        "country": "China",
        "employment_type": "Full-time",
        "department": "People - Recruiting IS",
        "offered_job_role": null,
        "start_date": "2018-01-22"
    },
    {
        "grade": "Lead Consultant",
        "country": "Brasil",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-15"
    },
    {
        "grade": "Senior Consultant",
        "country": "UK",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-29"
    },
    {
        "grade": "Senior Consultant",
        "country": "Singapore",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant",
        "country": "Brasil",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant",
        "country": "China",
        "employment_type": "Regular",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-18"
    },
    {
        "grade": "Associate",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Marketing",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "USA",
        "employment_type": "Full-time",
        "department": null,
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant",
        "country": "Brasil",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "Brasil",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-22"
    },
    {
        "grade": "Consultant",
        "country": "Singapore",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-22"
    },
    {
        "grade": "Lead Consultant",
        "country": "China",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-22"
    },
    {
        "grade": "Associate",
        "country": "UK",
        "employment_type": "Full-time",
        "department": "People - Recruiting",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Senior Consultant",
        "country": "India",
        "employment_type": "Regular",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant",
        "country": "China",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-18"
    },
    {
        "grade": "Associate",
        "country": "China",
        "employment_type": "Contract",
        "department": "Operations",
        "offered_job_role": null,
        "start_date": "2018-01-15"
    },
    {
        "grade": "Lead Consultant",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "UK",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "Australia",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Senior Consultant",
        "country": "Singapore",
        "employment_type": "Contract",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-02"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Principal Consultant",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Business Development - IS",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "Australia",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant",
        "country": "Singapore",
        "employment_type": "Regular",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-22"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "UK",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Lead Consultant",
        "country": "Brasil",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Principal Consultant",
        "country": "UK",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Senior Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-05"
    },
    {
        "grade": "Consultant",
        "country": "UK",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Principal Consultant",
        "country": "UK",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-15"
    },
    {
        "grade": "Senior Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-05"
    },
    {
        "grade": "Consultant",
        "country": "Ecuador",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-02"
    },
    {
        "grade": "Senior Consultant",
        "country": "Australia",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Senior Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-05"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "Singapore",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-02"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "Chile",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-02"
    },
    {
        "grade": "Consultant",
        "country": "China",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-05"
    },
    {
        "grade": "Senior Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-19"
    },
    {
        "grade": "Consultant",
        "country": "China",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-11"
    },
    {
        "grade": "Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-22"
    },
    {
        "grade": "Consultant",
        "country": "Brasil",
        "employment_type": "Full-time",
        "department": "Marketing",
        "offered_job_role": null,
        "start_date": "2018-01-22"
    },
    {
        "grade": "Consultant",
        "country": "China",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-30"
    },
    {
        "grade": "Lead Consultant",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Senior Consultant",
        "country": "Singapore",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant",
        "country": "China",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-02-01"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "UK",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-07"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "UK",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-15"
    },
    {
        "grade": "Senior Consultant",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Principal Consultant",
        "country": "Australia",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Senior Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-05"
    },
    {
        "grade": "Consultant",
        "country": "Brasil",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-12-08"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-12-08"
    },
    {
        "grade": "Senior Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-12-05"
    },
    {
        "grade": "Lead Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-12-22"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "Australia",
        "employment_type": null,
        "department": null,
        "offered_job_role": null,
        "start_date": "2018-12-08"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "Australia",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-12-08"
    },
    {
        "grade": "Consultant",
        "country": "China",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-29"
    },
    {
        "grade": "Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-19"
    },
    {
        "grade": "Senior Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Senior Consultant",
        "country": "Germany",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-01"
    },
    {
        "grade": "Consultant",
        "country": "China",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-08-30"
    },
    {
        "grade": "Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-08-05"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "Brasil",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-15"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "UK",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-08"
    },
    {
        "grade": "Consultant",
        "country": "India",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-15"
    },
    {
        "grade": "Consultant",
        "country": "China",
        "employment_type": "Full-time",
        "department": "Delivery and Capabilities",
        "offered_job_role": null,
        "start_date": "2018-01-29"
    },
    {
        "grade": "Consultant",
        "country": "China",
        "employment_type": "Full-time",
        "department": "Delivery and Capabilities",
        "offered_job_role": null,
        "start_date": "2018-01-24"
    },
    {
        "grade": "Senior Consultant",
        "country": "Germany",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-02-01"
    },
    {
        "grade": "Consultant",
        "country": "Germany",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-01-01"
    },
    {
        "grade": "Consultant",
        "country": "China",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-04-02"
    },
    {
        "grade": "Senior Consultant",
        "country": "Australia",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-04-15"
    },
    {
        "grade": "Senior Consultant",
        "country": "India",
        "employment_type": "Regular",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-04-08"
    },
    {
        "grade": "Consultant",
        "country": "China",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-04-30"
    },
    {
        "grade": "Consultant",
        "country": "Ecuador",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-04-02"
    },
    {
        "grade": "Senior Consultant",
        "country": "Germany",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-02-01"
    },
    {
        "grade": "Consultant - Graduate",
        "country": "USA",
        "employment_type": "Full-time",
        "department": "Professional Services",
        "offered_job_role": null,
        "start_date": "2018-04-08"
    }
]`) as Employee[];
