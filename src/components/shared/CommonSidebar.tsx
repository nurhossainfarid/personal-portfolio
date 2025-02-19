"use client";
import CommonSidebarHeader from "../header/CommonSidebarHeader";
import Image from "next/image";
import TextAnimation from "./TextAnimation";
import { Button } from "../ui/button";
import Link from "next/link";

const CommonSidebar = () => {
  return (
    <div className="lg:fixed bg-black text-white w-96 lg:w-[600px] md:min-h-screen transition-transform md:translate-x-0">
      <CommonSidebarHeader />
      <div className="overflow-hidden relative">
        <div className="bg-black/50 h-screen w-full absolute z-10">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="font-raleway md:text-2xl font-semibold">
              Hello, I Am
            </h1>
            <h1 className="text-xl mg:text-2xl lg:text-5xl font-roboto font-bold uppercase">
              Nur Hossain Farid
            </h1>
            <div className="flex justify-center items-center gap-2">
              <h1 className="font-raleway text-2xl font-semibold">
                I&#39;m a{" "}
              </h1>
              <TextAnimation />
            </div>
            <Link href="/contact">
              <Button className="mt-10 text-white text-lg">Hire Me</Button>
            </Link>
          </div>
        </div>
        <Image
          src="https://res.cloudinary.com/duoa4oiur/image/upload/v1739173521/style_yz0evx.jpg"
          width={500}
          height={500}
          alt="my image"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default CommonSidebar;
