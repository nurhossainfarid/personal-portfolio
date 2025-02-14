"use client";

import { Button } from "@/components/ui/button";
import { cn, handleTheme } from "@/lib/utils";
import {
  GraduationCap,
  Mail,
  Phone,
  Rocket,
  ShieldQuestion,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "HTML & Css", level: 95 },
  { name: "JavaScript & Typescript", level: 85 },
  { name: "ReactJS", level: 90 },
  { name: "Next.js", level: 70 },
  { name: "Redux", level: 80 },
  { name: "Node.js", level: 85 },
  { name: "MongoDB", level: 80 },
];

const projects = [
  {
    title: "Project One",
    description: "Description for project one.",
    url: "https://example.com/project-one",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    url: "https://example.com/project-two",
  },
  {
    title: "Project Three",
    description: "Description for project three.",
    url: "https://example.com/project-three",
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMoreMe, setIsMoreMe] = useState("my-skills");
  const { theme } = useTheme();
  const { textColor } = handleTheme(theme as string);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="flex flex-col gap-5">
      {/* About me */}
      <div
        className={cn(
          `flex flex-col mt-10 px-10`,
          textColor && `text-${textColor}`
        )}
      >
        <div className="">
          <h1 className="text-3xl font-bold font-roboto bg-text-gradient-light bg-clip-text text-transparent inline-block">
            ABOUT ME
          </h1>
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
      <div
        className={cn(
          `${
            theme === "dark" || theme === "system"
              ? "bg-gray-900"
              : "bg-[#F5F5F5]"
          } py-10`
        )}
      >
        <div className="px-10">
          <h1 className="text-3xl font-bold font-roboto bg-text-gradient-light bg-clip-text text-transparent inline-block">
            MORE ABOUT ME
          </h1>
          <hr className="border-primary/50" />
          <div className="flex gap-10 mt-10 border-2">
            {/* More about me sidebar */}
            <div className="flex flex-col items-center justify-center h-full py-12 border-white border-[8px] rounded-r-3xl w-1/3">
              {/* My Skills */}
              <div
                className={`group ${
                  isMoreMe === "my-skills" ? "bg-primary" : "bg-secondary"
                } text-white rounded-full p-2 cursor-pointer relative border-primary border-[3px]`}
              >
                {/* Button: Hidden by default, shown when hovering over the icon */}
                <Button
                  className={`absolute -top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 ${
                    isMoreMe === "my-skills" && "opacity-100"
                  } transition-opacity duration-300 text-xs`}
                >
                  My Skills
                </Button>
                <Rocket size={40} onClick={() => setIsMoreMe("my-skills")} />
              </div>
              <hr className="border-primary border-2 h-16" />
              {/* Why Me */}
              <div
                className={`group ${
                  isMoreMe === "why-me" ? "bg-primary" : "bg-secondary"
                } text-white hover:bg-primary rounded-full p-2 cursor-pointer relative border-primary border-[3px]`}
              >
                {/* Button: Hidden by default, shown when hovering over the icon */}
                <Button
                  className={`absolute -top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 ${
                    isMoreMe === "why-me" && "opacity-100"
                  } transition-opacity duration-300 text-xs`}
                >
                  Why Me
                </Button>
                <ShieldQuestion
                  size={40}
                  onClick={() => setIsMoreMe("why-me")}
                />
              </div>
              <hr className="border-primary border-2 h-16" />
              {/* Works & Education */}
              <div
                className={`group ${
                  isMoreMe === "graduation" ? "bg-primary" : "bg-secondary"
                } text-white rounded-full p-2 cursor-pointer relative border-primary border-[3px]`}
              >
                {/* Button: Hidden by default, shown when hovering over the icon */}
                <Button
                  className={`absolute -top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 ${
                    isMoreMe === "graduation" && "opacity-100"
                  } transition-opacity duration-300 text-xs`}
                >
                  Works & Education
                </Button>
                <GraduationCap
                  size={40}
                  onClick={() => setIsMoreMe("graduation")}
                />
              </div>
            </div>
            {/* More about me content */}
            <div className="w-full h-100 p-2">
              <div
                className={`flex flex-col gap-5 ${
                  isMoreMe === "my-skills" ? "" : "hidden"
                }`}
              >
                <h2 className="text-2xl font-bold font-roboto">
                  My Skill On Web Development
                </h2>
                <div className="flex flex-col gap-5 ">
                  {
                    // Skills
                    skills.map((skill, index) => (
                      <div key={index} className="flex flex-col gap-2">
                        <p className="text-sm">{skill.name}</p>
                        <div className="relative w-full">
                          {/* Progress Bar */}
                          <Progress
                            className="h-[4px] bg-gray-300 rounded-full"
                            value={skill.level}
                          />

                          {/* Value Display */}
                          <span
                            className="font-roboto absolute top-1/2 transform -translate-y-1/2 px-2 py-1 text-xs font-semibold bg-white border border-orange-500 text-orange-600 rounded-md"
                            style={{
                              left: `calc(${skill.level}% - 30px)`, // Adjusting for better alignment
                            }}
                          >
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
              {/* Why me content */}
              <div
                className={`flex flex-col gap-3 ${
                  isMoreMe === "why-me" ? "block" : "hidden"
                }`}
              >
                <h2 className="text-2xl font-bold font-roboto">Why Me</h2>
                <div className="flex flex-col gap-2 items-center">
                  <p className="">
                    As a <strong>Junior Full Stack Developer</strong>{" "}
                    specializing in the <strong>MERN Stack</strong>, I bring a
                    strong foundation in both front-end and back-end
                    development, crafting dynamic and user-friendly applications
                    with seamless API integration.
                    {!isExpanded && "..."} {/* Show ellipsis when collapsed */}
                    {isExpanded && (
                      <>
                        {" "}
                        Beyond full-stack development, I have a growing passion
                        for <strong>AI, data science, and cybersecurity</strong>
                        , continuously expanding my expertise to stay ahead of
                        industry trends. My leadership as the{" "}
                        <strong>President of the Data Science Club</strong>{" "}
                        reflects my commitment to fostering learning
                        communities, organizing workshops, and guiding projects
                        in <strong>data-driven technologies</strong>. With
                        hands-on experience in
                        <strong>
                          {" "}
                          UI/UX design, database management, and scalable
                          server-side logic
                        </strong>
                        , I ensure the creation of efficient and impactful web
                        solutions tailored to user needs. Passionate about{" "}
                        <strong>innovation and problem-solving</strong>, I
                        thrive on building applications that blend technology
                        with real-world challenges. My dedication to continuous
                        learning and adaptability makes me a{" "}
                        <strong>
                          valuable asset in any tech-driven environment
                        </strong>
                        .
                      </>
                    )}
                  </p>
                  <button
                    onClick={toggleReadMore}
                    className="text-primary hover:underline text-sm"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
              {/* Works & Education content */}
              <div
                className={`flex flex-col gap-3 ${
                  isMoreMe === "graduation" ? "block" : "hidden"
                }`}
              >
                <h2 className="text-2xl font-bold font-roboto">
                  Works & Education
                </h2>
                <div className="flex flex-col gap-5">
                  <div>
                    <h3 className="text-lg font-bold font-roboto">Education</h3>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <h4 className="font-semibold">Bachelor of Science</h4>
                        <span className="opacity-70">
                          in Software Engineering
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <h4 className="font-semibold">
                          Daffodil International University
                        </h4>
                        <span className="opacity-70">2019 - 2023</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-roboto">
                      Work Experience
                    </h3>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <h4 className="font-semibold">Frontend Developer</h4>
                        <span className="opacity-70">at XYZ Company</span>
                      </div>
                      <div className="flex gap-2">
                        <h4 className="font-semibold">Backend Developer</h4>
                        <span className="opacity-70">at ABC Company</span>
                      </div>
                      <div className="flex gap-2">
                        <h4 className="font-semibold">Full Stack Developer</h4>
                        <span className="opacity-70">at PQR Company</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className={`flex flex-col py-10 text-${textColor} px-10 `}>
        <h2 className="text-3xl font-bold font-roboto bg-text-gradient-light bg-clip-text text-transparent inline-block">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
          {
            // Projects
            projects.map((project, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold font-roboto">
                  {project.title}
                </h3>
                <p className="opacity-70">{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Button className="hover:underline text-sm">
                    View Project
                  </Button>
                </a>
              </div>
            ))
          }
        </div>
        <Link href="/projects" className="text-center">
          <Button
            variant={"outline"}
            className="mt-5 hover:bg-primary hover:text-white"
          >
            View More Projects
          </Button>
        </Link>
      </div>
    </div>
  );
}
