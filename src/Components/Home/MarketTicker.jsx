import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const marketData = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$108,420",
    change: "+3.82%",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$6,210",
    change: "+2.15%",
  },
  {
    symbol: "XRP",
    name: "XRP",
    price: "$2.94",
    change: "+6.41%",
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "$198.50",
    change: "+4.26%",
  },
  {
    symbol: "BNB",
    name: "BNB",
    price: "$785.30",
    change: "+1.84%",
  },
  {
    symbol: "DOGE",
    name: "Dogecoin",
    price: "$0.38",
    change: "+5.12%",
  },
];

export default function MarketTicker() {
  const [tickerData, setTickerData] = useState([]);

  useEffect(() => {
    setTickerData([...marketData, ...marketData]);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0F141B] border-y border-white/5">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5" />

      <div className="relative py-5">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-5"
        >
          {tickerData.map((coin, index) => (
            <div
              key={index}
              className="flex items-center gap-4 min-w-[260px] px-5 py-4 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/5 hover:border-green-500/30 transition-all duration-300"
            >
              {/* Coin Icon */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-black font-bold text-sm">
                {coin.symbol}
              </div>

              {/* Coin Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-semibold">{coin.symbol}</h3>
                  <span className="text-gray-500 text-sm">{coin.name}</span>
                </div>

                <p className="text-white text-lg font-bold mt-1">
                  {coin.price}
                </p>
              </div>

              {/* Change */}
              <div className="text-right">
                <span className="text-green-400 font-semibold">
                  {coin.change}
                </span>

                <div className="mt-2 w-16 h-8 flex items-end gap-[2px]">
                  {[12, 18, 10, 22, 16, 25, 20].map((height, i) => (
                    <div
                      key={i}
                      className="bg-green-400 rounded-sm flex-1"
                      style={{
                        height: `${height}px`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
