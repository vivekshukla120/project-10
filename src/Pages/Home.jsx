import { Link } from "react-router-dom";
import { FaArrowRight, FaShieldAlt, FaChartLine, FaMobileAlt } from "react-icons/fa";
import TrendingTicker from "../Components/Markets/TrendingTicker";
import MarketsTable from "../Components/Markets/MarketsTable";

export default function Home() {
  return (
    <div className="pt-16 min-h-screen">
      <TrendingTicker />

      {/* Hero Banner */}
      <section className="border-b border-kc-border bg-gradient-to-b from-kc-surface to-kc-bg">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-kc-green text-sm font-medium mb-3">
                Find the Next Crypto Gem on KuCoin
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Trade Crypto with
                <span className="block text-kc-green mt-1">
                  Confidence &amp; Security
                </span>
              </h1>
              <p className="text-kc-muted mt-5 text-base leading-relaxed max-w-lg">
                Buy, sell, and trade 800+ cryptocurrencies. Access spot trading,
                futures, staking, and earn products on a trusted global
                exchange.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link to="/signup" className="px-6 py-3 kc-btn-primary text-sm">
                  Get Started
                </Link>
                <Link
                  to="/markets"
                  className="px-6 py-3 kc-btn-outline text-sm flex items-center gap-2"
                >
                  Explore Markets
                  <FaArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FaChartLine, label: "Daily Volume", value: "$182B+" },
                { icon: FaShieldAlt, label: "Protected Assets", value: "$5B+" },
                { icon: FaMobileAlt, label: "Global Users", value: "40M+" },
                { icon: FaChartLine, label: "Trading Pairs", value: "800+" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="kc-card p-5">
                  <Icon className="text-kc-green mb-3" size={20} />
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="text-kc-muted text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Markets section */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">Markets Overview</h2>
            <p className="text-kc-muted text-sm mt-1">
              Real-time prices and trends
            </p>
          </div>
          <Link
            to="/markets"
            className="text-kc-green text-sm font-medium hover:underline flex items-center gap-1"
          >
            View All <FaArrowRight size={10} />
          </Link>
        </div>
        <MarketsTable />
      </div>
    </div>
  );
}
