import { Auth } from "@/components/client-components/CheckAuth";
import { JobCard } from "@/components/server-components/CardComponent";
import { Title } from "@/components/server-components/Title";
import { getAllJob } from "@/data/axios";

export default async function () {
  const res = await getAllJob();
  return (
    <>
      <Auth />
      <section>
        <Title title={"Latest Job"} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <JobCard data={res.job} />
        </div>
      </section>
    </>
  );
}
