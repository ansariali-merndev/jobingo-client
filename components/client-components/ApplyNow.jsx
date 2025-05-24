"use client";
import { Button } from "@/components/ui/button";
import { useSavedJob } from "@/context/SavedJobContext";
import { applyToJob, incrementApplicants } from "@/data/axios";
import { useState } from "react";
import Swal from "sweetalert2";

export const ApplyBtn = ({ id, job }) => {
  const [apply, setApply] = useState(false);
  const { userEmail } = useSavedJob();

  const handleButtonClick = async () => {
    const { title, description, location, company } = job;

    const forwardData = {
      title,
      jobId: id.id,
      description,
      location,
      company,
      userEmail,
    };

    // console.log(forwardData);

    try {
      const res = await applyToJob(forwardData);

      if (res.message === "warn") {
        Swal.fire({
          title: "Already Applied",
          icon: "info",
          timer: 3000,
          showConfirmButton: false,
          background: "#2e265c",
          color: "#ffffff",
          iconColor: "#facc15",
          toast: true,
          position: "top-end",
        });
        setApply(true);
      } else if (res.message === "success") {
        await incrementApplicants({ id });

        Swal.fire({
          title: "Applied Successfully",
          icon: "success",
          timer: 3000,
          showConfirmButton: false,
          background: "#2e265c",
          color: "#ffffff",
          iconColor: "#facc15",
          toast: true,
          position: "top-end",
        });
        setApply(true);
      }
    } catch (error) {
      Swal.fire({
        title: "Error Applying",
        text: error.message,
        icon: "error",
        background: "#2e265c",
        color: "#ffffff",
        iconColor: "#f87171",
      });
    }
  };

  return (
    <Button onClick={handleButtonClick} variant={"outline"} disabled={apply}>
      {apply ? "Applied" : "Apply Now"}
    </Button>
  );
};
