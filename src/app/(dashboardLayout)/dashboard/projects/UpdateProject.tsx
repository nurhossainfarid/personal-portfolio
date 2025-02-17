import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUpdateProjectMutation } from "@/redux/features/projects/project.slice";
import { Project } from "@/types/global";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";

const UpdateProject = ({ existingProject }: { existingProject: Project }) => {
  const { register, handleSubmit, reset } = useForm<Project>();

  const router = useRouter();
  const [updateProject] = useUpdateProjectMutation();

  useEffect(() => {
    reset(existingProject);
  }, [existingProject, reset]);

  const onSubmit = async (data: Project) => {
    try {
      const updatedProject: Project = {
        id: existingProject.id,
        title:
          data.title !== undefined && data.title !== ""
            ? data.title
            : existingProject.title,
        description:
          data.description !== undefined && data.description !== ""
            ? data.description
            : existingProject.description,
        github:
          data.github !== undefined && data.github !== ""
            ? data.github
            : existingProject.github,
        live:
          data.live !== undefined && data.live !== ""
            ? data.live
            : existingProject.live,
        image:
          data.image !== undefined && data.image !== ""
            ? data.image
            : existingProject.image,
        features:
          data.features !== undefined && data.features.length > 0
            ? data.features
            : existingProject.features,
        technologies: {
          frontend:
            data.technologies?.frontend !== undefined &&
            data.technologies.frontend !== ""
              ? data.technologies.frontend
              : existingProject.technologies?.frontend,
          backend:
            data.technologies?.backend !== undefined &&
            data.technologies.backend !== ""
              ? data.technologies.backend
              : existingProject.technologies?.backend,
          database:
            data.technologies?.database !== undefined &&
            data.technologies.database !== ""
              ? data.technologies.database
              : existingProject.technologies?.database,
          paymentGateway:
            data.technologies?.paymentGateway !== undefined &&
            data.technologies.paymentGateway !== ""
              ? data.technologies.paymentGateway
              : existingProject.technologies?.paymentGateway,
          deployment:
            data.technologies?.deployment !== undefined &&
            data.technologies.deployment !== ""
              ? data.technologies.deployment
              : existingProject.technologies?.deployment,
        },
      };
      console.log(updateProject);

      await updateProject({ id: existingProject.id, data: updatedProject });
      toast.success("Project updated successfully");
      reset();
      router.push("/dashboard");
    } catch {
      toast.error("Failed to update project");
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className=" w-full">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Update Project
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              {...register("title")}
              type="text"
              defaultValue={existingProject.title}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Enter project title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              {...register("image")}
              type="url"
              defaultValue={existingProject.image}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Paste project image URL here"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              {...register("description")}
              rows={4}
              defaultValue={existingProject.description}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Enter project description"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              GitHub Link
            </label>
            <input
              {...register("github")}
              type="url"
              defaultValue={existingProject.github}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Enter GitHub repository URL"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Live Demo Link
            </label>
            <input
              {...register("live")}
              type="url"
              defaultValue={existingProject.live}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Enter live project URL"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Technologies
            </label>
            <input
              {...register("technologies.frontend")}
              type="text"
              defaultValue={existingProject.technologies?.frontend}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
              placeholder="Frontend technologies"
            />
            <input
              {...register("technologies.backend")}
              type="text"
              defaultValue={existingProject.technologies?.backend}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
              placeholder="Backend technologies"
            />
            <input
              {...register("technologies.database")}
              type="text"
              defaultValue={existingProject.technologies?.database}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
              placeholder="Database"
            />
            <input
              {...register("technologies.paymentGateway")}
              type="text"
              defaultValue={existingProject.technologies?.paymentGateway}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
              placeholder="Payment Gateway"
            />
            <input
              {...register("technologies.deployment")}
              type="text"
              defaultValue={existingProject.technologies?.deployment}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
              placeholder="Deployment Platform"
            />
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-4 rounded-md font-semibold text-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                Update Project
              </button>
            </DialogClose>
          </DialogFooter>
        </form>
      </div>
    </div>
  );
};

export default UpdateProject;
