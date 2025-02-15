"use client";

import SidebarLink from "./SidebarLink";
import CollapsibleMenu from "./CollapsibleMenu";
import { LogOutIcon, HomeIcon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
} from "../ui/sidebar";
import Link from "next/link";

interface AppSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  role?: string | undefined;
}

const DashboardSidebar = ({ activeTab, setActiveTab }: AppSidebarProps) => {
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  const handleLogout = () => {
    // dispatch(logout());
    // navigate("/login", { replace: true });
  };

  return (
    <Sidebar className="w-64 h-[100%] text-white">
      <SidebarContent className="bg-black">
        <SidebarHeader className="text-xl font-bold p-4 uppercase">
          Dashboard
        </SidebarHeader>
        {/* Sidebar Group */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Collapsible Menu */}
              <CollapsibleMenu
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-black">
        <Link href="/">
          <SidebarLink icon={<HomeIcon />} text="Home" />
        </Link>
        <SidebarLink
          icon={<LogOutIcon />}
          text="Logout"
          onClick={handleLogout}
        />
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
