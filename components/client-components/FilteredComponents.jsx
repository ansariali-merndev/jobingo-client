"use client";

import { jobTitles } from "@/data/data";
import { JobCard } from "../server-components/CardComponent";
import {
  SelectContent,
  SelectValue,
  Select,
  SelectTrigger,
  SelectGroup,
  SelectItem,
} from "../ui/select";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";

export const FilterdJob = ({ data }) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [titleFiltered, setTitleFiltered] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const search = searchFilter.toLowerCase().trim();
    const filtered = data.filter((item) => {
      const titleMatch =
        titleFiltered === "" ||
        item.title.toLowerCase().includes(titleFiltered);

      const searchMatch =
        search === "" ||
        item.title.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        item.skills.toLowerCase().includes(search);

      return titleMatch && searchMatch;
    });

    setFilteredData(filtered);
  }, [titleFiltered, searchFilter]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-2 md:gap-12 my-4">
        <Select onValueChange={(val) => setTitleFiltered(val)}>
          <SelectTrigger className={"w-full"}>
            <SelectValue placeholder="Select Job Title" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {jobTitles.map((item, index) => (
                <SelectItem key={index} value={item.toLowerCase()}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          placeholder="Search here..."
          type="text"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobCard data={filteredData} />
      </div>
    </>
  );
};
