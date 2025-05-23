"use client";

import { Heart } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { toggleSavedJob } from "@/data/axios";
import Swal from "sweetalert2";
import { useSavedJob } from "@/context/SavedJobContext";

export const SaveBtn = ({ job_id }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [userEmail, setUserEmail] = useState("");
  const { savedJob, refetch } = useSavedJob();

  useEffect(() => {
    if (isLoaded) {
      if ((isSignedIn, user)) {
        setUserEmail(user.primaryEmailAddress.emailAddress);
      }
    }
  }, [isLoaded, isSignedIn, user]);

  const handleSavedJob = async () => {
    const res = await toggleSavedJob({ userEmail, job_id });
    if (res.message === "success") {
      await refetch();
      Swal.fire({
        title: "Updated Successfully",
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
        background: "#2e265c",
        color: "#ffffff",
        iconColor: "#facc15",
        toast: true,
        position: "top-end",
      });
    }
  };

  const isSaved = savedJob.includes(job_id);

  return (
    <div>
      <Heart
        onClick={handleSavedJob}
        color={`${isSaved ? "red" : "#fff"}`}
        className={`w-6 h-6 ${isSaved && "fill-red-600"}`}
      />
    </div>
  );
};
