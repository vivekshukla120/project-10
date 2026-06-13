import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
  FaBolt,
  FaFire,
  FaShieldAlt,
} from "react-icons/fa";

const tradingPairs = [
  {
    pair: "BTCUSDT",
    price: "108,420.25",
    change: "+3.42%",
    positive: true,
  },
  {
    pair: "ETHUSDT",
    price: "6,245.18",
    change: "+2.14%",
    positive: true,
  },
  {
    pair: "SOLUSDT",
    price: "198.45",
    change: "-1.12%",
    positive: false,
  },
  {
    pair: "XRPUSDT",
    price: "2.84",
    change: "+7.62%",
    positive: true,
  },
];

const positions = [
  {
    pair: "BTCUSDT",
    side: "Long",
    leverage: "20x",
    pnl: "+$1,284.52",
    positive: true,
  },
  {
    pair: "ETHUSDT",
    side: "Short",
    leverage: "10x",
    pnl: "-$245.30",
    positive: false,
  },
];

export default function Futures() {
  const [activeTab, setActiveTab] = useState("long");

  return (
    <div className="min-h-screen bg-[#0B0F14] pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="text-green-400 font-medium">Futures Trading</span>

          <h1 className="text-5xl md:text-6xl font-bold text-white mt-3">
            Trade Futures Like
            <span className="block text-green-400">A Professional</span>
          </h1>

          <p className="text-gray-400 mt-5 max-w-3xl">
            Access perpetual contracts, advanced risk controls, high liquidity,
            and leverage up to 125x across major cryptocurrency markets.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-5 mb-10">
          {[
            {
              title: "24h Volume",
              value: "$84.5B",
            },
            {
              title: "Open Interest",
              value: "$22.8B",
            },
            {
              title: "Max Leverage",
              value: "125x",
            },
            {
              title: "Trading Pairs",
              value: "300+",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]"
            >
              <p className="text-gray-400 text-sm">{item.title}</p>

              <h3 className="text-white text-2xl font-bold mt-2">
                {item.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid xl:grid-cols-4 gap-6">
          {/* Trading Pairs */}
          <div className="xl:col-span-1">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-white font-semibold mb-5">Futures Markets</h3>

              <div className="space-y-4">
                {tradingPairs.map((pair) => (
                  <div
                    key={pair.pair}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/[0.03] cursor-pointer"
                  >
                    <div>
                      <h4 className="text-white font-medium">{pair.pair}</h4>

                      <p className="text-gray-500 text-sm">${pair.price}</p>
                    </div>

                    <span
                      className={`font-medium ${
                        pair.positive ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {pair.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="xl:col-span-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-white text-xl font-bold">
                    BTCUSDT Perpetual
                  </h3>
                  <p className="text-green-400">$108,420.25</p>
                </div>

                <div className="flex gap-2">
                  {["1H", "4H", "1D", "1W"].map((time) => (
                    <button
                      key={time}
                      className="px-3 py-2 rounded-lg bg-white/[0.03] text-gray-400 hover:text-white"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="h-[450px] rounded-3xl bg-gradient-to-b from-green-500/10 to-transparent border border-white/5 flex items-center justify-center">
                <div className="text-center">
                  <FaChartLine className="text-green-400 text-6xl mx-auto mb-4" />
                  <h3 className="text-white text-xl font-semibold">
                    Trading Chart
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Integrate TradingView Widget Here
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Panel */}
          <div className="xl:col-span-1">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex gap-3 mb-5">
                <button
                  onClick={() => setActiveTab("long")}
                  className={`flex-1 py-3 rounded-xl font-semibold ${
                    activeTab === "long"
                      ? "bg-green-500 text-black"
                      : "bg-white/[0.03] text-white"
                  }`}
                >
                  Long
                </button>

                <button
                  onClick={() => setActiveTab("short")}
                  className={`flex-1 py-3 rounded-xl font-semibold ${
                    activeTab === "short"
                      ? "bg-red-500 text-white"
                      : "bg-white/[0.03] text-white"
                  }`}
                >
                  Short
                </button>
              </div>

              <div className="space-y-4">
                <input
                  type="number"
                  placeholder="Price"
                  className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 text-white outline-none"
                />

                <input
                  type="number"
                  placeholder="Amount"
                  className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 text-white outline-none"
                />

                <input
                  type="number"
                  placeholder="Leverage"
                  className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 text-white outline-none"
                />

                <button
                  className={`w-full py-4 rounded-xl font-bold ${
                    activeTab === "long"
                      ? "bg-green-500 text-black"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {activeTab === "long" ? "Open Long" : "Open Short"}
                </button>
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Margin Mode</span>
                  <span className="text-white">Cross</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Leverage</span>
                  <span className="text-white">20x</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h3 className="text-white text-xl font-semibold">Open Positions</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr>
                  <th className="text-left px-6 py-4 text-gray-400">Pair</th>
                  <th className="text-left px-6 py-4 text-gray-400">Side</th>
                  <th className="text-left px-6 py-4 text-gray-400">
                    Leverage
                  </th>
                  <th className="text-left px-6 py-4 text-gray-400">PNL</th>
                </tr>
              </thead>

              <tbody>
                {positions.map((position) => (
                  <tr
                    key={position.pair + position.side}
                    className="border-t border-white/5"
                  >
                    <td className="px-6 py-5 text-white">{position.pair}</td>

                    <td className="px-6 py-5">
                      <span
                        className={`px-3 py-1 rounded-lg text-sm ${
                          position.side === "Long"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {position.side}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-white">
                      {position.leverage}
                    </td>

                    <td
                      className={`px-6 py-5 font-semibold ${
                        position.positive ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {position.pnl}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: <FaBolt />,
              title: "Ultra Fast Execution",
              desc: "Millisecond order execution with deep liquidity.",
            },
            {
              icon: <FaShieldAlt />,
              title: "Risk Management",
              desc: "Advanced stop-loss and take-profit controls.",
            },
            {
              icon: <FaFire />,
              title: "High Leverage",
              desc: "Trade with leverage up to 125x on major assets.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]"
            >
              <div className="text-green-400 text-3xl mb-4">{item.icon}</div>

              <h3 className="text-white text-xl font-semibold">{item.title}</h3>

              <p className="text-gray-400 mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
