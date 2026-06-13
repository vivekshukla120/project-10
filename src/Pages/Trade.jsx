import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp, FaArrowDown, FaChartLine } from "react-icons/fa";

const orderBook = {
  asks: [
    { price: "108,520.45", amount: "0.845" },
    { price: "108,515.30", amount: "1.245" },
    { price: "108,510.00", amount: "0.562" },
    { price: "108,505.80", amount: "2.103" },
    { price: "108,500.10", amount: "1.785" },
  ],
  bids: [
    { price: "108,420.25", amount: "0.912" },
    { price: "108,415.40", amount: "1.624" },
    { price: "108,410.00", amount: "0.756" },
    { price: "108,405.90", amount: "2.341" },
    { price: "108,400.50", amount: "1.188" },
  ],
};

const recentTrades = [
  {
    price: "108,420.25",
    amount: "0.25",
    side: "buy",
    time: "10:32:18",
  },
  {
    price: "108,415.40",
    amount: "0.52",
    side: "sell",
    time: "10:31:44",
  },
  {
    price: "108,430.10",
    amount: "0.18",
    side: "buy",
    time: "10:31:12",
  },
  {
    price: "108,412.75",
    amount: "1.10",
    side: "sell",
    time: "10:30:50",
  },
  {
    price: "108,425.60",
    amount: "0.75",
    side: "buy",
    time: "10:30:21",
  },
];

const openOrders = [
  {
    pair: "BTC/USDT",
    type: "Limit",
    side: "Buy",
    amount: "0.50 BTC",
    price: "$107,800",
    status: "Open",
  },
  {
    pair: "ETH/USDT",
    type: "Limit",
    side: "Sell",
    amount: "5 ETH",
    price: "$6,500",
    status: "Open",
  },
];

export default function Trade() {
  const [activeTab, setActiveTab] = useState("buy");

  return (
    <div className="min-h-screen bg-[#0B0F14] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">BTC/USDT Spot Trading</h1>

            <div className="flex items-center gap-3 mt-2">
              <span className="text-2xl font-bold text-green-400">
                $108,420.25
              </span>

              <span className="flex items-center gap-1 text-green-400">
                <FaArrowUp />
                +3.42%
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl border border-white/10">
              Spot
            </button>

            <button className="px-4 py-2 rounded-xl border border-white/10">
              Futures
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid xl:grid-cols-12 gap-6">
          {/* Chart */}
          <div className="xl:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-6"
            >
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-semibold text-lg">Trading Chart</h3>

                <div className="flex gap-2">
                  {["1H", "4H", "1D", "1W"].map((item) => (
                    <button
                      key={item}
                      className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* TradingView Placeholder */}
              <div className="h-[500px] rounded-2xl border border-white/5 bg-gradient-to-b from-green-500/10 to-transparent flex flex-col items-center justify-center">
                <FaChartLine className="text-6xl text-green-400 mb-4" />

                <h3 className="text-2xl font-bold">TradingView Chart</h3>

                <p className="text-gray-400 mt-2">
                  Integrate TradingView Widget Here
                </p>
              </div>
            </motion.div>
          </div>

          {/* Order Book */}
          <div className="xl:col-span-2">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-4 h-full">
              <h3 className="font-semibold mb-4">Order Book</h3>

              <div className="space-y-2">
                {orderBook.asks.map((ask, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-red-400">{ask.price}</span>

                    <span className="text-gray-400">{ask.amount}</span>
                  </div>
                ))}
              </div>

              <div className="my-4 text-center text-green-400 font-bold text-lg">
                $108,420.25
              </div>

              <div className="space-y-2">
                {orderBook.bids.map((bid, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-green-400">{bid.price}</span>

                    <span className="text-gray-400">{bid.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Buy / Sell Panel */}
          <div className="xl:col-span-3">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-5">
              <div className="flex gap-3 mb-5">
                <button
                  onClick={() => setActiveTab("buy")}
                  className={`flex-1 py-3 rounded-xl font-semibold ${
                    activeTab === "buy"
                      ? "bg-green-500 text-black"
                      : "bg-white/5"
                  }`}
                >
                  Buy
                </button>

                <button
                  onClick={() => setActiveTab("sell")}
                  className={`flex-1 py-3 rounded-xl font-semibold ${
                    activeTab === "sell"
                      ? "bg-red-500 text-white"
                      : "bg-white/5"
                  }`}
                >
                  Sell
                </button>
              </div>

              <div className="space-y-4">
                <input
                  type="number"
                  placeholder="Price"
                  className="w-full p-4 rounded-xl bg-[#131A22] border border-white/10 outline-none"
                />

                <input
                  type="number"
                  placeholder="Amount"
                  className="w-full p-4 rounded-xl bg-[#131A22] border border-white/10 outline-none"
                />

                <input
                  type="number"
                  placeholder="Total"
                  className="w-full p-4 rounded-xl bg-[#131A22] border border-white/10 outline-none"
                />

                <button
                  className={`w-full py-4 rounded-xl font-bold ${
                    activeTab === "buy"
                      ? "bg-green-500 text-black"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {activeTab === "buy" ? "Buy BTC" : "Sell BTC"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {/* Recent Trades */}
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
            <h3 className="font-semibold text-lg mb-5">Recent Trades</h3>

            <div className="space-y-3">
              {recentTrades.map((trade, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span
                    className={
                      trade.side === "buy" ? "text-green-400" : "text-red-400"
                    }
                  >
                    {trade.price}
                  </span>

                  <span>{trade.amount}</span>

                  <span className="text-gray-500">{trade.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Open Orders */}
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 overflow-x-auto">
            <h3 className="font-semibold text-lg mb-5">Open Orders</h3>

            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="text-gray-400 text-sm">
                  <th className="text-left pb-4">Pair</th>
                  <th className="text-left pb-4">Type</th>
                  <th className="text-left pb-4">Side</th>
                  <th className="text-left pb-4">Amount</th>
                  <th className="text-left pb-4">Price</th>
                  <th className="text-left pb-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {openOrders.map((order, i) => (
                  <tr key={i} className="border-t border-white/5">
                    <td className="py-4">{order.pair}</td>

                    <td>{order.type}</td>

                    <td
                      className={
                        order.side === "Buy" ? "text-green-400" : "text-red-400"
                      }
                    >
                      {order.side}
                    </td>

                    <td>{order.amount}</td>

                    <td>{order.price}</td>

                    <td>
                      <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
