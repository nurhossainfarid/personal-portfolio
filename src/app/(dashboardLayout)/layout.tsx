import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex">{children}</div>;
};

export default DashboardLayout;
