import ProjectCart from "@/components/shared/ProjectCart";
import Spinner from "@/components/shared/Spinner";
import { useGetAllProjectQuery } from "@/redux/features/projects/project.slice";
import { Project } from "@/types/global";
import React from "react";

const Projects = () => {
  const { data, isLoading } = useGetAllProjectQuery({});
  const projects = data?.data;

  if (isLoading) return <Spinner />;
  return (
    <div className="px-10 py-5">
      <h1 className="text-3xl font-bold font-roboto bg-text-gradient-light bg-clip-text text-transparent inline-block">
        All <span className="">Project</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-5">
        {projects?.map((project: Project) => (
          <ProjectCart key={project._id} project={project} isUpdated={true} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
