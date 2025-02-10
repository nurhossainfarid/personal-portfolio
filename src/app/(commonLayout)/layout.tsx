import Navbar from "@/components/header/Navbar";
import CommonSidebar from "@/components/shared/CommonSidebar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <CommonSidebar />
      <div className="ml-96">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default CommonLayout;
