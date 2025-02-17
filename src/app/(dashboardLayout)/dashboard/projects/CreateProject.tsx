import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useCreateProjectMutation } from "@/redux/features/projects/project.slice";
import { Project } from "@/types/global";
import { nanoid } from "@reduxjs/toolkit";

const CreateProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Project>();
  const router = useRouter();
  const [addProject] = useCreateProjectMutation();

  const onSubmit = (data: Project) => {
    addProject({ ...data, id: nanoid() });
    toast.success("Project created successfully");
    reset();
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center px-4 py-10 md:w-[1200px]">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Create Project
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Enter project title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              {...register("image", { required: "Image URL is required" })}
              type="url"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Paste project image URL here"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              rows={4}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Enter project description"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              GitHub Link
            </label>
            <input
              {...register("github", { required: "GitHub link is required" })}
              type="url"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Enter GitHub repository URL"
            />
            {errors.github && (
              <p className="text-red-500 text-sm">{errors.github.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Live Demo Link
            </label>
            <input
              {...register("live", { required: "Live demo link is required" })}
              type="url"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Enter live project URL"
            />
            {errors.live && (
              <p className="text-red-500 text-sm">{errors.live.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Technologies
            </label>
            <input
              {...register("technologies.frontend")}
              type="text"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
              placeholder="Frontend technologies"
            />
            <input
              {...register("technologies.backend")}
              type="text"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
              placeholder="Backend technologies"
            />
            <input
              {...register("technologies.database")}
              type="text"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
              placeholder="Database"
            />
            <input
              {...register("technologies.paymentGateway")}
              type="text"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
              placeholder="Payment Gateway"
            />
            <input
              {...register("technologies.deployment")}
              type="text"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm"
              placeholder="Deployment Platform"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-4 rounded-md font-semibold text-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
