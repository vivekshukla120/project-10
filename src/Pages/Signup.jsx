import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUser,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Submitted");
  };

  return (
    <div className="min-h-screen bg-[#0B0F14] flex items-center justify-center px-4 py-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[180px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Create Account</h2>
            <p className="text-gray-400 mt-3">Start your crypto trading journey</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block text-gray-300 mb-2">Full Name</label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#131A22] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-green-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>
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

            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
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

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-bold"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-400 mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-400 hover:text-green-300 font-medium"
            >
              Sign In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
