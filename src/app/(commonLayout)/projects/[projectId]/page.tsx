"use client";

import ProjectDetailsCart from "@/components/shared/ProjectDetails";
import Spinner from "@/components/shared/Spinner";
import { useGetProjectByIdQuery } from "@/redux/features/projects/project.slice";

const ProjectDetails = ({ params }: { params: { projectId: string } }) => {
  const { data: project, isLoading } = useGetProjectByIdQuery(
    params?.projectId,
    {}
  );
  if (isLoading) return <Spinner />;
  return (
    <div>
      <ProjectDetailsCart key={project.id} project={project} />
    </div>
  );
};

export default ProjectDetails;
