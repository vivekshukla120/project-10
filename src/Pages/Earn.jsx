import { motion } from "framer-motion";
import {
  FaCoins,
  FaLock,
  FaChartLine,
  FaArrowRight,
  FaFire,
  FaShieldAlt,
  FaWallet,
} from "react-icons/fa";

const earnProducts = [
  {
    name: "Flexible Savings",
    apy: "8.5%",
    lock: "Flexible",
    icon: <FaWallet />,
  },
  {
    name: "Fixed Staking",
    apy: "18.2%",
    lock: "90 Days",
    icon: <FaLock />,
  },
  {
    name: "ETH Staking",
    apy: "6.8%",
    lock: "Flexible",
    icon: <FaCoins />,
  },
  {
    name: "USDT Earn",
    apy: "12.5%",
    lock: "30 Days",
    icon: <FaChartLine />,
  },
];

const assets = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    apy: "4.5%",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    apy: "6.8%",
  },
  {
    symbol: "SOL",
    name: "Solana",
    apy: "10.2%",
  },
  {
    symbol: "XRP",
    name: "XRP",
    apy: "7.3%",
  },
  {
    symbol: "USDT",
    name: "Tether",
    apy: "12.5%",
  },
];

export default function Earn() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-white pt-28 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="text-green-400 font-medium">Crypto Earn</span>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            Grow Your Crypto
            <span className="block text-green-400">Assets Effortlessly</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            Earn passive income through staking, savings, and investment
            products with competitive APYs and institutional-grade security.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button className="px-8 py-4 bg-green-500 hover:bg-green-400 rounded-xl text-black font-bold transition">
              Start Earning
            </button>

            <button className="px-8 py-4 border border-white/10 hover:border-green-500 rounded-xl transition">
              Explore Products
            </button>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 mt-20">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Total Value Locked",
              value: "$5.2B",
            },
            {
              title: "Highest APY",
              value: "18.2%",
            },
            {
              title: "Supported Assets",
              value: "150+",
            },
            {
              title: "Active Users",
              value: "2M+",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-6"
            >
              <p className="text-gray-400 text-sm">{item.title}</p>

              <h3 className="text-3xl font-bold mt-2">{item.value}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Earn Products */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 mt-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold">Popular Earn Products</h2>

          <button className="text-green-400 flex items-center gap-2">
            View All
            <FaArrowRight />
          </button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {earnProducts.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 hover:border-green-500/40 transition"
            >
              <div className="text-green-400 text-3xl mb-5">{product.icon}</div>

              <h3 className="text-2xl font-bold">{product.name}</h3>

              <div className="mt-5">
                <p className="text-gray-400">Estimated APY</p>

                <h4 className="text-4xl font-bold text-green-400 mt-2">
                  {product.apy}
                </h4>
              </div>

              <div className="mt-5">
                <p className="text-gray-400">Lock Period</p>

                <p className="text-white mt-2">{product.lock}</p>
              </div>

              <button className="w-full mt-6 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-black font-semibold transition">
                Subscribe
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Assets Table */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 mt-24">
        <h2 className="text-4xl font-bold mb-10">Supported Assets</h2>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left px-6 py-5 text-gray-400">Asset</th>
                <th className="text-left px-6 py-5 text-gray-400">Name</th>
                <th className="text-left px-6 py-5 text-gray-400">APY</th>
                <th className="text-right px-6 py-5 text-gray-400">Action</th>
              </tr>
            </thead>

            <tbody>
              {assets.map((asset) => (
                <tr key={asset.symbol} className="border-b border-white/5">
                  <td className="px-6 py-5 font-semibold">{asset.symbol}</td>

                  <td className="px-6 py-5 text-gray-300">{asset.name}</td>

                  <td className="px-6 py-5 text-green-400 font-semibold">
                    {asset.apy}
                  </td>

                  <td className="px-6 py-5 text-right">
                    <button className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-400 text-black font-semibold transition">
                      Earn
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 mt-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaShieldAlt />,
              title: "Secure Staking",
              desc: "Institutional-grade security protects your assets.",
            },
            {
              icon: <FaFire />,
              title: "High APY",
              desc: "Competitive yields across multiple crypto assets.",
            },
            {
              icon: <FaLock />,
              title: "Flexible Terms",
              desc: "Choose between flexible and fixed earning products.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-8"
            >
              <div className="text-green-400 text-4xl mb-5">{item.icon}</div>

              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="text-gray-400 mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 mt-24">
        <div className="rounded-3xl bg-gradient-to-r from-green-500/10 via-white/[0.03] to-green-500/10 border border-white/10 p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Start Earning Today
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Put your crypto assets to work and generate passive income with
            industry-leading earning opportunities.
          </p>

          <button className="mt-8 px-8 py-4 bg-green-500 hover:bg-green-400 rounded-xl text-black font-bold transition">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
