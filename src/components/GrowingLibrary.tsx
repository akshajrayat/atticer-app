"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── floating brand / tool icons ── */
const floatingIcons = [
  {
    // Figma-like
    svg: (
      <svg viewBox="0 0 38 38" fill="none" className="w-full h-full">
        <rect width="38" height="38" rx="10" fill="#1a1a1a" />
        <circle cx="15" cy="13" r="4" fill="#F24E1E" />
        <circle cx="23" cy="13" r="4" fill="#A259FF" />
        <circle cx="15" cy="21" r="4" fill="#0ACF83" />
        <circle cx="23" cy="21" r="4" fill="#1ABCFE" />
        <circle cx="15" cy="29" r="4" fill="#FF7262" />
      </svg>
    ),
    size: 56,
    top: "8%",
    left: "8%",
  },
  {
    // Pen tool
    svg: (
      <svg viewBox="0 0 38 38" fill="none" className="w-full h-full">
        <rect width="38" height="38" rx="10" fill="#22c55e" />
        <path
          d="M19 10l-6 14h12L19 10z"
          stroke="#000"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="19" cy="10" r="2" fill="#000" />
        <circle cx="13" cy="24" r="2" fill="#000" />
        <circle cx="25" cy="24" r="2" fill="#000" />
      </svg>
    ),
    size: 48,
    top: "5%",
    left: "42%",
  },
  {
    // Color palette
    svg: (
      <svg viewBox="0 0 38 38" fill="none" className="w-full h-full">
        <rect width="38" height="38" rx="10" fill="#a855f7" />
        <circle cx="14" cy="15" r="3" fill="#fff" />
        <circle cx="24" cy="15" r="3" fill="#fbbf24" />
        <circle cx="14" cy="24" r="3" fill="#22c55e" />
        <circle cx="24" cy="24" r="3" fill="#f43f5e" />
      </svg>
    ),
    size: 52,
    top: "15%",
    right: "6%",
    left: "auto",
  },
  {
    // Layers icon
    svg: (
      <svg viewBox="0 0 38 38" fill="none" className="w-full h-full">
        <rect width="38" height="38" rx="10" fill="#3b82f6" />
        <rect x="10" y="10" width="12" height="12" rx="2" fill="#fff" opacity="0.4" />
        <rect x="16" y="16" width="12" height="12" rx="2" fill="#fff" opacity="0.7" />
      </svg>
    ),
    size: 44,
    top: "55%",
    left: "5%",
  },
  {
    // Typography A
    svg: (
      <svg viewBox="0 0 38 38" fill="none" className="w-full h-full">
        <rect width="38" height="38" rx="10" fill="#f59e0b" />
        <text
          x="19"
          y="26"
          textAnchor="middle"
          fill="#000"
          fontSize="20"
          fontWeight="800"
          fontFamily="system-ui"
        >
          A
        </text>
      </svg>
    ),
    size: 46,
    bottom: "10%",
    left: "15%",
    top: "auto",
  },
  {
    // Grid icon
    svg: (
      <svg viewBox="0 0 38 38" fill="none" className="w-full h-full">
        <rect width="38" height="38" rx="10" fill="#f43f5e" />
        <rect x="10" y="10" width="7" height="7" rx="1" fill="#fff" />
        <rect x="21" y="10" width="7" height="7" rx="1" fill="#fff" />
        <rect x="10" y="21" width="7" height="7" rx="1" fill="#fff" />
        <rect x="21" y="21" width="7" height="7" rx="1" fill="#fff" />
      </svg>
    ),
    size: 50,
    top: "50%",
    right: "8%",
    left: "auto",
  },
  {
    // Star/sparkle
    svg: (
      <svg viewBox="0 0 38 38" fill="none" className="w-full h-full">
        <rect width="38" height="38" rx="10" fill="#1a1a1a" />
        <path
          d="M19 8l2.5 7.5H29l-6 4.5 2.5 7.5L19 23l-6.5 4.5L15 20l-6-4.5h7.5L19 8z"
          fill="#22c55e"
        />
      </svg>
    ),
    size: 42,
    bottom: "8%",
    right: "18%",
    top: "auto",
    left: "auto",
  },
  {
    // Cursor icon
    svg: (
      <svg viewBox="0 0 38 38" fill="none" className="w-full h-full">
        <rect width="38" height="38" rx="10" fill="#0e0e0e" stroke="#333" strokeWidth="1" />
        <path
          d="M14 12l10 7-5 1-2 5-3-13z"
          fill="#22c55e"
        />
      </svg>
    ),
    size: 40,
    top: "35%",
    left: "18%",
  },
];

/* ── main stat lines ── */
const stats = [
  { number: "30+", label: "projects" },
  { number: "15+", label: "happy clients" },
  { number: "2+", label: "years of craft" },
];

export default function GrowingLibrary() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-40 bg-[#fafafa] overflow-hidden"
    >
      {/* ── floating icons ── */}
      {floatingIcons.map((icon, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            inView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.5 }
          }
          transition={{
            duration: 0.6,
            delay: 0.2 + i * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute hidden md:block"
          style={{
            width: icon.size,
            height: icon.size,
            top: icon.top,
            left: icon.left,
            right: (icon as Record<string, unknown>).right as string | undefined,
            bottom: (icon as Record<string, unknown>).bottom as string | undefined,
          }}
        >
          <motion.div
            animate={{
              y: [0, -8 + i * 2, 0],
              rotate: [0, i % 2 === 0 ? 3 : -3, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + i * 0.5,
              ease: "easeInOut",
            }}
            className="w-full h-full rounded-xl shadow-lg"
          >
            {icon.svg}
          </motion.div>
        </motion.div>
      ))}

      {/* ── center content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#666] text-base md:text-lg mb-2"
        >
          A growing portfolio of
        </motion.p>

        <div className="space-y-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={
                inView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex items-center justify-center gap-3"
            >
              <span className="text-[clamp(48px,10vw,96px)] font-black text-[#0a0a0a] leading-[1.15] tracking-tight">
                {stat.number}
              </span>
              <span className="text-[clamp(48px,10vw,96px)] font-black text-[#0a0a0a] leading-[1.15] tracking-tight">
                {stat.label}
              </span>
              {/* inline mini icon on first stat */}
              {i === 0 && (
                <span className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-[#f0f0f0] rounded-xl border border-[#e0e0e0] ml-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                  </svg>
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
