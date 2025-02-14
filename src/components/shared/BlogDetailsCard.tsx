import { Blog } from "@/types/global";
import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

const BlogDetailsCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="p-10">
      <p className="flex items-center justify-center text-white bg-primary w-fit px-3 py-1 rounded-full">
        <FaCalendar className="mr-2" />
        {blog.publish_date}
      </p>
      <h2 className="text-3xl font-bold font-roboto bg-text-gradient-light bg-clip-text text-transparent inline-block my-5">
        {blog.title}
      </h2>
      <div className="flex items-center justify-center bg-gray-100 mb-5 py-2 rounded-lg gap-2">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
          width={30}
          height={30}
          alt="author image"
        />

        <span className="text-lg font-medium text-black">
          {blog.author_name}
        </span>
      </div>
      <div className="flex gap-10">
        <div className="w-1/3">
          <div className=" text-lg leading-relaxed opacity-80">
            <p className="text-justify">{blog.description}</p>
          </div>
          <div className="flex justify-between items-center mt-5">
            <div className="flex items-center text-xl">
              <AiFillLike className="text-primary mr-2 " />
              <span className="mr-1">{blog.total_likes}</span>
              Likes
            </div>
          </div>
        </div>
        <figure className="w-2/3">
          <Image
            src={blog.blog_image}
            width={600}
            height={100}
            alt="blog image"
            className="rounded-lg w-full"
          />
        </figure>
      </div>
    </div>
  );
};

export default BlogDetailsCard;
