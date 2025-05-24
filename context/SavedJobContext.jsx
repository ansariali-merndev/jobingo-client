"use client";

import { getSavedJob } from "@/data/axios";
import { useUser } from "@clerk/nextjs";
import { createContext, useContext, useEffect, useState } from "react";

const SavedJobContext = createContext();

export const SavedJobProvider = ({ children }) => {
  const [savedJob, setSavedJob] = useState([]);
  const { isLoaded, isSignedIn, user } = useUser();
  const [userEmail, setUserEmail] = useState("");

  const fetchSavedJob = async () => {
    if (isLoaded && isSignedIn && user) {
      const email = user?.primaryEmailAddress?.emailAddress;
      setUserEmail(email);
      if (email) {
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
    userEmail,
  };

  return (
    <SavedJobContext.Provider value={value}>
      {children}
    </SavedJobContext.Provider>
  );
};

export const useSavedJob = () => useContext(SavedJobContext);
