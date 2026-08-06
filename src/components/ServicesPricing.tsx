"use client";

import { Palette, Monitor, Instagram } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    icon: <Palette className="w-7 h-7 text-green" />,
    title: "Brand Identity",
    description: "Complete brand design from logo to full visual guidelines.",
    price: "from ₹5,000",
    unit: "per project",
    color: "#22c55e",
    bgClass: "bg-green/5 border-green/10",
  },
  {
    icon: <Monitor className="w-7 h-7 text-blue-500" />,
    title: "Website Management",
    description: "Monthly updates, fixes and optimisation for your site.",
    price: "₹8,000",
    unit: "/month",
    color: "#3b82f6",
    bgClass: "bg-blue-500/5 border-blue-500/10",
  },
  {
    icon: <Instagram className="w-7 h-7 text-purple-500" />,
    title: "Brand Collateral",
    description: "Business cards, social templates, and print materials.",
    price: "from ₹1,500",
    unit: "per item",
    color: "#a855f7",
    bgClass: "bg-purple-500/5 border-purple-500/10",
  },
];

export default function ServicesPricing() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Services &{" "}
            <span className="bg-gradient-to-r from-green to-emerald-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="mt-4 text-[#999] text-base md:text-lg max-w-lg mx-auto">
            Transparent pricing, no surprises. Every project gets the same level
            of dedication.
          </p>
        </FadeIn>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6" id="pricing">
          {services.map((svc, i) => (
            <FadeIn key={svc.title} delay={i * 0.1}>
              <div className="bg-[#0e0e0e] border border-[#1a1a1a] rounded-2xl p-8 card-hover group h-full flex flex-col">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${svc.bgClass} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {svc.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {svc.title}
                </h3>
                <p className="text-[#999] text-sm mb-8 flex-1">
                  {svc.description}
                </p>

                {/* Price */}
                <div className="border-t border-[#1a1a1a] pt-6">
                  <span
                    className="text-2xl font-bold"
                    style={{ color: svc.color }}
                  >
                    {svc.price}
                  </span>
                  <span className="text-[#666] text-sm ml-1">{svc.unit}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
