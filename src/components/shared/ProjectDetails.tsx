"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  FaArrowAltCircleLeft,
  FaCheckCircle,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { MdOutlineBuild } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useGetProjectByIdQuery } from "@/redux/features/projects/project.slice";
import Spinner from "./Spinner";

const ProjectDetailsCart = ({ projectId }: { projectId: string }) => {
  const router = useRouter();
  const { data, isLoading } = useGetProjectByIdQuery(projectId);
  const project = data?.data;
  if (isLoading) return <Spinner />;
  return (
    <div className="px-10 py-5">
      {/* Back Button */}
      <Button
        onClick={() => router.back()}
        className="text-lg mb-5 font-roboto flex items-center gap-2 dark:text-gray-100"
      >
        <FaArrowAltCircleLeft /> Previous
      </Button>

      {/* Project Image */}
      <figure>
        <Image
          src={project.image}
          width={600}
          height={100}
          alt="project image"
          className="rounded-t-lg w-full h-100"
        />
      </figure>

      {/* Project Details */}
      <div className="mt-5">
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <p className="mt-2 opacity-80">{project.description}</p>

        {/* Links */}
        <div className="flex gap-4 mt-4">
          <Link href={project.github} target="_blank">
            <Button variant="outline" className="flex items-center gap-2">
              <FaGithub /> GitHub
            </Button>
          </Link>
          <Link href={project.live} target="_blank">
            <Button variant="outline" className="flex items-center gap-2">
              <FaExternalLinkAlt /> Live Demo
            </Button>
          </Link>
        </div>

        {project.features && (
          <div className="mt-5 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <FaCheckCircle className="text-green-500" /> Features:
            </h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300">
                {project.features.map((feature: string, index: number) => (
                <li key={index} className="mb-1">
                  {feature}
                </li>
                ))}
            </ul>
          </div>
        )}

        {/* Technologies Used Section */}
        <div className="mt-5 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-900 dark:text-gray-100">
            <MdOutlineBuild className="text-blue-500" /> Technologies Used:
          </h3>
          <ul className="grid grid-cols-2 gap-2 pl-5 mt-2 text-gray-700 dark:text-gray-300">
            {project.technologies.frontend && (
              <li>
                <b>Frontend:</b> {project.technologies.frontend}
              </li>
            )}
            {project.technologies.backend && (
              <li>
                <b>Backend:</b> {project.technologies.backend}
              </li>
            )}
            {project.technologies.database && (
              <li>
                <b>Database:</b> {project.technologies.database}
              </li>
            )}
            {project.technologies.paymentGateway && (
              <li>
                <b>Payment Gateway:</b> {project.technologies.paymentGateway}
              </li>
            )}
            {project.technologies.deployment && (
              <li>
                <b>Deployment:</b> {project.technologies.deployment}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsCart;
