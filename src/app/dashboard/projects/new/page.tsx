"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import DashboardNavbar from "../../components/DashboardNavbar";
import { Check, FolderPlus } from "@boxicons/react";

export default function NewProjectPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  console.log("Session data:", { 
    user: session.user, 
    userId: session.user?.id 
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectName.trim()) return;

    setIsSubmitting(true);

    try {
      console.log("Creating project:", {
        name: projectName,
        description: projectDescription,
      });

      const response = await fetch("/api/projects/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: projectName,
          description: projectDescription
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create project");
      }

      const project = await response.json();
      console.log("Project object to be created:", project);

      setTimeout(() => {
        setIsSubmitting(false);
        router.push("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("Failed to create project:", error);
      setIsSubmitting(false);
      alert(
        error instanceof Error
          ? error.message
          : "Failed to create project. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardNavbar />

      <main className="flex-1 max-w-2xl mx-auto px-6 py-16 w-full">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primarylight/10 mb-4">
              <FolderPlus size="md" className="text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Create Project Workspace
            </h1>
            <p className="text-gray-500 text-sm">
              Start by giving your project a name. You can add mosaic designs
              and details later.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Project Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="e.g., Hilton Hotel Pool Renovation"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primarylight/20 focus:border-primary transition-all text-gray-900 placeholder:text-gray-400"
                autoFocus
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Project Description{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                rows={4}
                placeholder="Describe the overall scope, location, or client details..."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primarylight/20 focus:border-primary transition-all resize-none text-gray-900 placeholder:text-gray-400"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => router.push("/dashboard")}
                className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!projectName.trim() || isSubmitting}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-primary hover:bg-primarylight disabled:bg-gray-300 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Check size="lg" />
                    Create Project Workspace
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          You can add mosaic designs and request quotes once the project is
          created.
        </p>
      </main>
    </div>
  );
}
