"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FadeInShared from "@/components/FadeIn";
import { getAssetPath } from "@/utils/paths";


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
    <FadeInShared delay={delay} className={className} y={24}>
      {children}
    </FadeInShared>
  );
}

/* ── Stage data — unique names ── */
const stages = [
  {
    number: "I",
    title: "Unearth",
    subtitle: "We listen before we create",
    description:
      "Every great brand starts with the right questions. We immerse ourselves in your world — your audience, your competitors, your ambitions — to find the creative direction that makes everything click.",
    details: [
      "Deep-dive brand audit & competitor mapping",
      "Audience persona research",
      "Creative brief & visual moodboards",
      "Strategic positioning & tone of voice",
    ],
    accent: "#22c55e",
  },
  {
    number: "II",
    title: "Shape",
    subtitle: "Where ideas become tangible",
    description:
      "This is where the craft lives. We obsess over every curve, colour, and pixel — building identities and experiences that feel inevitable, like they were always meant to exist.",
    details: [
      "Logo concepts & visual identity systems",
      "Typography, palette & design language",
      "UI/UX wireframes & high-fidelity prototypes",
      "Responsive website development",
    ],
    accent: "#f59e0b",
  },
  {
    number: "III",
    title: "Ignite",
    subtitle: "Launch, grow, evolve",
    description:
      "We don't just hand off files and disappear. We launch with you, optimise what needs refining, and stay by your side to evolve your brand as your business scales.",
    details: [
      "Production-ready asset delivery",
      "Website deployment & QA testing",
      "Brand guidelines & documentation",
      "Ongoing support & monthly management",
    ],
    accent: "#3b82f6",
  },
];

/* ── Main component ── */
export default function ApproachContent() {
  const containerRef = useRef(null);

  /* master scroll progress for the entire page */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* forest zoom: 1x → 2.2x as you scroll */
  const forestScale = useTransform(scrollYProgress, [0, 1], [1, 2.2]);
  /* forest slowly shifts up */
  const forestY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  /* overlay darkens then lightens */
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    [0.7, 0.5, 0.4, 0.5, 0.8]
  );

  return (
    <div ref={containerRef} className="relative">
      {/* ═══ FIXED FOREST BACKGROUND ═══ */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ scale: forestScale, y: forestY }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src={getAssetPath("/forest-bg.jpg")}
            alt="Forest background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>

        {/* dark overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black"
        />

      </div>

      {/* ═══ NAVBAR ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-5 bg-gradient-to-b from-black/40 to-transparent">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src={getAssetPath("/atticer-logo.png")}
              alt="Atticer logo"
              width={32}
              height={32}
              className="h-7 w-7 group-hover:opacity-90 transition-opacity duration-300"
              priority
            />
            <span className="text-white font-bold text-xl tracking-tight">
              Atticer
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors">Home</Link>
            <span className="text-sm text-white">Approach</span>
            <Link href="/#work" className="text-sm text-white/50 hover:text-white transition-colors">Work</Link>
            <Link href="/#contact" className="text-sm text-white/50 hover:text-white transition-colors">Contact</Link>
          </div>
          <Link href="/#contact" className="text-sm text-black font-medium bg-green hover:bg-green-dark rounded-full px-5 py-2 transition-all duration-300">
            Hire me
          </Link>
        </div>
      </nav>

      {/* ═══ SCROLLABLE CONTENT ═══ */}
      <div className="relative z-10">

        {/* ── HERO ── */}
        <section className="min-h-screen flex flex-col justify-end pb-20 md:pb-28 px-6">
          <div className="max-w-5xl mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-green text-xs font-medium tracking-[0.3em] uppercase mb-8"
            >
              Our Approach
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[clamp(28px,5.5vw,68px)] text-white/90 leading-[1.2] tracking-tight max-w-4xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              From first spark to lasting legacy, we walk with you through every stage of{" "}
              <em className="text-white not-italic font-normal">creation</em>.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="mt-12 flex items-center gap-3"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2.5"
              >
                <div className="w-0.5 h-2 rounded-full bg-green/60" />
              </motion.div>
              <span className="text-white/30 text-[10px] tracking-[0.25em] uppercase">
                Scroll to explore
              </span>
            </motion.div>
          </div>
        </section>

        {/* ── STAGES ── */}
        {stages.map((stage, i) => (
          <section key={stage.number} className="min-h-screen flex items-end pb-16 md:pb-24 px-6">
            <div className="max-w-7xl mx-auto w-full">

              {/* Stage number + line */}
              <FadeIn>
                <div className="flex items-center gap-5 mb-10">
                  <span
                    className="text-[clamp(60px,12vw,140px)] font-thin leading-none tracking-tighter"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: `1px ${stage.accent}44`,
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    {stage.number}
                  </span>
                  <div>
                    <div
                      className="w-16 h-px mb-3"
                      style={{ background: `${stage.accent}66` }}
                    />
                    <span className="text-white/40 text-xs tracking-[0.2em] uppercase">
                      {stage.subtitle}
                    </span>
                  </div>
                </div>
              </FadeIn>

              <div className="grid md:grid-cols-12 gap-8 md:gap-16">
                {/* Left — Title + Description */}
                <div className="md:col-span-5">
                  <FadeIn delay={0.1}>
                    <h2
                      className="text-[clamp(40px,7vw,84px)] text-white leading-[1.05] tracking-tight mb-6"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                    >
                      {stage.title}
                      <span style={{ color: stage.accent }}>.</span>
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-md">
                      {stage.description}
                    </p>
                  </FadeIn>
                </div>

                {/* Right — Detail list */}
                <div className="md:col-span-5 md:col-start-8">
                  <div className="space-y-5">
                    {stage.details.map((detail, j) => (
                      <FadeIn key={detail} delay={0.15 + j * 0.08}>
                        <div className="flex items-start gap-4 group cursor-default">
                          <div
                            className="w-px h-8 shrink-0 mt-1 transition-all duration-500 group-hover:h-12"
                            style={{ background: `${stage.accent}55` }}
                          />
                          <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                            {detail}
                          </p>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </section>
        ))}

        {/* ── CTA ── */}
        <section className="min-h-[70vh] flex items-center justify-center px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <p className="text-green text-xs tracking-[0.3em] uppercase mb-6">
                Your next chapter
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h2
                className="text-[clamp(28px,4.5vw,56px)] text-white leading-[1.2] tracking-tight mb-10"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Ready to bring your vision to life? Let&apos;s shape it together.
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-green hover:bg-green-dark text-black font-medium rounded-full px-8 py-3.5 text-sm transition-all duration-300 btn-glow"
                >
                  Start a project →
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 border border-white/15 hover:border-green/40 text-white rounded-full px-8 py-3.5 text-sm font-medium transition-all duration-300"
                >
                  View our work ↗
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="mt-8 text-white/30 text-sm">
                or reach out at{" "}
                <a href="mailto:hello@atticer.com" className="text-green hover:underline">
                  hello@atticer.com
                </a>
              </p>
            </FadeIn>
          </div>
        </section>
      </div>
    </div>
  );
}
