"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FadeInShared from "@/components/FadeIn";

/* ── Fade helper ── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <FadeInShared delay={delay} className={className} y={20}>
      {children}
    </FadeInShared>
  );
}

/* ── SVG Icons ── */
const FigmaIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 2H8.5a3.5 3.5 0 0 0 0 7H12V2Z" fill="#F24E1E" />
    <path d="M12 9H8.5a3.5 3.5 0 0 0 0 7H12V9Z" fill="#A259FF" />
    <path d="M12 16h-3.5a3.5 3.5 0 1 0 3.5 3.5V16Z" fill="#0ACF83" />
    <path d="M19 5.5A3.5 3.5 0 0 0 15.5 2H12v7h3.5A3.5 3.5 0 0 0 19 5.5Z" fill="#FF7262" />
    <path d="M19 12.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Z" fill="#1ABCFE" />
  </svg>
);

const NotionIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.29 2.14c-.42-.373-.979-.7-2.057-.607l-12.77.933c-.466.047-.56.28-.374.466l1.37 1.276Zm.793 3.08v13.905c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.934-.56.934-1.166V6.382c0-.606-.233-.933-.747-.886l-15.177.886c-.56.047-.747.327-.747.886v.02Zm14.337.42c.094.42 0 .84-.42.886l-.7.14v10.264c-.607.327-1.167.514-1.634.514-.747 0-.934-.234-1.494-.934l-4.577-7.186v6.952l1.447.327s0 .84-1.167.84l-3.22.187c-.093-.187 0-.653.327-.747l.84-.22V8.044L7.834 7.86c-.094-.42.14-1.026.793-1.073l3.454-.233 4.763 7.279v-6.44l-1.214-.14c-.093-.513.28-.886.747-.933l3.212-.187Z" />
  </svg>
);

const SlackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52ZM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313Z" fill="#E01E5A" />
    <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834ZM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312Z" fill="#36C5F0" />
    <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834ZM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312Z" fill="#2EB67D" />
    <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52ZM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313Z" fill="#ECB22E" />
  </svg>
);

const AdobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF0000">
    <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425h-3.71Zm-6.054-.001H1v-19.2l6.912 19.2Zm10.176 0h-3.088L8.088 3.421H23v19.203h-.912v-19.2l-5 19.2Z" />
  </svg>
);

const DriveIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M7.71 3.5L1.15 15l2.79 4.84L10.5 8.34 7.71 3.5Z" fill="#0066DA" />
    <path d="M16.29 3.5H7.71L14.27 15H22.85L16.29 3.5Z" fill="#00AC47" />
    <path d="M1.15 15L3.94 19.84H20.06L22.85 15H14.27L7.71 3.5L1.15 15Z" fill="#EA4335" />
  </svg>
);

const AtticerCenterIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
    <path d="M12 2L2 7l10 5 10-5-10-5Z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

/* ── Workflow labels ── */
const leftLabels = [
  { icon: "🎨", label: "Brand Identity" },
  { icon: "🖥", label: "Web Development" },
  { icon: "📐", label: "UI/UX Design" },
];

/* ── Tool node positions (relative %) ── */
const toolNodes = [
  { icon: <FigmaIcon />, x: 62, y: 12, label: "Figma", delay: 0.3 },
  { icon: <NotionIcon />, x: 52, y: 18, label: "Notion", delay: 0.4 },
  { icon: <SlackIcon />, x: 72, y: 50, label: "Slack", delay: 0.5 },
  { icon: <AdobeIcon />, x: 85, y: 20, label: "Adobe", delay: 0.6 },
  { icon: <DriveIcon />, x: 62, y: 78, label: "Drive", delay: 0.7 },
];

export default function ToolsIntegration() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#050505] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="mb-4">
          <div className="flex items-center gap-2.5 mb-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
            <span className="text-white text-sm font-medium">Seamless Workflow</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="mb-14">
          <p className="text-[#777] text-sm md:text-base max-w-xl">
            We plug directly into your existing tools and processes — no friction, no learning curve. Your brand, designed and delivered where you already work.
          </p>
        </FadeIn>

        {/* Integration diagram */}
        <FadeIn delay={0.2}>
          <div
            ref={ref}
            className="relative w-full rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] overflow-hidden"
            style={{ minHeight: 420 }}
          >
            {/* Subtle grid background */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Animated scan line */}
            <motion.div
              animate={inView ? { x: ["-100%", "200%"] } : {}}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green/30 to-transparent z-10 pointer-events-none"
            />

            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-stretch gap-8 md:gap-0">
              {/* LEFT — Workflow labels */}
              <div className="flex flex-col justify-center gap-5 md:w-[28%] shrink-0">
                {leftLabels.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                    className="flex items-center gap-3 group"
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="text-[#ccc] text-sm font-medium group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                    {/* connecting line */}
                    <div className="flex-1 h-px bg-gradient-to-r from-[#333] to-transparent ml-2 min-w-[40px]" />
                  </motion.div>
                ))}
              </div>

              {/* CENTER — Hub node */}
              <div className="flex items-center justify-center md:w-[16%] shrink-0">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 200 }}
                  className="relative"
                >
                  {/* Glow ring */}
                  <div className="absolute -inset-4 rounded-2xl bg-green/5 animate-pulse" />
                  <div className="absolute -inset-2 rounded-xl border border-green/10" />

                  <div className="relative w-14 h-14 bg-[#151515] border border-[#2a2a2a] rounded-xl flex items-center justify-center shadow-lg shadow-black/50">
                    <AtticerCenterIcon />
                  </div>
                </motion.div>
              </div>

              {/* RIGHT — Tool nodes diagram */}
              <div className="relative flex-1 min-h-[300px]">
                {/* Connection lines (SVG) */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  preserveAspectRatio="none"
                >
                  {toolNodes.map((node, i) => (
                    <motion.line
                      key={`line-${i}`}
                      x1="0%"
                      y1="50%"
                      x2={`${node.x}%`}
                      y2={`${node.y}%`}
                      stroke="#22c55e"
                      strokeWidth="1"
                      strokeOpacity="0.12"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={inView ? { pathLength: 1 } : {}}
                      transition={{ delay: node.delay, duration: 0.8 }}
                    />
                  ))}
                </svg>

                {/* Tool icons */}
                {toolNodes.map((node) => (
                  <motion.div
                    key={node.label}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      delay: node.delay + 0.2,
                      duration: 0.4,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="absolute group"
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="w-11 h-11 bg-[#151515] border border-[#2a2a2a] rounded-lg flex items-center justify-center hover:border-green/30 hover:bg-[#1a1a1a] transition-all duration-300 shadow-lg shadow-black/30 cursor-default">
                      {node.icon}
                    </div>
                    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-[#555] group-hover:text-white/70 transition-colors whitespace-nowrap">
                      {node.label}
                    </span>
                  </motion.div>
                ))}

                {/* "Connected" badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute"
                  style={{ left: "40%", top: "48%", transform: "translate(-50%, -50%)" }}
                >
                  <div className="px-3 py-1 rounded-full bg-green/10 border border-green/20 text-green text-[10px] font-medium tracking-wide">
                    Connected
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-green/20 to-transparent" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
