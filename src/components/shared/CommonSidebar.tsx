"use client";
import Link from "next/link";
import CommonSidebarHeader from "../header/CommonSidebarHeader";

const CommonSidebar = () => {
  return (
    <div className="fixed">
      <CommonSidebarHeader />
      <div className="flex">
        <div
          className={`bg-black text-white w-96 min-h-screen p-4 transition-transform md:translate-x-0 fixed md:static`}
        >
          <ul>
            <li className="mb-2">
              <Link
                href="/"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/profile"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                Profile
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/settings"
                className="block py-2 px-4 hover:bg-gray-700 rounded"
              >
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommonSidebar;
