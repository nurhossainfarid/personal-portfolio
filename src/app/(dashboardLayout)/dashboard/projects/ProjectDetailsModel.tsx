import ProjectDetailsCart from "@/components/shared/ProjectDetails";

import { Project } from "@/types/global";
interface ProjectDetailsModelProps {
  project: Project;
}

const ProjectDetailsModel = ({ project }: ProjectDetailsModelProps) => {
  return (
    <div className="p-6">
      <ProjectDetailsCart key={project._id} projectId={project._id} />
    </div>
  );
};

export default ProjectDetailsModel;
