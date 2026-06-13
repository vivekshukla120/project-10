import { motion } from "framer-motion";
import {
  FaExchangeAlt,
  FaChartLine,
  FaRobot,
  FaCoins,
  FaArrowRight,
} from "react-icons/fa";

const products = [
  {
    icon: <FaExchangeAlt size={28} />,
    title: "Spot Trading",
    description:
      "Buy and sell cryptocurrencies instantly with deep liquidity and ultra-low trading fees.",
    stats: "800+ Trading Pairs",
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Futures Trading",
    description:
      "Trade perpetual contracts with advanced tools, risk controls, and powerful leverage options.",
    stats: "Up to 125x Leverage",
  },
  {
    icon: <FaRobot size={28} />,
    title: "Trading Bots",
    description:
      "Automate your strategy using AI-powered bots for grid trading and portfolio optimization.",
    stats: "24/7 Automation",
  },
  {
    icon: <FaCoins size={28} />,
    title: "Crypto Earn",
    description:
      "Generate passive income through flexible savings, staking, and investment products.",
    stats: "High APY Rewards",
  },
];

export default function TradingProducts() {
  return (
    <section className="relative py-24 bg-[#0B0F14] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-green-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-400 font-medium">Trading Ecosystem</span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Powerful Products For
            <span className="block text-green-400 mt-2">Every Trader</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Access professional trading tools, automated strategies, investment
            products, and a complete crypto ecosystem designed to maximize
            opportunities in every market.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-green-500/40 transition-all duration-300"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/0 via-green-500/0 to-green-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-black mb-6">
                {product.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Stats */}
              <div className="inline-flex px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                {product.stats}
              </div>

              {/* Button */}
              <div>
                <button className="flex items-center gap-2 text-green-400 font-medium hover:text-green-300 transition">
                  Explore Product
                  <FaArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Large Featured Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-green-500/10 via-white/[0.03] to-green-500/10 backdrop-blur-xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center p-10 lg:p-16">
            {/* Left */}
            <div>
              <span className="inline-flex px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                Featured Product
              </span>

              <h3 className="mt-6 text-4xl font-bold text-white leading-tight">
                Advanced Trading
                <span className="block text-green-400">
                  Built For Professionals
                </span>
              </h3>

              <p className="mt-6 text-gray-400 leading-relaxed">
                Experience institutional-grade execution, powerful charting
                tools, advanced order types, and real-time market analysis to
                stay ahead of every opportunity.
              </p>

              <button className="mt-8 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 transition text-black font-bold">
                Start Trading Now
              </button>
            </div>

            {/* Right Stats Cards */}
            <div className="grid grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.04]">
                <h4 className="text-3xl font-bold text-white">800+</h4>
                <p className="text-gray-400 mt-2">Trading Pairs</p>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.04]">
                <h4 className="text-3xl font-bold text-white">40M+</h4>
                <p className="text-gray-400 mt-2">Global Users</p>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.04]">
                <h4 className="text-3xl font-bold text-white">$120B+</h4>
                <p className="text-gray-400 mt-2">Daily Volume</p>
              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.04]">
                <h4 className="text-3xl font-bold text-white">200+</h4>
                <p className="text-gray-400 mt-2">Countries</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
