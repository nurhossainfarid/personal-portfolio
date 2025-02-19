import BlogCard from "@/components/shared/BlogCard";
import Spinner from "@/components/shared/Spinner";
import { useGetAllBlogQuery } from "@/redux/features/blogs/blog.slice";
import { Blog } from "@/types/global";
import React from "react";

const Blogs = () => {
  const { data, isLoading } = useGetAllBlogQuery({});
  const blogs = data?.data;

  if (isLoading) return <Spinner />;
  return (
    <div className="px-10 py-5">
      <h1 className="text-3xl font-bold font-roboto bg-text-gradient-light bg-clip-text text-transparent inline-block">
        All Latest <span className="">Blogs</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-5">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog._id} blog={blog} isUpdate={true} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
