"use client";

import { Auth } from "@/components/client-components/CheckAuth";
import { SelectTag } from "@/components/server-components/SelectDemo";
import { Title } from "@/components/server-components/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { companyName, location } from "@/data/data";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { BarLoader } from "react-spinners";
import { addJob } from "@/data/axios";
import Swal from "sweetalert2";

export default function PostJob() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [inputPostJob, setInputPostJob] = useState({
    recruiterEmail: "",
    recruiterClerkId: "",
    title: "",
    description: "",
    company: "",
    location: "",
    skills: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn && user) {
        setInputPostJob((prev) => ({
          ...prev,
          recruiterEmail: user.primaryEmailAddress?.emailAddress || "",
          recruiterClerkId: user.id || "",
        }));
      }
      setLoading(false);
    }
  }, [isLoaded, isSignedIn, user]);

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setInputPostJob((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // check data is empty or not
    if (inputPostJob.location === "" || inputPostJob.company === "") {
      Swal.fire({
        icon: "warning",
        title: "Please Select Location or City Name",
        background: "#2e265c",
        color: "#ffffff",
        iconColor: "#facc15",
        showConfirmButton: true,
      });
      return;
    } else if (
      inputPostJob.description === "" ||
      inputPostJob.title === "" ||
      inputPostJob.skills === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Please Select Required Fields",
        background: "#2e265c",
        color: "#ffffff",
        iconColor: "#facc15",
        showConfirmButton: true,
      });
      return;
    }
    const res = await addJob(inputPostJob);
    if (res.message === "success") {
      Swal.fire({
        icon: "success",
        title: "Job Posted Successfully",
        text: "Your job listing has been added and is now visible to applicants.",
        background: "#2e265c",
        color: "#ffffff",
        iconColor: "#facc15",
        showConfirmButton: true,
      });
    }
    setInputPostJob((prev) => ({
      ...prev,
      title: "",
      description: "",
      company: "",
      location: "",
      skills: "",
    }));
  };

  return loading || !isLoaded ? (
    <BarLoader color="blue" width={"100%"} />
  ) : (
    <>
      <Auth />
      <section>
        <Title title={"Post a Job"} />
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          <Input
            placeholder="Job title here..."
            className="w-full"
            name="title"
            value={inputPostJob.title}
            required
            onChange={handleInputData}
          />
          <Textarea
            placeholder="Job description here..."
            className="h-20"
            name="description"
            value={inputPostJob.description}
            required
            onChange={handleInputData}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
            <SelectTag
              arr={companyName}
              category={"Company"}
              name="company"
              value={inputPostJob.company}
              onChange={handleInputData}
            />
            <SelectTag
              arr={location}
              category={"Location"}
              name="location"
              value={inputPostJob.location}
              onChange={handleInputData}
            />
          </div>
          <Textarea
            placeholder="Mention skills and responsibilities. Use a period (.) to separate each point."
            className={"h-80 md:h-50"}
            name="skills"
            required
            value={inputPostJob.skills}
            onChange={handleInputData}
          />
          <Button type="submit" variant={"outline"}>
            Post
          </Button>
        </form>
      </section>
    </>
  );
}
