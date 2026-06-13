import TrendingTicker from "../Components/Markets/TrendingTicker";
import MarketsTable from "../Components/Markets/MarketsTable";

export default function Markets() {
  return (
    <div className="pt-16 min-h-screen">
      <TrendingTicker />

      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Markets Overview
          </h1>
          <p className="text-kc-muted text-sm mt-2">
            Crypto Markets, Prices &amp; Trends Today
          </p>
        </div>

        <MarketsTable />

        {/* Bottom stats bar like KuCoin */}
        <div className="mt-6 flex items-center justify-between py-4 border-t border-kc-border">
          <p className="text-kc-muted text-sm">
            Available for trading:{" "}
            <span className="text-white font-medium">800+ pairs</span>
          </p>
          <p className="text-kc-muted text-sm">
            24h Volume:{" "}
            <span className="text-kc-green font-semibold">$182B USDT</span>
          </p>
        </div>
      </div>
    </div>
  );
}
