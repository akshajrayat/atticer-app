"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

/* ── Project data ── */
const projects = [
  {
    id: 1,
    name: "GAP Logo Redesign",
    year: "2025",
    description:
      "A bold geometric logo concept for GAP — merging clean shapes with a playful crown motif. Built with interlocking circles, triangles, and rounded forms on a deep emerald backdrop.",
    tags: ["Logo", "Branding"],
    image: "/project-gap-logo.png",
    bg: "#0d3d2e",
  },
  {
    id: 2,
    name: "Hack With UP",
    year: "2025",
    description:
      "Event poster design for a 30-hour Agentic AI hackathon hosted by Chandigarh University & Student Innovation Cell. Illustrated Lucknow landmarks with a rich cultural palette and modern tech feel.",
    tags: ["Graphic Design", "Event"],
    image: "/project-hackwith-up.jpg",
    bg: "#f5f0eb",
  },
  {
    id: 3,
    name: "IEDC Welcome Mailer",
    year: "2025",
    description:
      "A sleek digital welcome mailer for the IEDC Revolution — featuring a glowing envelope concept with neon-blue gradients and pixel-style typography. Dark, futuristic, and community-driven.",
    tags: ["Graphic Design", "Digital"],
    image: "/project-iedc-welcome.jpg",
    bg: "#0a1628",
  },
  {
    id: 4,
    name: "IEDC Logo",
    year: "2025",
    description:
      "A clean, modular logotype for the Innovation & Entrepreneurship Development Cell. Bold typographic composition with stacked letterforms — minimal, modern, and instantly recognizable.",
    tags: ["Logo", "Branding"],
    image: "/logo-iedc.png",
    bg: "#1a1a1a",
  },
  {
    id: 5,
    name: "TFR — The Founders Room",
    year: "2026",
    description:
      "Event branding and poster design for The Founders Room — an exclusive startup speaker series by edLernX. Night-sky themed artwork with premium editorial feel, shown here as a street billboard mockup.",
    tags: ["Graphic Design", "Event", "Mockup"],
    image: "/project-tfr-mockup.jpg",
    bg: "#0a0a0a",
    cover: true,
  },
  {
    id: 6,
    name: "Cube Founders Space",
    year: "2025",
    description:
      "Logo and brand identity for Cube Founders Space — a coworking hub for startup founders. Geometric icon with clean sans-serif type, showcased on a shipping container mockup.",
    tags: ["Logo", "Branding", "Mockup"],
    image: "/logo-cube.png",
    bg: "#1a1a1a",
  },
];

/* ── Single project card ── */
function ProjectCard({
  project,
  index,
  isReversed,
}: {
  project: (typeof projects)[0];
  index: number;
  isReversed: boolean;
}) {
  /* Determine if the image is light so we use dark text for the hover label */
  const isLightBg = project.bg === "#ffffff" || project.bg === "#f5f0eb";

  return (
    <FadeIn
      delay={0.1}
      className={`grid md:grid-cols-12 gap-6 md:gap-8 items-stretch ${
        index > 0 ? "mt-8 md:mt-12" : ""
      }`}
    >
      {/* Text card */}
      <div
        className={`md:col-span-5 ${
          isReversed ? "md:col-start-8 md:order-2" : "md:order-1"
        }`}
      >
        <div className="h-full bg-[#0e0e0e] rounded-2xl border border-[#1a1a1a] p-8 md:p-10 flex flex-col justify-between group hover:border-[#2a2a2a] transition-colors duration-500">
          <div>
            <span className="text-[#555] text-xs font-mono tracking-wider mb-5 block">
              ( {project.year} )
            </span>

            <h3
              className="text-2xl md:text-3xl text-white leading-tight mb-5"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {project.name}
            </h3>

            <p className="text-[#777] text-sm leading-relaxed mb-8">
              {project.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] text-[#666] uppercase tracking-wider border border-[#222] rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button className="w-9 h-9 rounded-full border border-[#222] flex items-center justify-center group-hover:border-green/40 group-hover:bg-green/5 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 text-[#555] group-hover:text-green transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Image card — object-contain to show full image */}
      <div
        className={`md:col-span-7 ${
          isReversed ? "md:order-1" : "md:order-2"
        }`}
      >
        <div
          className="relative h-full min-h-[320px] md:min-h-[450px] rounded-2xl overflow-hidden border border-[#1a1a1a] group cursor-pointer flex items-center justify-center"
          style={{ backgroundColor: project.bg }}
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            className={`transition-transform duration-700 group-hover:scale-105 ${
              "cover" in project && project.cover
                ? "object-cover"
                : "object-contain p-4"
            }`}
            sizes="(max-width: 768px) 100vw, 60vw"
          />

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Hover label */}
          <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-10">
            <span
              className={`text-xs font-medium backdrop-blur-md rounded-full px-4 py-2 border ${
                isLightBg
                  ? "text-black bg-white/70 border-black/10"
                  : "text-white bg-black/60 border-white/10"
              }`}
            >
              View project →
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

/* ── Section heading ── */
function SectionHeading() {
  return (
    <FadeIn className="mb-16 md:mb-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <span className="text-green text-xs font-mono tracking-widest uppercase mb-4 block">
            Selected Work
          </span>
          <h2
            className="text-4xl md:text-6xl text-white leading-[1.1] tracking-tight"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Projects &<br />
            <span className="text-[#555]">Logo Designs</span>
          </h2>
        </div>
        <p className="text-[#666] text-sm leading-relaxed max-w-sm md:text-right">
          A curated collection of graphic design, logo work, and event branding
          — each crafted with intention and attention to detail.
        </p>
      </div>
    </FadeIn>
  );
}

/* ── Main export ── */
export default function PortfolioGrid() {
  return (
    <section id="work" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading />

        {/* Project cards */}
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            isReversed={i % 2 !== 0}
          />
        ))}

        {/* Bottom CTA */}
        <FadeIn delay={0.2} className="mt-20 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 text-[#555] hover:text-white text-sm tracking-wider uppercase transition-colors duration-300 group"
          >
            <span className="w-8 h-px bg-[#333] group-hover:bg-green group-hover:w-12 transition-all duration-300" />
            Have a project in mind? Let&apos;s talk
            <span className="w-8 h-px bg-[#333] group-hover:bg-green group-hover:w-12 transition-all duration-300" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
