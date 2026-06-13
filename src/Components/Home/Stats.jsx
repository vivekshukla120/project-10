import { motion } from "framer-motion";
import { FaUsers, FaGlobe, FaChartLine, FaCoins } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    value: "40M+",
    label: "Global Users",
    description:
      "Millions of traders trust our platform for secure and efficient crypto trading.",
  },
  {
    icon: <FaChartLine />,
    value: "$120B+",
    label: "Daily Trading Volume",
    description:
      "Industry-leading liquidity and deep markets across major cryptocurrencies.",
  },
  {
    icon: <FaGlobe />,
    value: "200+",
    label: "Countries Supported",
    description:
      "Accessible worldwide with localized services and global infrastructure.",
  },
  {
    icon: <FaCoins />,
    value: "800+",
    label: "Trading Pairs",
    description:
      "Trade hundreds of cryptocurrencies with spot and futures markets.",
  },
];

export default function Stats() {
  return (
    <section className="relative py-24 bg-[#0B0F14] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-green-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-500/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-400 font-medium">
            Platform Statistics
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Trusted By Millions
            <span className="block text-green-400 mt-2">Around The World</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Our platform delivers institutional-grade performance, global
            accessibility, and deep liquidity for traders of every level.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-green-500/40 transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-black text-2xl mb-6">
                {stat.icon}
              </div>

              {/* Value */}
              <h3 className="text-4xl lg:text-5xl font-bold text-white">
                {stat.value}
              </h3>

              {/* Label */}
              <h4 className="mt-3 text-xl font-semibold text-green-400">
                {stat.label}
              </h4>

              {/* Description */}
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-green-500/10 via-white/[0.03] to-green-500/10 backdrop-blur-xl overflow-hidden"
        >
          <div className="p-10 lg:p-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Join The Next Generation
              <span className="block text-green-400 mt-2">
                Of Digital Finance
              </span>
            </h3>

            <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
              Access advanced trading tools, deep liquidity, secure asset
              management, and a complete ecosystem designed for modern crypto
              investors.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button className="px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-bold">
                Get Started
              </button>

              <button className="px-8 py-4 rounded-xl border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 font-bold">
                Explore Markets
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
