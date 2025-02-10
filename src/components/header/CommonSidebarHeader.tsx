import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../ModeToggle";
import Link from "next/link";

const CommonSidebarHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        <div className="absolute left-0 w-full bg-black dark:bg-gray-900 shadow-md p-4 flex flex-col gap-4 z-10">
          <Link href="/" className="block py-2 px-4 hover:bg-gray-700 rounded">
            Home
          </Link>
          <Link
            href="/projects"
            className="block py-2 px-4 hover:bg-gray-700 rounded"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="block py-2 px-4 hover:bg-gray-700 rounded"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block py-2 px-4 hover:bg-gray-700 rounded"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default CommonSidebarHeader;
