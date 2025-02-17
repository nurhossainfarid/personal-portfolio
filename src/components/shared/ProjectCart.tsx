import { Project } from "@/types/global";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useDeleteProjectMutation } from "@/redux/features/projects/project.slice";
import { toast } from "sonner";

const ProjectCart = ({
  project,
  isUpdated = false,
}: {
  project: Project;
  isUpdated?: boolean;
}) => {
  const [deleteProject] = useDeleteProjectMutation();
  const handleDeleteProject = (id: string) => {
    deleteProject(id);
    toast.success("Project deleted successfully");
  };
  return (
    <div className="w-full shadow-md rounded-lg overflow-hidden relative">
      <figure>
        <Image
          src={project.image}
          width={600}
          height={100}
          alt="project image"
          className="rounded-t-lg h-64 object-cover w-full"
        />
      </figure>
      <div className="absolute opacity-0 hover:opacity-100 inset-0 bg-black hover:bg-opacity-80 flex flex-col justify-center items-center gap-2 transition-all duration-700">
        <p className="text-white font-bold text-lg">{project.title}</p>
        <div className="flex items-center gap-3">
          <Link href={`/projects/${project.id}`} className="text-primary">
            <Button>Details</Button>
          </Link>
          {isUpdated && (
            <>
              <Link href={`/projects/${project.id}`} className="text-primary">
                <Button>Edit</Button>
              </Link>
              <Button
                className=""
                onClick={() => handleDeleteProject(project.id)}
              >
                Delete
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCart;
