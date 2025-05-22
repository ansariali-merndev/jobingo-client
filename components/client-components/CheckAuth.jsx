"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import Swal from "sweetalert2";

export const Auth = () => {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      Swal.fire({
        icon: "warning",
        title: "Authentication Required",
        text: "Please sign in to access this feature.",
        timer: 5000,
        showConfirmButton: false,
        background: "#2e265c",
        color: "#ffffff",
        iconColor: "#facc15",
        toast: true,
        position: "top-end",
      });
      router.push("/");
    }
  }, [isLoaded, isSignedIn]);

  return isLoaded ? <div></div> : <BarLoader color="blue" width={"100%"} />;
};
