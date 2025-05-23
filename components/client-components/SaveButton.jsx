"use client";

import { Heart } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { getSavedJob, savedJob } from "@/data/axios";
import Swal from "sweetalert2";

export const SaveBtn = ({ job_id }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (isLoaded) {
      if ((isSignedIn, user)) {
        setUserEmail(user.primaryEmailAddress.emailAddress);
      }
    }
  }, [isLoaded, isSignedIn, user]);

  const handleSavedJob = async () => {
    const res = await savedJob({ userEmail, job_id });
    if (res.message === "success") {
      Swal.fire({
        title: "Saved Job Successfully",
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

  return (
    <div>
      <Heart onClick={handleSavedJob} color="#fff" className="w-6 h-6" />
    </div>
  );
};
