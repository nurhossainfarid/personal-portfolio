import Navbar from "@/components/header/Navbar";
import CommonSidebar from "@/components/shared/CommonSidebar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";

const CommonLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex lg:flex-row flex-col">
      <CommonSidebar />
      <div className="md:ml-96 lg:ml-[600px]">
        <Navbar session={session} />
        {children}
      </div>
    </div>
  );
};

export default CommonLayout;
