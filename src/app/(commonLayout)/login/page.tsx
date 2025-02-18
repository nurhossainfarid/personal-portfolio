"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Login Card */}
      <Card className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-primary dark:text-white">
            Welcome Back!
          </CardTitle>
          <p className="text-center text-sm text-gray-500 mt-2">
            Please sign in to continue.
          </p>
        </CardHeader>
        <CardContent>
          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />

            {/* Password Field */}
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition duration-300"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <hr className="flex-grow border-gray-300 dark:border-gray-600" />
            <span className="text-gray-500 text-sm dark:text-gray-400">
              Or continue with
            </span>
            <hr className="flex-grow border-gray-300 dark:border-gray-600" />
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-4">
            {/* Google Login */}
            <button
              className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition duration-300 dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={() =>
                signIn("google", {
                  callbackUrl:
                    "https://personal-portfolio-client-nu.vercel.app/dashboard",
                })
              }
            >
              <Image
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                width={25}
                height={25}
                alt="Google logo"
                className="dark:invert"
              />
            </button>

            {/* GitHub Login */}
            <button
              className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition duration-300 dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={() =>
                signIn("github", {
                  callbackUrl:
                    "https://personal-portfolio-client-nu.vercel.app/dashboard",
                })
              }
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                width={25}
                height={25}
                alt="GitHub logo"
                className="dark:invert"
              />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
