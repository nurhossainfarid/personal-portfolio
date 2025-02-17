"use client";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";
import Blogs from "./blogs/page";
import { UserInfoProps } from "@/types/global";
import CreateBlog from "./blogs/CreateBlog";

const Dashboard = ({ session }: { session: UserInfoProps | null }) => {
  const [activeTab, setActiveTab] = useState("blogs");

  return (
    <div>
      <SidebarProvider className="text-black p-5 relative">
        <DashboardSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          session={session}
        />
        <div className="flex-1">
          {activeTab === "blogs" && <Blogs />}{" "}
          {activeTab === "add-blog" && <CreateBlog />}
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
