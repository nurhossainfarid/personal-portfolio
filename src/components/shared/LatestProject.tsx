"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useGetAllProjectQuery } from "@/redux/features/projects/project.slice";
import Spinner from "./Spinner";
import ProjectCart from "./ProjectCart";
import { Project } from "@/types/global";

const LatestProject = () => {
  const { data: projects, isLoading } = useGetAllProjectQuery({});

  if (isLoading) return <Spinner />;
  return (
    <div className={`flex flex-col py-10 text-black dark:text-white px-10 `}>
      <h2 className="text-3xl font-bold font-roboto bg-text-gradient-light bg-clip-text text-transparent inline-block">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        {projects &&
          [...projects]
            .sort(() => Math.random() - 0.5)
            .slice(0, 4)
            .map((project: Project) => (
              <ProjectCart key={project.id} project={project} />
            ))}
      </div>
      <Link href="/projects" className="text-center">
        <Button
          variant={"outline"}
          className="mt-5 hover:bg-primary hover:text-white"
        >
          View More Projects
        </Button>
      </Link>
    </div>
  );
};

export default LatestProject;
