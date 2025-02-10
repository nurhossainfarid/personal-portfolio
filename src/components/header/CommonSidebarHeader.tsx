import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../ModeToggle";

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
        <div className="absolute left-0 w-full bg-white/50 dark:bg-gray-900 shadow-md p-4 flex flex-col gap-4 z-10">
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </div>
      )}
    </div>
  );
};

export default CommonSidebarHeader;
