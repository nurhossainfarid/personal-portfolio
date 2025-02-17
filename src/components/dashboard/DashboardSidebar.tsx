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
import { signOut } from "next-auth/react";
import { UserInfoProps } from "@/types/global";
import Image from "next/image";

interface AppSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  session: UserInfoProps | null;
}

const DashboardSidebar = ({
  activeTab,
  setActiveTab,
  session,
}: AppSidebarProps) => {
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
  };

  return (
    <Sidebar className="w-64 h-[100%] text-white">
      <SidebarContent className="bg-black">
        <SidebarHeader className="font-bold py-5">
          {session?.user && (
            <div className="flex flex-col items-center gap-3">
              <Image
                src={session?.user?.image || "/default-image.png"}
                width={70}
                height={70}
                className="rounded-full"
                alt="User Image"
              />
              <div className="text-center">
                <h1 className="opacity-80 font-roboto">
                  {session?.user?.name}
                </h1>
                <p className="opacity-80 font-roboto">{session?.user?.email}</p>
              </div>
            </div>
          )}
        </SidebarHeader>
        {/* Sidebar Group */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="">
              <CollapsibleMenu
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-black">
        {session?.user && (
          <>
            <Link href="/">
              <SidebarLink icon={<HomeIcon />} text="Home" />
            </Link>
            <SidebarLink
              icon={<LogOutIcon />}
              text="Logout"
              onClick={handleLogout}
            />
          </>
        )}
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
