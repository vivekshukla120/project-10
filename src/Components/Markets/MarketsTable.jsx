import { useState } from "react";
import { FaStar, FaSearch } from "react-icons/fa";
import {
  marketTableData,
  marketTabs,
  categoryTags,
} from "../../data/marketData";

export default function MarketsTable() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = marketTableData.filter((coin) => {
    const q = search.toLowerCase();
    const matchSearch =
      coin.name.toLowerCase().includes(q) ||
      coin.symbol.toLowerCase().includes(q);
    return matchSearch;
  });

  return (
    <div>
      {/* Tabs */}
      <div className="flex items-center gap-1 mb-4 border-b border-kc-border pb-0">
        {marketTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors -mb-px ${
              activeTab === tab
                ? "border-kc-green text-kc-green"
                : "border-transparent text-kc-muted hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Category tags */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
        {categoryTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveCategory(tag)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium shrink-0 transition-colors ${
              activeCategory === tag
                ? "bg-kc-green/15 text-kc-green border border-kc-green/30"
                : "bg-kc-card text-kc-muted border border-kc-border hover:text-white"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-kc-muted text-sm" />
        <input
          type="text"
          placeholder="Search coin name or symbol..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm bg-kc-card border border-kc-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-kc-muted outline-none focus:border-kc-green transition"
        />
      </div>

      {/* Table */}
      <div className="kc-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b border-kc-border text-kc-muted text-xs">
                <th className="text-left px-4 py-4 font-medium w-12">#</th>
                <th className="text-left px-4 py-4 font-medium">Name</th>
                <th className="text-right px-4 py-4 font-medium">Price</th>
                <th className="text-right px-4 py-4 font-medium">1h</th>
                <th className="text-right px-4 py-4 font-medium">4h</th>
                <th className="text-right px-4 py-4 font-medium">24h</th>
                <th className="text-left px-4 py-4 font-medium hidden xl:table-cell">
                  Markets
                </th>
                <th className="text-right px-4 py-4 font-medium hidden lg:table-cell">
                  Market Cap
                </th>
                <th className="text-right px-4 py-4 font-medium hidden lg:table-cell">
                  24h Volume
                </th>
                <th className="text-right px-4 py-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((coin) => (
                <tr
                  key={coin.symbol}
                  className="border-b border-kc-border/60 hover:bg-kc-card/60 transition-colors"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2 text-kc-muted text-sm">
                      <FaStar className="text-kc-border hover:text-kc-green cursor-pointer" />
                      {coin.rank}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-kc-green/15 text-kc-green text-xs font-bold flex items-center justify-center shrink-0">
                        {coin.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">
                          {coin.symbol}
                        </p>
                        <p className="text-kc-muted text-xs">{coin.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right text-white text-sm font-medium">
                    ${coin.price}
                  </td>
                  <td
                    className={`px-4 py-4 text-right text-sm ${
                      coin.positive ? "text-kc-green" : "text-kc-red"
                    }`}
                  >
                    {coin.change1h}
                  </td>
                  <td
                    className={`px-4 py-4 text-right text-sm ${
                      coin.positive ? "text-kc-green" : "text-kc-red"
                    }`}
                  >
                    {coin.change4h}
                  </td>
                  <td
                    className={`px-4 py-4 text-right text-sm font-medium ${
                      coin.positive ? "text-kc-green" : "text-kc-red"
                    }`}
                  >
                    {coin.change24h}
                  </td>
                  <td className="px-4 py-4 text-kc-muted text-xs hidden xl:table-cell">
                    {coin.markets}
                  </td>
                  <td className="px-4 py-4 text-right text-kc-muted text-sm hidden lg:table-cell">
                    {coin.marketCap}
                  </td>
                  <td className="px-4 py-4 text-right text-kc-muted text-sm hidden lg:table-cell">
                    {coin.volume}
                  </td>
                  <td className="px-4 py-4 text-right">
                    <button
                      type="button"
                      className="px-4 py-1.5 text-xs font-semibold kc-btn-primary"
                    >
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
