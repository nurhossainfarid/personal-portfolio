import { useCreateBlogMutation } from "@/redux/features/blogs/blog.slice";
import { Blog } from "@/types/global";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CreateBlog = () => {
  const [addBlog] = useCreateBlogMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Blog>();
  const router = useRouter();

  const onSubmit = (data: Blog) => {
    console.log(data);
    try {
      addBlog(data);
      toast.success("Blog created successfully");
      reset();
      router.push("/dashboard");
    } catch {
      toast.error("Failed to create blog");
    }
  };
  return (
    <div className="flex items-center justify-center px-4 py-10 md:w-[1200px]">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Create Blog
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                {...register("title", { required: "Title is required" })}
                type="text"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
                placeholder="Enter blog title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors?.title?.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Author Name
              </label>
              <input
                {...register("author_name", {
                  required: "Author name is required",
                })}
                type="text"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter author name"
              />
              {errors.author_name && (
                <p className="text-red-500 text-sm">
                  {errors.author_name.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Publish Date
              </label>
              <input
                {...register("publish_date", {
                  required: "Publish date is required",
                })}
                type="date"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
              {errors.publish_date && (
                <p className="text-red-500 text-sm">
                  {errors.publish_date.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Total Likes
              </label>
              <input
                {...register("total_likes", {
                  required: "Total likes is required",
                  valueAsNumber: true,
                })}
                type="number"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
                placeholder="Enter total likes"
              />
              {errors.total_likes && (
                <p className="text-red text-sm">{errors.total_likes.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <input
                {...register("category", {
                  required: "Category is required",
                })}
                type="text"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter Category"
              />
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Blog Image URL
              </label>
              <input
                {...register("blog_image", {
                  required: "Image URL is required",
                  pattern: {
                    value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/i,
                    message: "Enter a valid image URL",
                  },
                })}
                type="url"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
                placeholder="Paste image URL here"
              />
              {errors.blog_image && (
                <p className="text-red text-sm">{errors.blog_image.message}</p>
              )}
            </div>
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
              placeholder="Enter blog description"
            ></textarea>
            {errors.description && (
              <p className="text-red text-sm">{errors.description.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-4 rounded-md font-semibold text-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
