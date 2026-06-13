import { motion } from "framer-motion";
import {
  FaChartLine,
  FaRobot,
  FaShieldAlt,
  FaCoins,
  FaExchangeAlt,
  FaWallet,
} from "react-icons/fa";

const features = [
  {
    icon: <FaExchangeAlt size={28} />,
    title: "Spot Trading",
    description:
      "Trade hundreds of cryptocurrencies with deep liquidity, low fees, and instant execution.",
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Futures Trading",
    description:
      "Access advanced derivatives markets with powerful charting and risk management tools.",
  },
  {
    icon: <FaRobot size={28} />,
    title: "Trading Bots",
    description:
      "Automate your strategies using smart trading bots designed for every market condition.",
  },
  {
    icon: <FaCoins size={28} />,
    title: "Crypto Earn",
    description:
      "Grow your portfolio through flexible savings, staking, and passive income opportunities.",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Institutional Security",
    description:
      "Multi-layer protection, cold wallet storage, proof of reserves, and real-time monitoring.",
  },
  {
    icon: <FaWallet size={28} />,
    title: "Secure Wallet",
    description:
      "Store, send, receive, and manage digital assets securely from a single platform.",
  },
];

export default function Features() {
  return (
    <section className="relative py-24 bg-[#0F141B] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-400 font-medium">Exchange Features</span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Everything You Need
            <span className="block text-green-400 mt-2">To Trade Smarter</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Access advanced trading tools, secure asset management, automated
            strategies, and a complete crypto ecosystem built for beginners and
            professionals.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-green-500/40 transition-all duration-300"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/0 via-green-500/0 to-green-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Icon */}
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-black mb-6">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="relative text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>

              <p className="relative text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Learn More */}
              <button className="relative mt-6 text-green-400 font-medium hover:text-green-300 transition">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10 backdrop-blur-xl p-10 lg:p-14"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold text-white">
                Ready to Start Trading?
              </h3>

              <p className="text-gray-400 mt-3 max-w-2xl">
                Join millions of users worldwide and experience a secure,
                powerful, and professional crypto trading platform built for the
                future.
              </p>
            </div>

            <button className="px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-bold whitespace-nowrap">
              Create Free Account
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
