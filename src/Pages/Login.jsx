import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post("/auth/login", formData);
      login(data);
      navigate("/");
    } catch (error) {
      // alert(error.response?.data?.message || "Login failed");
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
          <h1 className="text-2xl font-bold text-white">Log In to KuCoin</h1>
          <p className="text-kc-muted text-sm mt-2">
            Welcome back to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Enter your password"
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
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="text-center text-kc-muted text-sm mt-6">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="text-kc-green hover:underline font-medium"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
