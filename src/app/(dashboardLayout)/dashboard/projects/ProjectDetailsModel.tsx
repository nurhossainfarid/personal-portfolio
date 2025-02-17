import ProjectDetailsCart from "@/components/shared/ProjectDetails";

import { Project } from "@/types/global";
interface ProjectDetailsModelProps {
  project: Project;
}

const ProjectDetailsModel = ({ project }: ProjectDetailsModelProps) => {
  return (
    <div className="p-6">
      <ProjectDetailsCart key={project.id} project={project} />
    </div>
  );
};

export default ProjectDetailsModel;
