"use client";

import { Blog } from "@/types/global";
import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import BlogDetailsModel from "@/app/(dashboardLayout)/dashboard/blogs/BlogDetailsModel";
import { useDeleteBlogMutation } from "@/redux/features/blogs/blog.slice";
import { toast } from "sonner";

const BlogCard = ({
  blog,
  isUpdate = true,
}: {
  blog: Blog;
  isUpdate: boolean;
}) => {
  const [deleteBlog] = useDeleteBlogMutation();
  const handleDeleteBlog = (id: string) => {
    deleteBlog(id);
    toast.success("Blog deleted successfully");
  };
  return (
    <div className="w-full shadow-md rounded-lg overflow-hidden">
      <figure>
        <Image
          src={blog.blog_image}
          width={600}
          height={100}
          alt="blog image"
          className="rounded-t-lg h-64 object-cover"
        />
      </figure>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <p className="flex items-center justify-center text-white bg-primary w-32 rounded-full py-1 text-sm">
            <FaCalendar className="mr-2" />
            {blog.publish_date}
          </p>
          {isUpdate && (
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 text-xs p-2  hover:border-2 hover:border-primary rounded-md font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
                onClick={() => handleDeleteBlog(blog.id)}
              >
                Delete
              </button>
              <button
                className="px-3 py-1 text-xs p-2 hover:border-2 hover:border-primary rounded-md font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
                onClick={() => console.log("delete blog")}
              >
                Update
              </button>
            </div>
          )}
        </div>
        <h2 className="text-xl font-bold mt-4">
          {blog.title.length > 30
            ? blog.title.slice(0, 30) + "..."
            : blog.title}
        </h2>
        <p className="text-gray-400 mt-2">
          {blog.description.length > 100
            ? blog.description.slice(0, 60) + "..."
            : blog.description}
          {!isUpdate ? (
            <Link href={`/blogs/${blog.id}`} className="text-primary ml-1">
              Read More
            </Link>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <button className="px-3 py-1 text-xs p-2  hover:border-2 hover:border-primary rounded-md font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
                  Details
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <BlogDetailsModel blog={blog} />
              </DialogContent>
            </Dialog>
          )}
        </p>
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
                width={100}
                height={100}
                alt="author image"
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium text-gray-500">
              {blog.author_name}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <AiFillLike className="text-primary text-xl mr-1" />
            {blog.total_likes} Likes
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
