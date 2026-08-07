"use client";

import Image from "next/image";
import Link from "next/link";
import { Twitter, Instagram, Dribbble } from "lucide-react";
import { getAssetPath } from "@/utils/paths";


const footerLinks = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#111] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Logo + Tagline */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src={getAssetPath("/atticer-logo.png")}
                alt="Atticer logo"
                width={32}
                height={32}
                className="h-7 w-7"
              />
              <span className="text-white font-bold text-xl tracking-tight">
                Atticer
              </span>
            </div>
            <p className="text-[#666] text-sm leading-relaxed max-w-xs">
              Crafting brands and websites that make businesses impossible to
              forget. Based in India.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#666] hover:text-white text-sm transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@atticer.com"
                className="text-[#666] hover:text-green text-sm transition-colors duration-300"
              >
                hello@atticer.com
              </a>
              <div className="flex gap-4 mt-2">
                {/* Twitter/X */}
                <a
                  href="#"
                  className="text-[#666] hover:text-white transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-[18px] h-[18px]" />
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  className="text-[#666] hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-[18px] h-[18px]" />
                </a>
                {/* Dribbble */}
                <a
                  href="#"
                  className="text-[#666] hover:text-white transition-colors duration-300"
                  aria-label="Dribbble"
                >
                  <Dribbble className="w-[18px] h-[18px]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#111] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#444] text-xs">
            © 2025 Atticer. All rights reserved.
          </p>
          <p className="text-[#333] text-xs">
            Designed & developed with passion in India
          </p>
        </div>
      </div>
    </footer>
  );
}
