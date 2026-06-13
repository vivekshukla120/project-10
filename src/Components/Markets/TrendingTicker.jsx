import { tickerSections } from "../../data/marketData";

function CoinChip({ coin }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-kc-card border border-kc-border shrink-0">
      <span className="w-5 h-5 rounded-full bg-kc-green/20 text-kc-green text-[10px] font-bold flex items-center justify-center">
        {coin.symbol[0]}
      </span>
      <span className="text-white text-sm font-medium">{coin.symbol}</span>
      <span
        className={`text-xs font-semibold ${
          coin.positive ? "text-kc-green" : "text-kc-red"
        }`}
      >
        {coin.change}
      </span>
    </div>
  );
}

export default function TrendingTicker() {
  return (
    <section className="border-b border-kc-border bg-kc-surface">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-4">
        <div className="grid lg:grid-cols-3 gap-4">
          {tickerSections.map((section) => (
            <div key={section.title} className="min-w-0">
              <p className="text-kc-muted text-xs font-medium mb-2 uppercase tracking-wide">
                {section.title}
              </p>
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {section.coins.map((coin) => (
                  <CoinChip key={coin.symbol} coin={coin} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
