import {
  EarthIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  Search,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="h-20 flex justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center gap-2 border rounded-lg p-2 shadow-sm">
        <Input
          type="text"
          placeholder="Search..."
          className="flex-1 border-none focus:ring-0"
        />
        <Button size="icon">
          <Search className="w-5 h-5 text-white" />
        </Button>
      </div>
      <div className="flex items-center gap-5">
        <FacebookIcon size={28} />
        <TwitterIcon size={28} />
        <InstagramIcon size={28} />
        <LinkedinIcon size={28} />
        <GithubIcon size={28} />
        <EarthIcon size={28} />
        <YoutubeIcon size={28} />
      </div>
    </div>
  );
};

export default Navbar;
