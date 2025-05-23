import Link from "next/link";
import { SaveBtn } from "../client-components/SaveButton";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const JobCard = ({ data }) => {
  return (
    <>
      {data.map(
        ({ title, _id, description, location, company, appilcants }, index) => (
          <Card key={_id}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription className="h-30">{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-gray-400 text-sm">
                <div className="flex justify-between">
                  <p>
                    Location: <span>{location}</span>
                  </p>
                  <p>
                    <span>{appilcants}</span> Applicant
                  </p>
                </div>
                <p>
                  Company: <span>{company}</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className={"flex gap-4"}>
              <Link href={`/find-job/${_id}`}>
                <Button variant={"outline"}>View More Detail</Button>
              </Link>
              <SaveBtn job_id={_id} />
            </CardFooter>
          </Card>
        )
      )}
    </>
  );
};
