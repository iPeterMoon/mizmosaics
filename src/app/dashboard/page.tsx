import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import DashboardNavbar from "./components/DashboardNavbar";
import DashboardContent from "./components/DashboardContent";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const userId = parseInt(session.user?.id || "0", 10);
  
  const response = await fetch(
    `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/projects/read?userId=${userId}`,
    { cache: "no-store" }
  );
  
  const projects = await response.json();
  const userName = session.user?.name || "User";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardNavbar />
      <DashboardContent 
        userName={userName} 
        projects={projects} 
      />
    </div>
  );
}
