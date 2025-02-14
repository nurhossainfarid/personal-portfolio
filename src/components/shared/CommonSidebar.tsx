"use client";
import CommonSidebarHeader from "../header/CommonSidebarHeader";
import Image from "next/image";
import TextAnimation from "./TextAnimation";
import { Button } from "../ui/button";

const CommonSidebar = () => {
  return (
    <div className="fixed bg-black text-white w-96 lg:w-[600px] min-h-screen transition-transform md:translate-x-0">
      <CommonSidebarHeader />
      <div className="overflow-hidden relative">
        <div className="bg-black/50 h-screen w-full absolute z-10">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="font-raleway text-2xl font-semibold">Hello, I Am</h1>
            <h1
              className="text-5xl font-roboto font-bold uppercase"
            >
              Nur Hossain Farid
            </h1>
            <div className="flex justify-center items-center gap-2">
              <h1 className="font-raleway text-2xl font-semibold">
                I&#39;m am{" "}
              </h1>
              <TextAnimation />
            </div>
            <Button className="mt-10">Hire Me</Button>
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
