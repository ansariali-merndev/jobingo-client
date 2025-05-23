"use client";
import { Button } from "@/components/ui/button";
import { incrementApplicants } from "@/data/axios";
import { useState } from "react";
import Swal from "sweetalert2";

export const ApplyBtn = ({ id }) => {
  const [apply, setApply] = useState(false);

  const handleButtonClick = async () => {
    if (apply) {
      Swal.fire({
        title: "Already Apply",
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
        background: "#2e265c",
        color: "#ffffff",
        iconColor: "#facc15",
        toast: true,
        position: "top-end",
      });
    } else {
      const res = await incrementApplicants({ id });
      if (res.message === "success") {
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
    }
  };
  return (
    <Button onClick={handleButtonClick} variant={"outline"}>
      Apply Now
    </Button>
  );
};
