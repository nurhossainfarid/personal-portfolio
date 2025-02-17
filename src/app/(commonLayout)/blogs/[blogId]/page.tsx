import BlogDetailsCart from "@/components/shared/BlogDetailsCart";

const BlogDetails = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  return (
    <div>
      {blogId ? (
        <BlogDetailsCart key={blogId} blogId={blogId} />
      ) : (
        <p>Blog not found</p>
      )}
    </div>
  );
};

export default BlogDetails;
