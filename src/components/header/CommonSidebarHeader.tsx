import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CommonSidebarHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="h-20 bg-gray-800 text-white">
      {/*Menu Button */}
      <div className="flex justify-between items-center p-4">
        <ModeToggle />
        <button className="ml-auto" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={28} />
          ) : (
            <h1 className="flex gap-1 border-2 p-2 rounded-md">
              Menu <Menu size={28} />
            </h1>
          )}
        </button>
      </div>

      {/*Menu */}
      {isOpen && (
        <div className="absolute left-0 top-20 w-full bg-black/50 dark:bg-gray-900 shadow-md p-4 flex flex-col gap-4 z-50">
          <Link
            href="/"
            className={`block py-2 px-4 hover:bg-gray-700 rounded ${
              pathname === "/" ? "bg-gray-700" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`block py-2 px-4 hover:bg-gray-700 rounded ${
              pathname === "/projects" ? "bg-gray-700" : ""
            }`}
          >
            Projects
          </Link>
          <Link
            href="/blogs"
            className={`block py-2 px-4 hover:bg-gray-700 rounded ${
              pathname === "/blogs" ? "bg-gray-700" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`block py-2 px-4 hover:bg-gray-700 rounded ${
              pathname === "/contact" ? "bg-gray-700" : ""
            }`}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default CommonSidebarHeader;
