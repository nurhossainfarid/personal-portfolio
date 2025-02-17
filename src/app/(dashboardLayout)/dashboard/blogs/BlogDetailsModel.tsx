import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Blog } from "@/types/global";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

interface BlogDetailsModalProps {
  blog: Blog;
}

const BlogDetailsModal = ({ blog }: BlogDetailsModalProps) => {
  return (
    <div className="p-6">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold text-gray-900">
          {blog.title}
        </DialogTitle>
        <DialogDescription className="text-sm text-gray-500">
          Published on {new Date(blog.publish_date).toLocaleDateString()} by{" "}
          <span className="font-semibold text-gray-700">
            {blog.author_name}
          </span>
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="flex justify-center">
          <Image
            src={blog.blog_image}
            alt={blog.title}
            width={350}
            height={250}
            className="rounded-lg shadow-md w-full"
          />
        </div>
        <p className="text-md text-gray-700 leading-relaxed">
          {blog.description}
        </p>
        <p className="text-sm font-semibold text-gray-800 flex gap-2 items-center">
          <FaHeart className="text-red-500" /> Total Likes: {blog.total_likes}
        </p>
      </div>
    </div>
  );
};

export default BlogDetailsModal;
