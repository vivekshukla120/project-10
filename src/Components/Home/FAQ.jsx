import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "Click the Sign Up button, enter your email address, create a secure password, and complete identity verification to start trading.",
  },
  {
    question: "Is my cryptocurrency safe on the platform?",
    answer:
      "Yes. Assets are protected through cold wallet storage, multi-factor authentication, encryption, and continuous security monitoring.",
  },
  {
    question: "What cryptocurrencies can I trade?",
    answer:
      "You can trade hundreds of cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), XRP, Solana (SOL), BNB, and many other digital assets.",
  },
  {
    question: "Are there any trading fees?",
    answer:
      "Trading fees vary based on market type and trading volume. Active traders may qualify for reduced fee tiers and additional benefits.",
  },
  {
    question: "Can I trade on mobile devices?",
    answer:
      "Yes. Our mobile application allows you to buy, sell, deposit, withdraw, and manage your portfolio from anywhere.",
  },
  {
    question: "What is futures trading?",
    answer:
      "Futures trading allows users to speculate on cryptocurrency price movements using leveraged contracts and advanced trading tools.",
  },
  {
    question: "Do you provide staking or earning products?",
    answer:
      "Yes. Users can access staking, savings, and other earning opportunities designed to generate passive income from digital assets.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Our support team is available 24/7 through live chat, ticket systems, and help center resources.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-[#0B0F14] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-green-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-500/10 blur-[180px] rounded-full" />

      <div className="relative max-w-4xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-400 font-medium">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Got Questions?
            <span className="block text-green-400 mt-2">We Have Answers</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Find answers to the most common questions about trading, security,
            account management, and platform features.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className={`rounded-3xl border backdrop-blur-xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-green-500/40 bg-green-500/[0.05]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left p-6 md:p-7"
                >
                  <h3 className="text-white font-semibold text-lg md:text-xl pr-5">
                    {faq.question}
                  </h3>

                  <div className="text-green-400 shrink-0">
                    {isOpen ? <FaMinus size={18} /> : <FaPlus size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="px-6 md:px-7 pb-7">
                        <div className="h-px bg-white/10 mb-5" />

                        <p className="text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center p-10 rounded-3xl border border-white/10 bg-gradient-to-r from-green-500/10 via-white/[0.03] to-green-500/10 backdrop-blur-xl"
        >
          <h3 className="text-3xl font-bold text-white">
            Still Have Questions?
          </h3>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Our support team is available around the clock to help with account
            setup, trading, deposits, withdrawals, and security-related
            questions.
          </p>

          <button className="mt-8 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-bold">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
}
