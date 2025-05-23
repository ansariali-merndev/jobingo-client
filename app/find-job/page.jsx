import { Auth } from "@/components/client-components/CheckAuth";
import { FilterdJob } from "@/components/client-components/FilteredComponents";
import { Title } from "@/components/server-components/Title";
import { getAllJob } from "@/data/axios";

export default async function () {
  const res = await getAllJob();
  return (
    <>
      <Auth />
      <section>
        <Title title={"Latest Job"} />
        <FilterdJob data={res.job} />
      </section>
    </>
  );
}
