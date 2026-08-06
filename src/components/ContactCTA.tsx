"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-green/3 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Ready to build
            <br />
            something {" "}
            <span className="bg-gradient-to-r from-green to-emerald-400 bg-clip-text text-transparent">
              great?
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@atticer.com"
              className="inline-flex items-center gap-2 bg-green hover:bg-green-dark text-black font-medium rounded-full px-8 py-3.5 text-sm transition-all duration-300 btn-glow"
            >
              Start a project
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 border border-[#333] hover:border-green/40 text-white rounded-full px-8 py-3.5 text-sm font-medium transition-all duration-300"
            >
              Download rate card
              <Download className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-8 text-[#666] text-sm">
            Or reach out directly at{" "}
            <a
              href="mailto:hello@atticer.com"
              className="text-green hover:underline transition-colors"
            >
              hello@atticer.com
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
