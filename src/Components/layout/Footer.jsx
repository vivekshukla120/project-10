import {
  FaTwitter,
  FaTelegram,
  FaDiscord,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const footerLinks = {
  Products: [
    "Buy Crypto",
    "Convert",
    "Spot Trading",
    "Futures Trading",
    "Margin Trading",
    "KuCoin Earn",
    "Trading Bot",
  ],
  Service: [
    "Beginner's Guide",
    "Help Center",
    "Submit a Ticket",
    "Fees & VIP",
    "Bug Bounty",
    "API Documentation",
  ],
  Business: [
    "Affiliate Program",
    "Brokers",
    "Institutions",
    "Token Listing",
    "P2P Merchant",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-kc-surface border-t border-kc-border mt-auto">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-kc-green flex items-center justify-center">
                <span className="text-black font-extrabold text-sm">K</span>
              </div>
              <span className="text-white font-bold text-lg">KuCoin</span>
            </div>
            <p className="text-kc-muted text-sm leading-relaxed">
              A global cryptocurrency exchange trusted by millions of users
              worldwide for secure and professional digital asset trading.
            </p>
            <div className="flex gap-3 mt-5">
              {[FaTwitter, FaTelegram, FaDiscord, FaYoutube, FaLinkedin].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-kc-card border border-kc-border flex items-center justify-center text-kc-muted hover:text-kc-green hover:border-kc-green/30 transition"
                  >
                    <Icon size={14} />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-kc-muted text-sm hover:text-kc-green transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-kc-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-kc-muted text-xs">
            © 2017 – {new Date().getFullYear()} KuCoin.com. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            {["Terms of Use", "Privacy Policy", "Risk Disclosure"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-kc-muted text-xs hover:text-kc-green transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
