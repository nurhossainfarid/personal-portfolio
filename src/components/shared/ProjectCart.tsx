import { Project } from "@/types/global";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const ProjectCart = ({
  project,
  isUpdated = false,
}: {
  project: Project;
  isUpdated?: boolean;
}) => {
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
        <div className="flex items-center gap-2">
          <Link href={`/projects/${project.id}`} className="text-primary ml-1">
            <Button>Details</Button>
          </Link>
          {isUpdated && (
            <>
              <Link
                href={`/projects/${project.id}`}
                className="text-primary ml-1"
              >
                <Button>Edit</Button>
              </Link>
              <Link
                href={`/projects/${project.id}`}
                className="text-primary ml-1"
              >
                <Button>Delete</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCart;
