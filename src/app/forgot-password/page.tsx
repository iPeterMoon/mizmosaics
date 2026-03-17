"use client";

import { useState, useEffect } from "react";
import { Envelope, ArrowBigLeft, CheckCircle } from "@boxicons/react";
import Link from "next/link";
import Image from "next/image";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Integrate with password reset API
    console.log("Password reset request for:", email);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
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
        {/* Back Link */}
        <Link
          href="/login"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <ArrowBigLeft size="sm" pack="filled" />
          Back to Login
        </Link>

        {/* Logo/Brand */}
        <div className="mb-12 mt-12 lg:mt-0 flex flex-col gap-3">
          <div className="flex items-center gap-3 mb-2">
            <Image src="/logo-text.svg" alt="Logo" width={200} height={100} />
          </div>
          <p className="text-gray-500 text-sm mt-1">
            Custom Glass Mosaics for Architecture
          </p>
        </div>

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {isSubmitted ? "Check Your Email" : "Reset Your Password"}
          </h1>
          <p className="text-gray-600 text-lg">
            {isSubmitted
              ? "We've sent you a secure link to reset your password. Please check your inbox."
              : "Enter your email address and we'll send you a secure link to reset your password."}
          </p>
        </div>

        {/* Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  Sending...
                </>
              ) : (
                "Send Reset Link"
              )}
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </div>
            <p className="text-gray-600 text-center max-w-md mb-6">
              The link will expire in 24 hours. If you don't receive the email, please check your spam folder or request a new link.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-gray-900 font-semibold hover:underline"
            >
              Request another link
            </button>
          </div>
        )}

        {/* Remember Password Link */}
        {!isSubmitted && (
          <p className="mt-8 text-center text-gray-600">
            Remember your password?{" "}
            <Link href="/login" className="text-gray-900 font-semibold hover:underline">
              Back to Login
            </Link>
          </p>
        )}
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
                Secure Account Recovery
              </span>
            </div>

            <h2 className="text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
              Get Back to Creating
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
                {" "}
                Quickly
              </span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-12">
              We'll help you regain access to your account so you can continue working on your mosaic projects. Our secure password reset process keeps your data protected.
            </p>

            {/* Security Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 bg-emerald-400/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Secure Email Links</p>
                  <p className="text-white/60 text-sm">Time-limited reset tokens for enhanced security</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Email Verification</p>
                  <p className="text-white/60 text-sm">Only authorized email addresses can reset passwords</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 bg-violet-400/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">24-Hour Expiration</p>
                  <p className="text-white/60 text-sm">Reset links automatically expire for your safety</p>
                </div>
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