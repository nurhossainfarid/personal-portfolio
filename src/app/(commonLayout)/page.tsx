import LatestProject from "@/components/shared/LatestProject";
import AboutMe from "@/components/shared/AboutMe";
import MoreAboutMe from "@/components/shared/MoreAboutMe";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <AboutMe />
      <MoreAboutMe />
      <LatestProject />
    </div>
  );
}
