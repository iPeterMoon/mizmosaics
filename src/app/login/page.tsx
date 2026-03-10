"use client";

import { useMemo, useState, useEffect } from "react";
import {
  Envelope,
  ArrowBigLeft,
  ArrowBigRight,
  Business,
  Lock,
} from "@boxicons/react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Integrate with NextAuth signIn
    console.log("Login attempt:", { email, password });

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const CELLS = [...Array(96)].map((_, i) => ({
    id: i,
    bg: `rgba(${120 + Math.random() * 60}, ${140 + Math.random() * 60}, ${180 + Math.random() * 60}, ${Math.random() * 0.3})`,
  }));

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-24">
        {/* Back to Home */}
        <Link
          href="/"
          className="absolute top-6 left-6 lg:left-12 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowBigLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Logo/Brand */}
        <div className="mb-12 mt-12 lg:mt-0">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <Business className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">MizMosaics</span>
          </div>
          <p className="text-gray-500 text-sm mt-1">
            Custom Glass Mosaics for Architecture
          </p>
        </div>

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            B2B Portal Access
          </h1>
          <p className="text-gray-600 text-lg">
            Sign in to access your custom mosaic projects and fabrication
            requests.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Work Email
            </label>
            <div className="relative">
              <Envelope className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Signing in...
              </>
            ) : (
              <>
                Sign In
                <ArrowBigRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-8 text-center text-gray-600">
          Don't have a B2B account?{" "}
          <Link
            href="/request-access"
            className="text-gray-900 font-semibold hover:underline"
          >
            Request Access
          </Link>
        </p>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span>Secure Login</span>
            <span>•</span>
            <span>Enterprise Grade</span>
            <span>•</span>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-800 to-black">
          {/* Abstract Glass Mosaic Pattern */}
          <div className="grid grid-cols-8 grid-rows-12 h-full w-full">
            {CELLS.map(({ id, bg }) => (
              <div
                key={id}
                className="border border-gray-700/30"
                style={{ backgroundColor: mounted ? bg : "transparent" }}
              />
            ))}
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-16 text-center">
          {/* Value Proposition */}
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Trusted by 500+ Architects & Builders
              </span>
            </div>

            <h2 className="text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
              Transform Your Designs Into
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
                {" "}
                Glass Mosaics
              </span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-12">
              Upload your blueprints or images, and we'll craft bespoke glass
              mosaics tailored to your architectural vision. Precision
              fabrication meets unlimited customization.
            </p>

            {/* Testimonial */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-linear-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-lg">JM</span>
                </div>
                <div>
                  <p className="text-white/90 italic mb-3">
                    "The precision and quality of MizMosaics transformed our
                    luxury pool project. Their custom fabrication capabilities
                    are unmatched in the industry."
                  </p>
                  <div>
                    <p className="text-white font-semibold">
                      Jennifer Martinez
                    </p>
                    <p className="text-white/60 text-sm">
                      Principal Architect, Martinez Design Studio
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <p className="text-3xl font-bold text-white">15+</p>
                <p className="text-white/60 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">2,500+</p>
                <p className="text-white/60 text-sm">Custom Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">99.8%</p>
                <p className="text-white/60 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-900 to-transparent" />
      </div>
    </div>
  );
}
