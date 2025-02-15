"use client";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";
import Blogs from "./blogs/page";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("blogs");

  return (
    <div>
      <SidebarProvider className="text-black p-5 relative">
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1">{activeTab === "blogs" && <Blogs />}</div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
