"use client";

import BlogDetailsCard from "@/components/shared/BlogDetailsCart";
import Spinner from "@/components/shared/Spinner";
import { useGetBlogByIdQuery } from "@/redux/features/blogs/blog.slice";

const BlogDetails = ({ params }: { params: { blogId: string } }) => {
  const { data: blog, isLoading } = useGetBlogByIdQuery(params?.blogId, {});
  if (isLoading) return <Spinner />;
  return (
    <div>
      <BlogDetailsCard key={blog.id} blog={blog} />
    </div>
  );
};

export default BlogDetails;
