"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  Plus,
  FileDetail,
  Factory,
  Clock,
  Filter,
  ArrowToBottomStroke,
  HeadphoneMic,
  BookOpen,
  Compass,
  Eye,
  Edit,
  Trash,
} from "@boxicons/react";

import Link from "next/link";

interface Project {
  id: number;
  name: string;
  description: string;
  dateCreated: string;
  totalArea: string;
  status: string;
  quoteId: string;
}

interface DashboardContentProps {
  userName: string;
  projects: Project[];
}

const statusColors: Record<string, { bg: string; text: string }> = {
  Shipped: { bg: "bg-emerald-100", text: "text-emerald-800" },
  Production: { bg: "bg-blue-100", text: "text-blue-800" },
  Quoted: { bg: "bg-amber-100", text: "text-amber-800" },
  BORRADOR: { bg: "bg-slate-100", text: "text-slate-800" },
  "No Quote": { bg: "bg-gray-100", text: "text-gray-800" },
};

export default function DashboardContent({
  userName,
  projects,
}: DashboardContentProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const hasProjects = projects.length > 0;

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin w-8 h-8 border-4 border-gray-900 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const activeQuotes = projects.filter(
    (p) => p.status === "Quoted" || p.status === "BORRADOR",
  ).length;
  const inProduction = projects.filter((p) => p.status === "Production").length;
  const awaitingDeposit = projects.filter((p) => p.status === "Shipped").length;

  return (
    <main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Welcome back, {userName}
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your custom architectural mosaic projects and quotes.
          </p>
        </div>
        {hasProjects && (
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-white transition-all hover:shadow-md bg-primary hover:bg-primarylight">
            <Plus pack="filled" size="md" />
            Start New Mosaic Quote
          </button>
        )}
      </div>

      {hasProjects ? (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary" />
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Active Quotes
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {activeQuotes}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-primary/10">
                  <FileDetail size="md" className="text-primary" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    In Production
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {inProduction}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-blue-50">
                  <Factory size="md" className="text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Shipped
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {awaitingDeposit}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-amber-50">
                  <Clock size="md" className="text-amber-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Main Projects
              </h2>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <Filter size="md" />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <ArrowToBottomStroke size="md" />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Project Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Quote ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Date Created
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Total Area
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Current Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {projects.map((project) => {
                    const colors =
                      statusColors[project.status] || statusColors["No Quote"];
                    return (
                      <tr
                        key={project.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-900">
                            {project.name}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-gray-600 font-mono text-sm">
                            {project.quoteId}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {project.dateCreated}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {project.totalArea}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}
                          >
                            {project.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button className="p-1.5 text-gray-500 hover:text-primary hover:bg-primary/10 rounded transition-colors">
                              <Eye size="md" />
                            </button>
                            <button className="p-1.5 text-gray-500 hover:text-primary hover:bg-primary/10 rounded transition-colors">
                              <Edit size="md" />
                            </button>
                            <button className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                              <Trash size="md" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing {projects.length} projects
              </p>
              <div className="flex items-center gap-2">
                <button
                  className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  Previous
                </button>
                <button className="px-3 py-1.5 text-sm font-medium text-white rounded-lg transition-colors hover:opacity-90 bg-primary hover:bg-primarylight">
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <HeadphoneMic size="md" className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Need expert assistance?
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Our design team can help you finalize your pattern layouts
                    and material choices.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-primary hover:opacity-75 transition-colors"
                  >
                    Connect with a consultant{" "}
                    <span className="ml-1">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <BookOpen size="md" className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2025 Resource Catalog
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Download our latest technical specifications and material
                    availability guide.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primarylight transition-colors"
                  >
                    Download PDF (24MB) <span className="ml-1">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="w-full max-w-2xl bg-white rounded-xl shadow-sm border border-gray-200 p-12">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-24 h-24 rounded-2xl mb-6 bg-primary/10">
                <Compass size="md" className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                No projects found
              </h2>
              <p className="text-gray-600 mb-8 max-w-md">
                It looks like you haven't started any projects yet. Upload your
                custom design to get an instant B2B estimate.
              </p>
              <Link href="/dashboard/projects/new">
                <button className="cursor-pointer inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg transition-all hover:shadow-lg hover:scale-105 bg-primary hover:bg-primarylight">
                  <Plus pack="filled" size="md" />
                  Start Your First Mosaic Project
                </button>
              </Link>

              <div className="flex items-center gap-8 mt-8">
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <BookOpen size="md" className="text-primary" />
                  View Design Guide
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <HeadphoneMic size="md" className="text-primary" />
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
