"use client";

import { Title } from "@/components/server-components/Title";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useSavedJob } from "@/context/SavedJobContext";
import { getApplicantsByUserEmail } from "@/data/axios";
import { useEffect, useState } from "react";

export default function Applicants() {
  const { userEmail } = useSavedJob();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      if (userEmail) {
        const res = await getApplicantsByUserEmail({ userEmail });
        setData(res.jobs);
      }
    }
    getData();
  }, [userEmail]);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <section>
      <Title title={"My Applicants"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 text-xs md:text-sm text-gray-400">
                <p>
                  Location: <span>{item.location}</span>
                </p>
                <p>
                  Company: <span>{item.company}</span>
                </p>
                <p>
                  Status: <span>{item.status}</span>
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant={"outline"}>Pending</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
