"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const brandFeatures = [
  "Logo design with multiple concepts",
  "Colour palette & typography guide",
  "Business card & letterhead design",
  "Print-ready files in all formats",
];

const webDevFeatures = [
  "Custom-designed responsive website",
  "Modern tech stack (Next.js / React)",
  "SEO optimised & blazing fast",
  "CMS integration & admin panel",
  "Up to 5 pages included",
];

const webManageFeatures = [
  "Monthly content & layout updates",
  "Bug fixes & performance checks",
  "Minor new features every month",
  "Up to 12 hrs of work included",
];

export default function ChooseProject() {
  return (
    <section className="section-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#050505]">
            Choose Your{" "}
            <span className="text-green">Project</span>
          </h2>
          <p className="mt-4 text-[#666] text-base md:text-lg max-w-xl mx-auto">
            Whether you need a brand built from scratch, a full website, or
            ongoing management — Atticer has you covered.
          </p>
        </FadeIn>

        {/* Cards grid — 3 columns */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 — Brand Identity */}
          <FadeIn delay={0.1}>
            <div className="relative bg-[#0e0e0e] rounded-2xl p-8 md:p-10 card-hover overflow-hidden min-h-[520px] flex flex-col">
              {/* Floating mockup visual */}
              <div className="absolute top-6 right-6 w-28 h-36 opacity-20 pointer-events-none">
                <div className="relative w-full h-full">
                  <div className="absolute top-0 right-0 w-20 h-28 bg-gradient-to-br from-green/30 to-green/5 rounded-xl border border-green/10" />
                  <div className="absolute top-3 right-3 w-20 h-28 bg-gradient-to-br from-green/20 to-transparent rounded-xl border border-green/5" />
                </div>
              </div>

              <span className="inline-block text-xs text-green/80 bg-green/10 border border-green/10 rounded-full px-3 py-1 mb-6 w-fit">
                For startups & small businesses
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Brand Identity
              </h3>
              <p className="text-[#999] text-sm mb-8">
                Get a brand that looks professional from day one.
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {brandFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-[#ccc]">
                    <span className="text-green font-bold text-lg leading-none mt-0.5">
                      +
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-green hover:bg-green-dark text-black font-medium rounded-full px-6 py-3 text-sm transition-all duration-300 w-fit"
              >
                Start a project
                <span>→</span>
              </Link>
            </div>
          </FadeIn>

          {/* Card 2 — Website Development (PREMIUM) */}
          <FadeIn delay={0.15}>
            <div className="relative bg-[#0e0e0e] rounded-2xl p-8 md:p-10 card-hover overflow-hidden min-h-[520px] flex flex-col border border-green/20">
              {/* Popular badge */}
              <div className="absolute -top-px left-1/2 -translate-x-1/2">
                <div className="bg-green text-black text-xs font-bold px-4 py-1 rounded-b-lg">
                  MOST POPULAR
                </div>
              </div>

              {/* Floating browser mockup */}
              <div className="absolute top-6 right-6 w-28 h-20 opacity-20 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-blue-500/5 rounded-lg border border-blue-500/10 p-2">
                  <div className="flex gap-1 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green/50" />
                  </div>
                  <div className="space-y-1">
                    <div className="w-full h-1 bg-white/10 rounded" />
                    <div className="w-3/4 h-1 bg-white/10 rounded" />
                    <div className="w-1/2 h-1 bg-white/10 rounded" />
                  </div>
                </div>
              </div>

              <span className="inline-block text-xs text-blue-400/80 bg-blue-500/10 border border-blue-500/10 rounded-full px-3 py-1 mb-6 mt-4 w-fit">
                For businesses ready to launch
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Website Development
              </h3>
              <p className="text-[#999] text-sm mb-8">
                A custom website built to convert visitors into customers.
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {webDevFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-[#ccc]">
                    <span className="text-green font-bold text-lg leading-none mt-0.5">
                      +
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-green hover:bg-green-dark text-black font-medium rounded-full px-6 py-3 text-sm transition-all duration-300 w-fit btn-glow"
              >
                Get a quote
                <span>→</span>
              </Link>
            </div>
          </FadeIn>

          {/* Card 3 — Website Management */}
          <FadeIn delay={0.2}>
            <div className="relative bg-[#0e0e0e] rounded-2xl p-8 md:p-10 card-hover overflow-hidden min-h-[520px] flex flex-col">
              {/* Price badge */}
              <div className="absolute top-6 right-6 badge-shimmer text-green text-sm font-bold rounded-full px-4 py-1.5 border border-green/20">
                ₹8K/mo
              </div>

              <span className="inline-block text-xs text-purple-400/80 bg-purple-500/10 border border-purple-500/10 rounded-full px-3 py-1 mb-6 w-fit">
                For growing businesses
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Website Management
              </h3>
              <p className="text-[#999] text-sm mb-8">
                Keep your website fast, updated and always running.
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {webManageFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-[#ccc]">
                    <span className="text-green font-bold text-lg leading-none mt-0.5">
                      +
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 border border-[#333] hover:border-green/40 text-white rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 w-fit"
              >
                Learn more
                <span>→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
