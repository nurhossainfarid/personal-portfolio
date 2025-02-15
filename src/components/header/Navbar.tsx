"use client";

import { Search } from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaGlobe,
  FaYoutube,
} from "react-icons/fa";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div className="h-20 flex justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center gap-2 border-2 border-gray-500 rounded-lg p-2 shadow-sm">
        <Input
          type="text"
          placeholder="Search..."
          className="flex-1 border-none focus:ring-0"
        />
        <Button size="icon">
          <Search className="w-5 h-5 text-white" />
        </Button>
      </div>
      <div className="flex items-center gap-3">
        {/* Facebook Icon */}
        <a
          href="https://www.facebook.com/nurhossainfarid221"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered("facebook")}
          onMouseLeave={() => setHovered(null)}
        >
          <FaFacebookF
            size={20}
            className={`transition-all duration-700 ease-in ${
              hovered === "facebook"
                ? "animate-icon-drop opacity-100 text-primary"
                : "opacity-80"
            }`}
          />
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/nur-hossain-farid-58725522a/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered("linkedin")}
          onMouseLeave={() => setHovered(null)}
        >
          <FaLinkedinIn
            size={20}
            className={`transition-all duration-700 ease-in ${
              hovered === "linkedin"
                ? "animate-icon-drop opacity-100 text-primary"
                : "opacity-80"
            }`}
          />
        </a>

        {/* Twitter Icon */}
        <a
          href="https://x.com/?lang=en&mx=2"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered("twitter")}
          onMouseLeave={() => setHovered(null)}
        >
          <FaTwitter
            size={20}
            className={`transition-all duration-700 ease-in ${
              hovered === "twitter"
                ? "animate-icon-drop opacity-100 text-primary"
                : "opacity-80"
            }`}
          />
        </a>

        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/nurhossainfarid/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered("instagram")}
          onMouseLeave={() => setHovered(null)}
        >
          <FaInstagram
            size={20}
            className={`transition-all duration-700 ease-in ${
              hovered === "instagram"
                ? "animate-icon-drop opacity-100 text-primary"
                : "opacity-80"
            }`}
          />
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/nurhossainfarid"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered("github")}
          onMouseLeave={() => setHovered(null)}
        >
          <FaGithub
            size={20}
            className={`transition-all duration-700 ease-in ${
              hovered === "github"
                ? "animate-icon-drop opacity-100 text-primary"
                : "opacity-80"
            }`}
          />
        </a>

        {/* Website (Earth Icon) */}
        <a
          href="https://yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered("website")}
          onMouseLeave={() => setHovered(null)}
        >
          <FaGlobe
            size={20}
            className={`transition-all duration-700 ease-in ${
              hovered === "website"
                ? "animate-icon-drop opacity-100 text-primary"
                : "opacity-80"
            }`}
          />
        </a>

        {/* YouTube Icon */}
        <a
          href="https://www.youtube.com/@nurhossainfarid6407"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered("youtube")}
          onMouseLeave={() => setHovered(null)}
        >
          <FaYoutube
            size={20}
            className={`transition-all duration-700 ease-in ${
              hovered === "youtube"
                ? "animate-icon-drop opacity-100 text-primary"
                : "opacity-80"
            }`}
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
