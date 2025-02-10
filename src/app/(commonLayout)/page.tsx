"use client";

import { Button } from "@/components/ui/button";
import { handleTheme } from "@/lib/utils";
import { ChevronsUpDown, Mail, Phone, Rocket } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const { textColor } = handleTheme(theme as string);
  return (
    <div className="flex flex-col px-10">
      {/* About me */}
      <div className={`flex flex-col mt-10 text-${textColor}`}>
        <div>
          <h1 className="text-3xl font-bold font-roboto">ABOUT ME</h1>
          <hr className="border-primary/50" />
        </div>
        <div className="flex gap-10 py-5">
          <div className="flex flex-col gap-2">
            <Image
              src="https://res.cloudinary.com/duoa4oiur/image/upload/v1739204946/pic_r53qy7.png"
              width={250}
              height={100}
              alt="my image"
              className=""
            />
            <Link
              href={
                "https://drive.google.com/file/d/1S-cl0Qq6yeGoEI6Mj0drryz92JjJwRrY/view"
              }
            >
              <Button className="w-full rounded-none">
                <Rocket />
                Download CV
              </Button>
            </Link>
          </div>
          <div className="w-2/3 flex flex-col gap-5">
            <p className={`opacity-70`}>
              I’m <span className="font-semibold">Nur Hossain Farid</span> a
              Junior <span className="font-semibold">Full Stack Developer</span>{" "}
              specializing in the <span className="font-semibold">MERN</span>{" "}
              (MongoDB, Express.js, React, Node.js) Stack, with a growing
              passion for AI and data science. With hands-on experience in both
              front-end and back-end development, he has built dynamic and
              user-friendly web applications that seamlessly integrate APIs,
              ensuring smooth functionality and performance. His expertise spans
              across UI/UX design, database management, and scalable server-side
              logic, allowing him to develop complete web solutions tailored to
              user needs.
            </p>
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="flex flex-col items-start gap-3"
            >
              <CollapsibleTrigger
                asChild
                className={`${isOpen ? "hidden" : ""}`}
              >
                <Button>Read More</Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="">
                <p className={`opacity-70`}>
                  I’m Beyond full-stack development, Nur actively explores
                  machine learning, data analysis, and website security,
                  continuously expanding his knowledge to stay ahead of industry
                  trends. His leadership as the President of the Data Science
                  Club demonstrates his commitment to fostering learning
                  communities, conducting workshops, and guiding projects in
                  data-driven technologies. Passionate about innovation and
                  problem-solving, he strives to create efficient, scalable, and
                  impactful applications that blend technology with real-world
                  problem-solving. His dedication to continuous learning makes
                  him a valuable asset in any tech-driven environment.
                </p>
              </CollapsibleContent>
              <CollapsibleTrigger
                asChild
                className={`${!isOpen ? "hidden" : ""}`}
              >
                <Button>Close</Button>
              </CollapsibleTrigger>
            </Collapsible>
            <div className="flex  gap-10">
              <div className="flex gap-2 font-raleway font-bold">
                <Mail className="text-primary" />
                faahsan1516@gmail.com
              </div>
              <div className="flex gap-2 font-raleway font-bold">
                <Phone className="text-primary" />
                01841268946
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* More About Me */}
      <div>
        <h1 className="text-3xl font-bold font-roboto">MORE ABOUT ME</h1>
        <hr className="border-primary/50" />
        <div>
          <div className="flex gap-10 py-5">
            <div>
              <div className="bg-primary text-white rounded-full p-2">
                <Rocket size={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
