"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

function CountUp({
  value,
  suffix = "",
  prefix = "",
}: {
  value: string;
  suffix?: string;
  prefix?: string;
}) {
  return (
    <span className="text-3xl md:text-4xl font-bold text-white">
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

const stats = [
  { value: "2", suffix: "+", label: "Years Experience" },
  { value: "30", suffix: "+", label: "Projects Completed" },
  { value: "15", suffix: "+", label: "Happy Clients" },
  { value: "100", suffix: "%", label: "Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: Bio */}
          <FadeIn>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-green to-emerald-400 bg-clip-text text-transparent">
                  Atticer
                </span>
              </h2>
              <div className="space-y-4 text-[#999] leading-relaxed">
                <p>
                  Atticer is a freelance design studio based in India with 2+
                  years of experience creating visual identities that stand out.
                  We specialize in brand identity, logo design, and website
                  management for startups and small businesses.
                </p>
                <p>
                  As a mid-level designer and web manager, we bring a perfect
                  blend of creative thinking and technical execution. Every
                  project starts with understanding your story and ends with a
                  brand that tells it beautifully.
                </p>
                <p>
                  We believe great design isn&apos;t just about looking good — it&apos;s
                  about building trust, making connections, and creating
                  experiences people remember.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right: Stats Grid */}
          <FadeIn delay={0.2}>
            <div className="bg-[#0e0e0e] border border-[#1a1a1a] rounded-2xl p-8 md:p-10">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <CountUp value={stat.value} suffix={stat.suffix} />
                    <p className="text-[#666] text-sm mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Decorative line */}
              <div className="mt-8 pt-8 border-t border-[#1a1a1a] flex items-center justify-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
                <span className="text-sm text-[#666]">
                  Available for new projects
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
