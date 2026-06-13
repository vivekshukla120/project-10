import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaTimes,
  FaChartLine,
  FaCoins,
  FaGift,
  FaShieldAlt,
} from "react-icons/fa";

const icons = [FaChartLine, FaCoins, FaChartLine, FaGift, FaShieldAlt];

export default function MobileMenu({ isOpen, setIsOpen, navLinks = [] }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            className="fixed top-0 right-0 h-screen w-[300px] max-w-[85%] bg-kc-surface border-l border-kc-border z-50 lg:hidden overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
          >
            <div className="flex items-center justify-between p-4 border-b border-kc-border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-kc-green flex items-center justify-center">
                  <span className="text-black font-extrabold text-sm">K</span>
                </div>
                <span className="text-white font-bold">KuCoin</span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 flex items-center justify-center text-kc-muted"
              >
                <FaTimes />
              </button>
            </div>

            <div className="p-4 space-y-1">
              {navLinks.map((item, index) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl text-kc-muted hover:text-kc-green hover:bg-kc-card transition"
                >
                  {icons[index] && (
                    <span className="text-base">
                      {(() => {
                        const Icon = icons[index];
                        return <Icon />;
                      })()}
                    </span>
                  )}
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>

            <div className="p-4 border-t border-kc-border space-y-3">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block w-full py-3 text-center kc-btn-outline text-sm font-medium"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="block w-full py-3 text-center kc-btn-primary text-sm"
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
