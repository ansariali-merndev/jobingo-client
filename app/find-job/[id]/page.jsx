import { ApplyBtn } from "@/components/client-components/ApplyNow";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getJobById } from "@/data/axios";

export default async function JobID({ params }) {
  const id = await params;
  const res = await getJobById({ id });
  const data = res.job;
  const { appilcants, company, description, location, skills, title } = data;
  const skill = skills.split(".");
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between text-xs md:text-sm text-gray-400">
            <span>Comapny Name: {company}</span>
            <span>{appilcants} Applicant</span>
            <span>Location: {location}</span>
          </div>
          <div className="my-4 text-sm text-gray-300">
            {skill.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <ApplyBtn id={id} />
        </CardFooter>
      </Card>
    </section>
  );
}
