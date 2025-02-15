"use client";

import ProjectCart from "@/components/shared/ProjectCart";
import Spinner from "@/components/shared/Spinner";
import { useGetAllProjectQuery } from "@/redux/features/projects/project.slice";
import { Project } from "@/types/global";

const ProjectPage = () => {
  const { data: projects, isLoading } = useGetAllProjectQuery({});

  if (isLoading) return <Spinner />;
  return (
    <div className="px-10 py-5">
      <h1 className="text-3xl font-bold font-roboto bg-text-gradient-light bg-clip-text text-transparent inline-block">
        All Latest <span className="">Projects</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        {projects?.map((project: Project) => (
          <ProjectCart key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
