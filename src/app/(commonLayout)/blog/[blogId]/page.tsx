import BlogDetailsCard from "@/components/shared/BlogDetailsCard";
import { Blog } from "@/types/global";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return blogs.slice(0, 3)?.map((blog: Blog) => ({ blogId: blog.id }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await res.json();
  return {
    title: `NexaBlog | ${blog.title}`,
    description: blog.description,
  };
};

const BlogDetails = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await res.json();
  return (
    <div>
      <BlogDetailsCard key={blog.id} blog={blog} />
    </div>
  );
};

export default BlogDetails;
