import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { IoIosArrowDropdown, IoIosArrowDropright } from "react-icons/io";

interface SidebarMenuButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const SidebarMenuButton: React.FC<SidebarMenuButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center p-3 w-full text-left rounded-md transition-all duration-300 hover:bg-gray-700 text-gray-300 font-medium ${className}`}
    >
      {children}
    </button>
  );
};

interface MenuItem {
  label: string;
  value?: string;
  icon?: React.ReactNode;
  subItems?: {
    label: string;
    value?: string;
    href: string;
  }[];
}

const menuItems: MenuItem[] = [
  {
    label: "Manage Project",
    subItems: [
      { label: "Add Project", value: "add-project", href: "" },
      { label: "Projects", value: "projects", href: "" },
    ],
  },
  {
    label: "Manage Blog",
    subItems: [
      { label: "Add Blog", value: "add-blog", href: "" },
      { label: "Blogs", value: "blogs", href: "" },
    ],
  },
  {
    label: "Manage Messages",
    subItems: [{ label: "Messages", value: "messages", href: "" }],
  },
];

interface CollapsibleMenuProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const CollapsibleMenu: React.FC<CollapsibleMenuProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2 p-2">
      {menuItems.map((item, index) => (
        <Collapsible
          key={index}
          open={openIndex === index}
          onOpenChange={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between gap-2 p-4 text-lg font-semibold text-white rounded-lg hover:bg-gray-700 transition-all"
              >
                <span>{item.label}</span>
                {openIndex === index ? (
                  <IoIosArrowDropdown className="w-5 h-5 text-white" />
                ) : (
                  <IoIosArrowDropright className="w-5 h-5 text-white" />
                )}
              </SidebarMenuButton>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent className="pl-6 overflow-hidden transition-all duration-300">
            <div className="flex flex-col space-y-2 mt-2">
              {item.subItems?.map((subItem, subIndex) => (
                <button
                  key={subIndex}
                  onClick={() => subItem.value && setActiveTab(subItem.value)}
                  className={`flex items-center p-3 w-full text-left rounded-md transition-all duration-300 hover:bg-gray-600 font-medium ${
                    activeTab === subItem.value
                      ? "bg-gray-600 text-white shadow-md"
                      : "text-gray-300"
                  }`}
                >
                  <span>{subItem.label}</span>
                </button>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default CollapsibleMenu;
