"use client";

import { getSavedJob } from "@/data/axios";
import { useUser } from "@clerk/nextjs";
import { createContext, useContext, useEffect, useState } from "react";

const SavedJobContext = createContext();

export const SavedJobProvider = ({ children }) => {
  const [savedJob, setSavedJob] = useState([]);
  const { isLoaded, isSignedIn, user } = useUser();

  const fetchSavedJob = async () => {
    if (isLoaded && isSignedIn && user) {
      const userEmail = user?.primaryEmailAddress?.emailAddress;
      if (userEmail) {
        const res = await getSavedJob({ userEmail });
        if (res.message === "success") {
          setSavedJob(res.data.map((job) => job.job_id));
        }
      }
    }
  };

  useEffect(() => {
    fetchSavedJob();
  }, [isLoaded, isSignedIn, user]);

  const value = {
    savedJob,
    refetch: fetchSavedJob,
  };

  return (
    <SavedJobContext.Provider value={value}>
      {children}
    </SavedJobContext.Provider>
  );
};

export const useSavedJob = () => useContext(SavedJobContext);
