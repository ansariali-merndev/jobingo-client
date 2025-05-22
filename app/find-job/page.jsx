import { Auth } from "@/components/client-components/CheckAuth";
import { JobCard } from "@/components/server-components/CardComponent";
import { Title } from "@/components/server-components/Title";

export default function () {
  return (
    <>
      <Auth />
      <section>
        <Title title={"Latest Job"} />
        <JobCard />
      </section>
    </>
  );
}
