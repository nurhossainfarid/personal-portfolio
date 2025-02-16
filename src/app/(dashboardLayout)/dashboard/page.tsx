import { getServerSession } from "next-auth";
import Dashboard from "./Dashboard";
import { authOptions } from "@/utils/authOptions";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Dashboard session={session} />
    </div>
  );
};

export default DashboardPage;
