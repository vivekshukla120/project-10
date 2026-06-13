import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLock,
  FaFingerprint,
  FaDatabase,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const securityFeatures = [
  {
    icon: <FaLock size={28} />,
    title: "Cold Wallet Storage",
    description:
      "The majority of digital assets are stored offline in highly secure cold wallets to reduce exposure to online threats.",
  },
  {
    icon: <FaFingerprint size={28} />,
    title: "Multi-Factor Authentication",
    description:
      "Protect your account with advanced 2FA, biometric verification, and anti-phishing security layers.",
  },
  {
    icon: <FaDatabase size={28} />,
    title: "Proof of Reserves",
    description:
      "Transparent reserve verification ensures customer assets remain fully backed and auditable.",
  },
];

const securityStats = [
  {
    value: "$5B+",
    label: "Protected Assets",
  },
  {
    value: "99.99%",
    label: "System Uptime",
  },
  {
    value: "40M+",
    label: "Protected Users",
  },
  {
    value: "24/7",
    label: "Security Monitoring",
  },
];

export default function Security() {
  return (
    <section className="relative py-24 bg-[#0F141B] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-green-400 font-medium">
            Enterprise Security
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Security You Can
            <span className="block text-green-400 mt-2">Trust Every Day</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Industry-leading security architecture designed to protect user
            assets, personal information, and trading activities around the
            clock.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 mb-6">
              <FaShieldAlt />
              Trusted Security Infrastructure
            </div>

            <h3 className="text-4xl font-bold text-white leading-tight">
              Multi-Layer Protection
              <span className="block text-green-400">
                For Every Transaction
              </span>
            </h3>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Our platform combines cold wallet storage, advanced encryption,
              real-time monitoring, proof of reserves, and institutional-grade
              infrastructure to ensure the highest level of protection.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Cold wallet asset protection",
                "Advanced anti-phishing safeguards",
                "Real-time risk monitoring",
                "Independent security audits",
                "Encrypted account infrastructure",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-400" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 transition-all duration-300 rounded-xl text-black font-bold">
              Learn More
              <FaArrowRight />
            </button>
          </motion.div>

          {/* Right Side Security Cards */}
          <div className="space-y-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="group p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-green-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-black shrink-0">
                    {feature.icon}
                  </div>

                  <div>
                    <h4 className="text-2xl font-semibold text-white mb-3">
                      {feature.title}
                    </h4>

                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security Stats */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {securityStats.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl text-center"
            >
              <h3 className="text-4xl font-bold text-green-400">
                {item.value}
              </h3>

              <p className="text-gray-400 mt-3">{item.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-green-500/10 via-white/[0.03] to-green-500/10 backdrop-blur-xl p-10 lg:p-14 text-center"
        >
          <FaShieldAlt className="mx-auto text-green-400 text-5xl mb-6" />

          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Your Assets Deserve Maximum Protection
          </h3>

          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            Trade with confidence using one of the most secure crypto
            infrastructures designed to protect users and assets worldwide.
          </p>

          <button className="mt-8 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-400 transition-all duration-300 text-black font-bold">
            Start Secure Trading
          </button>
        </motion.div>
      </div>
    </section>
  );
}
