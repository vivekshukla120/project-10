import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import api from "../services/api";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/auth/register", formData);
      alert("Account created successfully!");
      navigate("/login");
    } catch (error) {
      // alert(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md kc-card p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-kc-green flex items-center justify-center mx-auto mb-4">
            <span className="text-black font-extrabold text-lg">K</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Create KuCoin Account</h1>
          <p className="text-kc-muted text-sm mt-2">Start trading in minutes</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-kc-muted mb-2">Full Name</label>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-kc-muted" />
              <input
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                onChange={handleChange}
                className="w-full bg-kc-card border border-kc-border rounded-lg pl-11 pr-4 py-3 text-white placeholder-kc-muted outline-none focus:border-kc-green transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-kc-muted mb-2">Email</label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-kc-muted" />
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                onChange={handleChange}
                className="w-full bg-kc-card border border-kc-border rounded-lg pl-11 pr-4 py-3 text-white placeholder-kc-muted outline-none focus:border-kc-green transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-kc-muted mb-2">Password</label>
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-kc-muted" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                minLength={6}
                placeholder="Create a password"
                onChange={handleChange}
                className="w-full bg-kc-card border border-kc-border rounded-lg pl-11 pr-11 py-3 text-white placeholder-kc-muted outline-none focus:border-kc-green transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-kc-muted"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 kc-btn-primary text-sm mt-2 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-kc-muted text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-kc-green hover:underline font-medium">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
