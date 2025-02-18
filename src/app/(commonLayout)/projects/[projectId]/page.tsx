import ProjectDetailsCart from "@/components/shared/ProjectDetails";

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;
  return (
    <div>
      <ProjectDetailsCart key={projectId} projectId={projectId} />
    </div>
  );
};

export default ProjectDetails;
