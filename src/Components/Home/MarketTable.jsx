import { motion } from "framer-motion";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const marketCoins = [
  {
    rank: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$108,420.56",
    change: "+3.82%",
    volume: "$48.2B",
    data: [
      { value: 20 },
      { value: 35 },
      { value: 28 },
      { value: 42 },
      { value: 50 },
      { value: 46 },
      { value: 65 },
    ],
  },
  {
    rank: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$6,210.41",
    change: "+2.15%",
    volume: "$24.5B",
    data: [
      { value: 15 },
      { value: 18 },
      { value: 24 },
      { value: 30 },
      { value: 28 },
      { value: 35 },
      { value: 42 },
    ],
  },
  {
    rank: 3,
    name: "XRP",
    symbol: "XRP",
    price: "$2.94",
    change: "+6.41%",
    volume: "$12.8B",
    data: [
      { value: 12 },
      { value: 20 },
      { value: 15 },
      { value: 28 },
      { value: 35 },
      { value: 45 },
      { value: 55 },
    ],
  },
  {
    rank: 4,
    name: "Solana",
    symbol: "SOL",
    price: "$198.52",
    change: "+4.26%",
    volume: "$8.9B",
    data: [
      { value: 22 },
      { value: 26 },
      { value: 18 },
      { value: 30 },
      { value: 40 },
      { value: 44 },
      { value: 58 },
    ],
  },
  {
    rank: 5,
    name: "BNB",
    symbol: "BNB",
    price: "$785.31",
    change: "+1.84%",
    volume: "$5.4B",
    data: [
      { value: 10 },
      { value: 15 },
      { value: 22 },
      { value: 25 },
      { value: 30 },
      { value: 35 },
      { value: 38 },
    ],
  },
];

export default function MarketTable() {
  return (
    <section className="py-24 bg-[#0B0F14]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <span className="text-green-400 font-medium">
            Live Crypto Markets
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Top Cryptocurrency Prices
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl">
            Track real-time cryptocurrency prices, market capitalization,
            trading volume and performance across the most traded digital
            assets.
          </p>
        </motion.div>

        {/* Table */}
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-5 text-left text-gray-400 font-medium">
                  #
                </th>

                <th className="px-6 py-5 text-left text-gray-400 font-medium">
                  Asset
                </th>

                <th className="px-6 py-5 text-left text-gray-400 font-medium">
                  Price
                </th>

                <th className="px-6 py-5 text-left text-gray-400 font-medium">
                  24h Change
                </th>

                <th className="px-6 py-5 text-left text-gray-400 font-medium">
                  Volume
                </th>

                <th className="px-6 py-5 text-left text-gray-400 font-medium">
                  Chart
                </th>

                <th className="px-6 py-5 text-center text-gray-400 font-medium">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {marketCoins.map((coin, index) => (
                <motion.tr
                  key={coin.symbol}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="border-b border-white/5 hover:bg-white/[0.03] transition"
                >
                  {/* Rank */}
                  <td className="px-6 py-5 text-white font-semibold">
                    {coin.rank}
                  </td>

                  {/* Coin */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-black font-bold text-sm">
                        {coin.symbol}
                      </div>

                      <div>
                        <h4 className="text-white font-semibold">
                          {coin.name}
                        </h4>

                        <p className="text-gray-500 text-sm">{coin.symbol}</p>
                      </div>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-5 text-white font-semibold">
                    {coin.price}
                  </td>

                  {/* Change */}
                  <td className="px-6 py-5">
                    <span className="text-green-400 font-semibold">
                      {coin.change}
                    </span>
                  </td>

                  {/* Volume */}
                  <td className="px-6 py-5 text-gray-300">{coin.volume}</td>

                  {/* Chart */}
                  <td className="px-6 py-5">
                    <div className="w-32 h-14">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={coin.data}>
                          <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#00D67A"
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </td>

                  {/* Button */}
                  <td className="px-6 py-5 text-center">
                    <button className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-400 transition font-semibold text-black">
                      Trade
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 rounded-xl border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 font-semibold">
            View All Markets
          </button>
        </motion.div>
      </div>
    </section>
  );
}
