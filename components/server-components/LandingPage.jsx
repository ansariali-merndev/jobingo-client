import { image } from "@/assets/assets";
import Image from "next/image";
import { Button } from "../ui/button";
import { HomeCarousel } from "../client-components/Carousel";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "../ui/accordion";
import faq from "../../data/faq.json";
import Link from "next/link";

export const Home = () => {
  return (
    <section>
      {/* ----------- Hero Section ----------------- */}
      <div className="flex justify-center items-center mt-28 md:mt-36">
        <h2 className="text-2xl text-center sm:text-4xl md:text-8xl flex flex-col font-extrabold bg-gradient-to-br from-gray-600 via-gray-100 to-white text-transparent bg-clip-text">
          Find Your Dream Job{" "}
          <span className="flex items-center gap-3 justify-center">
            with
            <Image src={image.logo} alt="" width={140} className="md:w-80" />
          </span>
        </h2>
      </div>
      <p className="text-center text-xs md:text-base text-gray-400 my-4">
        Explore thousands of job listings or find the perfect candidate
      </p>

      {/* ---------------- Button Section -------------------- */}
      <div className="flex gap-4 justify-center mt-10 md:mt-16">
        <Button variant={"glow"} size={"xl"}>
          Find Job
        </Button>
        <Link href={"/post-job"}>
          <Button variant={"frosted"} size={"xl"}>
            Post a Job
          </Button>
        </Link>
      </div>

      {/* ------------ Carousel ---------------- */}
      <HomeCarousel />

      {/* --------------- Banner ----------------- */}
      <Image src={image.banner} alt="" className="w-full" />

      {/* ---------------- Card -------------------- */}
      <div className="grid md:grid-cols-2 my-8 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </div>

      {/* --------------- Accordian -------------------- */}

      <Accordion type="single" collapsible className="w-full my-12">
        {faq.map((item, index) => (
          <AccordionItem value={`item ${index}`} key={index}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
