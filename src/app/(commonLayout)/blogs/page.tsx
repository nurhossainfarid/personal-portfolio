"use client";

import BlogCard from "@/components/shared/BlogCard";
import Spinner from "@/components/shared/Spinner";
import { useGetAllBlogQuery } from "@/redux/features/blogs/blog";
import { Blog } from "@/types/global";

const BlogPage = () => {
  const { data: blogs, isLoading } = useGetAllBlogQuery({});

  if (isLoading) return <Spinner />;
  return (
    <div className="px-10 py-5">
      <h1 className="text-3xl font-bold font-roboto bg-text-gradient-light bg-clip-text text-transparent inline-block">
        All Latest <span className="">Blogs</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
