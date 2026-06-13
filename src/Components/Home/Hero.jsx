import { motion } from "framer-motion";
import { FaArrowRight, FaPlay } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F14] min-h-screen flex items-center pt-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6">
              🚀 Trusted by Millions of Traders Worldwide
            </span>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Buy & Trade
              <span className="block text-green-400">Cryptocurrency</span>
              Instantly
            </h1>

            <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
              Trade Bitcoin, Ethereum, XRP and hundreds of digital assets with
              advanced trading tools, industry-leading security and
              lightning-fast execution.
            </p>

            {/* Email Form */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-green-500"
              />

              <button className="px-7 py-4 bg-green-500 hover:bg-green-400 transition-all duration-300 rounded-xl font-semibold text-black flex items-center justify-center gap-2">
                Get Started
                <FaArrowRight />
              </button>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center gap-3 px-6 py-3 border border-white/10 rounded-xl text-white hover:border-green-500 transition">
                <FaPlay className="text-green-400" />
                Watch Demo
              </button>

              <button className="px-6 py-3 text-green-400 hover:text-green-300 transition">
                Explore Markets →
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-14">
              <div>
                <h3 className="text-3xl font-bold text-white">40M+</h3>
                <p className="text-gray-500 text-sm mt-1">Users</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">$120B+</h3>
                <p className="text-gray-500 text-sm mt-1">Daily Volume</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">200+</h3>
                <p className="text-gray-500 text-sm mt-1">Countries</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Trading Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-white text-xl font-semibold">
                  Market Overview
                </h3>

                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                  Live
                </span>
              </div>

              {/* Coins */}
              {[
                {
                  coin: "BTC",
                  name: "Bitcoin",
                  price: "$108,420",
                  change: "+3.8%",
                },
                {
                  coin: "ETH",
                  name: "Ethereum",
                  price: "$6,210",
                  change: "+2.1%",
                },
                {
                  coin: "XRP",
                  name: "Ripple",
                  price: "$2.94",
                  change: "+6.4%",
                },
                {
                  coin: "SOL",
                  name: "Solana",
                  price: "$198",
                  change: "+4.2%",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-white/5"
                >
                  <div>
                    <h4 className="text-white font-medium">{item.coin}</h4>
                    <p className="text-gray-500 text-sm">{item.name}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-white font-semibold">{item.price}</p>
                    <p className="text-green-400 text-sm">{item.change}</p>
                  </div>
                </div>
              ))}

              {/* CTA */}
              <button className="w-full mt-8 bg-green-500 hover:bg-green-400 transition py-4 rounded-xl text-black font-bold">
                Start Trading
              </button>
            </div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -top-6 -left-6 bg-[#121821] border border-white/10 px-5 py-4 rounded-2xl"
            >
              <p className="text-gray-400 text-sm">Portfolio Value</p>
              <h4 className="text-white font-bold text-xl">$124,850</h4>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -bottom-6 -right-6 bg-[#121821] border border-white/10 px-5 py-4 rounded-2xl"
            >
              <p className="text-gray-400 text-sm">24h Profit</p>
              <h4 className="text-green-400 font-bold text-xl">+$4,320</h4>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
