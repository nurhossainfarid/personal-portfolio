"use client";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";
import Blogs from "./blogs/page";

interface UserInfoProps {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
}

const Dashboard = ({ session }: { session: UserInfoProps | null }) => {
  console.log(session);
  const [activeTab, setActiveTab] = useState("blogs");

  return (
    <div>
      <SidebarProvider className="text-black p-5 relative">
        <DashboardSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          session={session}
        />
        <div className="flex-1">{activeTab === "blogs" && <Blogs />}</div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
