"use client";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";
import Blogs from "./blogs/Blogs";
import { UserInfoProps } from "@/types/global";
import CreateBlog from "./blogs/CreateBlog";
import Projects from "./projects/Projects";
import CreateProject from "./projects/CreateProject";

const Dashboard = ({ session }: { session: UserInfoProps | null }) => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div>
      <SidebarProvider className="text-black p-5 relative">
        <DashboardSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          session={session}
        />
        <div className="flex-1">
          {activeTab === "add-blog" && <CreateBlog />}
          {activeTab === "blogs" && <Blogs />}{" "}
          {activeTab === "add-project" && <CreateProject />}
          {activeTab === "projects" && <Projects />}
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
