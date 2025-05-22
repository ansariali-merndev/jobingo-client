import { SelectTag } from "@/components/server-components/SelectDemo";
import { Title } from "@/components/server-components/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { companyName, location } from "@/data/data";

export default function PostJob() {
  return (
    <section>
      <Title title={"Post a Job"} />
      <form className="flex flex-col gap-4">
        <Input placeholder="Job title here..." className="w-full" />
        <Textarea placeholder="Job description here..." className="h-20" />
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
          <SelectTag arr={companyName} category={"Company"} />
          <SelectTag arr={location} category={"Location"} />
        </div>
        <Textarea
          placeholder="Mention skills and responsibilities. Use a period (.) to separate each point."
          className={"h-80 md:h-50"}
        />
        <Button variant={"outline"}>Post</Button>
      </form>
    </section>
  );
}
