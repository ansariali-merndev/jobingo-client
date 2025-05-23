"use client";

import { JobCard } from "@/components/server-components/CardComponent";
import { Title } from "@/components/server-components/Title";
import { getAllJob, getSavedJob } from "@/data/axios";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function SavedJob() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [userEmail, setUserEmail] = useState("");
  const [allJobs, setAllJobs] = useState([]);
  const [savedJobData, setSavedJobData] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      setUserEmail(user?.primaryEmailAddress?.emailAddress || "");
    }
  }, [isLoaded, isSignedIn, user]);

  useEffect(() => {
    if (userEmail) {
      fetchSavedJobs();
      fetchAllJobs();
    }
  }, [userEmail]);

  useEffect(() => {
    const savedIds = savedJobData.map((item) => item.job_id);
    const filteredJobs = allJobs.filter((job) => savedIds.includes(job._id));
    setSavedJobs(filteredJobs);
  }, [savedJobData, allJobs]);

  const fetchSavedJobs = async () => {
    try {
      const res = await getSavedJob({ userEmail });
      if (res.message === "success") {
        setSavedJobData(res.data);
      }
    } catch (error) {
      console.error("Error fetching saved jobs:", error.message);
    }
  };

  const fetchAllJobs = async () => {
    try {
      const res = await getAllJob();
      if (res.message === "success") {
        setAllJobs(res.job);
      }
    } catch (error) {
      console.error("Error fetching all jobs:", error.message);
    }
  };

  return savedJobs.length > 0 ? (
    <section>
      <Title title={"Saved Job"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <JobCard data={savedJobs} />
      </div>
    </section>
  ) : (
    <Title title={"No Saved Job Found"} />
  );
}
