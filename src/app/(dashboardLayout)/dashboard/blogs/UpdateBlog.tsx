import { useUpdateBlogMutation } from "@/redux/features/blogs/blog.slice";
import { Blog } from "@/types/global";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { DialogFooter } from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { useEffect } from "react";

const UpdateBlog = ({ existingBlog }: { existingBlog: Blog }) => {
  const [updateBlog] = useUpdateBlogMutation();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<Blog>();

  useEffect(() => {
    reset(existingBlog);
  }, [existingBlog, reset]);

  const onSubmit = async (data: Partial<Blog>) => {
    try {
      const updatedBlog: Blog = {
        id: existingBlog.id,
        title:
          data.title !== undefined && data.title !== ""
            ? data.title
            : existingBlog.title,
        description:
          data.description !== undefined && data.description !== ""
            ? data.description
            : existingBlog.description,
        publish_date:
          data.publish_date !== undefined && data.publish_date !== ""
            ? data.publish_date
            : existingBlog.publish_date,
        author_name:
          data.author_name !== undefined && data.author_name !== ""
            ? data.author_name
            : existingBlog.author_name,
        blog_image:
          data.blog_image !== undefined && data.blog_image !== ""
            ? data.blog_image
            : existingBlog.blog_image,
        total_likes:
          data.total_likes !== undefined && data.total_likes !== ""
            ? data.total_likes
            : existingBlog.total_likes,
      };

      // Call the update mutation with the updated blog object
      await updateBlog({ id: existingBlog.id, data: updatedBlog });

      toast.success("Blog updated successfully");
      reset(); // Reset the form
      router.push("/dashboard"); // Navigate back to dashboard
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Failed to update blog");
    }
  };

  return (
    <div className="flex items-center justify-center px-4 py-10 w-full mx-auto">
      <div className="w-full mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Update Blog
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                {...register("title")}
                type="text"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Author Name
              </label>
              <input
                {...register("author_name")}
                type="text"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Publish Date
              </label>
              <input
                {...register("publish_date")}
                type="date"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Total Likes
              </label>
              <input
                {...register("total_likes")}
                type="number"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Blog Image URL
            </label>
            <input
              {...register("blog_image")}
              type="url"
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              {...register("description")}
              rows={4}
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-4 rounded-md font-semibold text-lg hover:bg-primary"
              >
                Update Blog
              </button>
            </DialogClose>
          </DialogFooter>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
