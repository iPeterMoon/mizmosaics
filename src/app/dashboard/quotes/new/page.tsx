"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import DashboardNavbar from "../../components/DashboardNavbar";
import { Check } from "@boxicons/react";

const TECHNIQUES = [
  { id: "vitreous", name: "Vitreous Glass", pricePerSqFt: 45 },
  { id: "iridescent", name: "Iridescent", pricePerSqFt: 65 },
  { id: "gold-leaf", name: "Gold Leaf", pricePerSqFt: 95 },
  { id: "penny-round", name: "Penny Round", pricePerSqFt: 55 },
  { id: "glass-mix", name: "Glass Mix", pricePerSqFt: 75 },
  { id: "stone-glass", name: "Stone & Glass Combo", pricePerSqFt: 85 },
];

interface FormData {
  projectName: string;
  projectDescription: string;
  width: string;
  height: string;
  technique: string;
  notes: string;
}

const IconArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
);

const IconUpload = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
  </svg>
);

const IconFile = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/>
  </svg>
);

const IconCalculator = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="16" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="8" y2="18"/><line x1="12" y1="18" x2="12" y2="18"/><line x1="16" y1="18" x2="16" y2="18"/>
  </svg>
);

const IconInfo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
);

export default function NewQuotePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    projectName: "",
    projectDescription: "",
    width: "",
    height: "",
    technique: "",
    notes: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const width = parseFloat(formData.width) || 0;
  const height = parseFloat(formData.height) || 0;
  const totalSqFt = width * height;
  const selectedTechnique = TECHNIQUES.find((t) => t.id === formData.technique);
  const estimatedPrice = selectedTechnique ? totalSqFt * selectedTechnique.pricePerSqFt : 0;

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin w-8 h-8 border-4 border-[#E76226] border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Submitting quote:", { ...formData, imageFile });
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/dashboard");
    }, 1500);
  };

  const removeImage = () => {
    setImageFile(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardNavbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full">
        <div className="mb-8">
          <button
            onClick={() => router.push("/dashboard")}
            className="flex items-center gap-2 text-gray-600 hover:text-[#E76226] transition-colors mb-4"
          >
            <IconArrowLeft />
            <span className="text-sm font-medium">Back to Dashboard</span>
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Create New Quote Request
          </h1>
          <p className="text-gray-600 mt-1">
            Fill in your project details to receive a customized B2B estimate.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Project Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Project Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleInputChange}
                      placeholder="e.g., Hilton Hotel Pool Renovation"
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E76226]/20 focus:border-[#E76226] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Project Description
                    </label>
                    <textarea
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Describe your project scope, location, and any special requirements..."
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E76226]/20 focus:border-[#E76226] transition-all resize-none"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Design & Dimensions
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Upload Design <span className="text-red-500">*</span>
                    </label>
                    {!imageFile ? (
                      <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#E76226] hover:bg-orange-50/30 transition-all group">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <div className="p-3 rounded-full bg-gray-100 group-hover:bg-[#E76226]/10 transition-colors mb-3">
                            <IconUpload />
                          </div>
                          <p className="text-sm text-gray-600 mb-1">
                            <span className="font-semibold text-[#E76226]">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-400">PNG, JPG, PDF up to 10MB</p>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*,.pdf"
                          onChange={handleImageUpload}
                        />
                      </label>
                    ) : (
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-gray-50">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-[#E76226]/10 rounded-lg">
                            <IconFile />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{imageFile.name}</p>
                            <p className="text-xs text-gray-500">{(imageFile.size / 1024).toFixed(1)} KB</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeImage}
                          className="text-gray-500 hover:text-red-500 transition-colors"
                        >
                          <span className="sr-only">Remove</span>
                          ×
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Width (feet) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="width"
                        value={formData.width}
                        onChange={handleInputChange}
                        min="0"
                        step="0.5"
                        placeholder="0"
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E76226]/20 focus:border-[#E76226] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Height (feet) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleInputChange}
                        min="0"
                        step="0.5"
                        placeholder="0"
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E76226]/20 focus:border-[#E76226] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Mosaic Technique <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="technique"
                      value={formData.technique}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E76226]/20 focus:border-[#E76226] transition-all bg-white"
                    >
                      <option value="">Select a technique</option>
                      {TECHNIQUES.map((tech) => (
                        <option key={tech.id} value={tech.id}>
                          {tech.name} (${tech.pricePerSqFt}/sq ft)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Additional Information
                </h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Special Notes or Requirements
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Any specific colors, patterns, installation requirements, timeline constraints..."
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E76226]/20 focus:border-[#E76226] transition-all resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Quote Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="pb-4 border-b border-gray-100">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                      Project
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                      {formData.projectName || "—"}
                    </p>
                  </div>

                  <div className="pb-4 border-b border-gray-100">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                      Technique
                    </p>
                    <p className="text-sm text-gray-900 font-medium">
                      {selectedTechnique?.name || "—"}
                    </p>
                  </div>

                  <div className="pb-4 border-b border-gray-100">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                      Dimensions
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-700">
                        {formData.width || "0"} ft × {formData.height || "0"} ft
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <IconCalculator />
                      <span className="text-sm font-semibold text-gray-900">
                        Total Area
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">
                      {totalSqFt.toFixed(1)} <span className="text-sm font-normal text-gray-500">sq ft</span>
                    </p>
                  </div>

                  {selectedTechnique && totalSqFt > 0 && (
                    <div className="bg-[#E76226]/5 border border-[#E76226]/20 rounded-lg p-4">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                        Estimated Price
                      </p>
                      <p className="text-2xl font-bold text-[#E76226]">
                        ${estimatedPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg mb-6">
                  <IconInfo />
                  <p className="text-xs text-blue-700">
                    Final estimated price will be calculated based on the selected technique and total area after review by our team.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={
                    !formData.projectName ||
                    !formData.width ||
                    !formData.height ||
                    !formData.technique ||
                    isSubmitting
                  }
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#E76226] hover:bg-[#d45a1f] disabled:bg-gray-300 disabled:cursor-not-allowed transition-all hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Check size="lg" />
                      Submit Quote Request
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
