import client from "~/supa-client";
import type { Database } from "database.types";

type JobLocation = Database["public"]["Enums"]["location"];
type JobType = Database["public"]["Enums"]["job_type"];
type SalaryRange = Database["public"]["Enums"]["salary_range"];

export const getJobs = async ({
  limit,
  location,
  type,
  salary,
}: {
  limit: number;
  location?: JobLocation;
  type?: JobType;
  salary?: SalaryRange;
}) => {
  const baseQuery = client
    .from("jobs")
    .select(
      `
    job_id,
    position,
    overview,
    company_name,
    company_logo,
    company_location,
    job_type,
    location,
    salary_range,
    created_at
    `
    )
    .limit(limit);
  if (location) {
    baseQuery.eq("location", location);
  }
  if (type) {
    baseQuery.eq("job_type", type);
  }
  if (salary) {
    baseQuery.eq("salary_range", salary);
  }
  const { data, error } = await baseQuery;
  if (error) {
    throw error;
  }
  return data;
};

export const getJobById = async (jobId: number) => {
  const { data, error } = await client
    .from("jobs")
    .select("*")
    .eq("job_id", jobId)
    .single();
  if (error) throw error;
  return data;
};
