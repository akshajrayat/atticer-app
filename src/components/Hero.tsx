"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PenTool, Eye, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-green/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="font-bold leading-[1.08] tracking-tight">
            <span className="block text-[clamp(40px,7vw,80px)] text-[#2a2a2a]">
              The identity
            </span>
            <span className="block text-[clamp(40px,7vw,80px)] text-[#555]">
              of your brand
            </span>
            <span className="block text-[clamp(40px,7vw,80px)] text-white flex items-center justify-center gap-3 flex-wrap">
              is{" "}
              <span className="inline-flex items-center gap-3">
                {/* Design badge */}
                <span className="inline-flex items-center gap-2 bg-green/10 border border-green/20 rounded-full px-4 py-2">
                  <PenTool className="w-5 h-5 text-green" />
                  <span className="text-green text-[clamp(14px,2vw,18px)] font-medium">
                    design
                  </span>
                </span>
                <span className="text-white text-[clamp(32px,5vw,60px)]">
                  +
                </span>
                {/* Vision badge */}
                <span className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2">
                  <Eye className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 text-[clamp(14px,2vw,18px)] font-medium">
                    vision
                  </span>
                </span>
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-8 text-[#999] text-base md:text-lg max-w-[420px] mx-auto leading-relaxed"
        >
          We craft logos, brand identities and websites that make businesses
          impossible to forget.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-10 relative inline-block"
        >
          <div className="absolute inset-0 rounded-full bg-green/20 blur-2xl scale-150" />
          <Link
            href="/#work"
            className="relative inline-flex items-center gap-2 bg-[#151515] hover:bg-[#1a1a1a] border border-[#2a2a2a] hover:border-green/30 text-white rounded-full px-8 py-3.5 text-sm font-medium transition-all duration-400 btn-glow"
          >
            See our work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-[#333] flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-green/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
