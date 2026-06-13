import { motion } from "framer-motion";
import { FaApple, FaGooglePlay, FaMobileAlt } from "react-icons/fa";

const features = [
  "Real-time market data",
  "Secure wallet management",
  "Instant buy & sell",
  "Biometric login",
];

export default function MobileApp() {
  return (
    <section className="relative py-24 bg-[#0B0F14] overflow-hidden">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-green-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-500/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-green-400 font-medium">Mobile App</span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              Trade Anywhere,
              <span className="block text-green-400 mt-2">Anytime</span>
            </h2>

            <p className="mt-6 text-gray-400 max-w-lg">
              Download the CryptoX mobile app to manage your portfolio, execute
              trades, and stay updated with live market alerts on the go.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-300">
                  <FaMobileAlt className="text-green-400 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 border border-white/10 text-white hover:border-green-500/40 transition">
                <FaApple size={22} />
                App Store
              </button>

              <button className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/10 border border-white/10 text-white hover:border-green-500/40 transition">
                <FaGooglePlay size={20} />
                Google Play
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-[520px] rounded-[2.5rem] border-4 border-white/10 bg-gradient-to-b from-[#131A22] to-[#0B0F14] shadow-2xl shadow-green-500/10">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-black/40" />
              <div className="p-6 pt-14 space-y-4">
                <div className="h-8 rounded-lg bg-green-500/20" />
                <div className="h-32 rounded-xl bg-white/5 border border-white/10" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-16 rounded-xl bg-white/5" />
                  <div className="h-16 rounded-xl bg-white/5" />
                </div>
                <div className="h-24 rounded-xl bg-green-500/10 border border-green-500/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
