import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaBitcoin,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted");
  };

  return (
    <div className="min-h-screen bg-[#0B0F14] flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[180px] rounded-full" />

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-black font-bold text-2xl">
              X
            </div>

            <div>
              <h1 className="text-white text-3xl font-bold">KuCoin</h1>
              <p className="text-gray-400">Professional Crypto Exchange</p>
            </div>
          </div>

          <h2 className="text-5xl font-bold text-white leading-tight">
            Welcome Back
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-lg">
            Access your portfolio, manage digital assets, trade futures, and
            stay connected to global cryptocurrency markets.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5">
            {[
              "Secure Asset Storage",
              "24/7 Trading Access",
              "Advanced Charts",
              "Instant Deposits",
            ].map((item) => (
              <div
                key={item}
                className="p-4 rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <div className="flex items-center gap-3">
                  <FaBitcoin className="text-green-400" />
                  <span className="text-white">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white">Sign In</h2>

              <p className="text-gray-400 mt-3">
                Enter your account credentials
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Email */}
              <div>
                <label className="block text-gray-300 mb-2">
                  Email Address
                </label>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#131A22] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-green-500"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-300 mb-2">Password</label>

                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-4 rounded-xl bg-[#131A22] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-green-500"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Remember */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-gray-400 text-sm">
                  <input type="checkbox" className="accent-green-500" />
                  Remember Me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-green-400 text-sm hover:text-green-300"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-bold"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-gray-500 text-sm">OR</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <button className="py-3 rounded-xl border border-white/10 text-white hover:border-green-500/40 transition">
                Google
              </button>

              <button className="py-3 rounded-xl border border-white/10 text-white hover:border-green-500/40 transition">
                Apple
              </button>
            </div>

            {/* Register */}
            <p className="text-center text-gray-400 mt-8">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-green-400 hover:text-green-300 font-medium"
              >
                Create Account
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
