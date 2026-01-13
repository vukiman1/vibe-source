"use client";

import Link from "next/link";
import { useTranslations } from "@/i18n";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Github,
  Twitter,
  Disc,
  LayoutGrid,
  Users,
  HelpCircle,
  Monitor,
} from "lucide-react";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const t = useTranslations("footer");

  const sections = [
    {
      title: t("sections.marketplace.title"),
      icon: <LayoutGrid className="h-4 w-4" />,
      items: [
        {
          label: t("sections.marketplace.items.templates"),
          href: ROUTES.SOURCES,
        },
        { label: t("sections.marketplace.items.scripts"), href: "#" },
        { label: t("sections.marketplace.items.uiKits"), href: "#" },
        { label: t("sections.marketplace.items.bundles"), href: "#" },
      ],
    },
    {
      title: t("sections.community.title"),
      icon: <Users className="h-4 w-4" />,
      items: [
        { label: t("sections.community.items.discord"), href: "#" },
        { label: t("sections.community.items.contributors"), href: "#" },
        { label: t("sections.community.items.leaderboard"), href: "#" },
        { label: t("sections.community.items.tokenomics"), href: "#" },
      ],
    },
    {
      title: t("sections.support.title"),
      icon: <HelpCircle className="h-4 w-4" />,
      items: [
        { label: t("sections.support.items.documentation"), href: "#" },
        { label: t("sections.support.items.apiStatus"), href: "#" },
        { label: t("sections.support.items.contact"), href: "#" },
        { label: t("sections.support.items.faq"), href: "#" },
      ],
    },
  ];

  return (
    <footer className={cn("mt-20 px-6 pb-20", className)}>
      <div className="max-w-7xl mx-auto bg-(--glass-bg) backdrop-blur-xl border border-(--glass-border) rounded-[40px] p-8 md:p-12 shadow-xl">
        {/* 1. Newsletter Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16 px-4">
          <div className="space-y-6 max-w-xl">
            <div className="flex items-center gap-2 text-(--brand-accent) font-black text-[10px] uppercase tracking-[0.2em]">
              <div className="h-5 w-5 bg-(--brand-primary) rounded-md flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Monitor className="h-3 w-3 text-white" />
              </div>
              SYSTEM UPDATE
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-(--text-primary) tracking-tighter">
                {t("newsletter.title")}
              </h2>
              <p className="text-(--text-secondary) opacity-60 text-md leading-relaxed font-medium max-w-md">
                {t("newsletter.subtitle")}
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto mt-4">
            <div className="space-y-4">
              <div className="flex p-2 bg-(--surface-primary) border border-(--surface-border) rounded-[24px] shadow-sm min-w-0 md:min-w-[480px] focus-within:ring-2 focus-within:ring-(--brand-accent)/20 transition-all">
                <div className="flex items-center px-4 text-(--text-tertiary)">
                  <span className="font-mono text-lg leading-none opacity-50">
                    &gt;
                  </span>
                </div>
                <Input
                  type="email"
                  placeholder={t("newsletter.placeholder")}
                  className="border-0 shadow-none focus-visible:ring-0 bg-transparent text-(--text-secondary) placeholder:text-(--text-tertiary) font-medium text-lg h-12"
                />
                <Button className="bg-(--brand-primary) hover:bg-(--brand-primary-hover) text-white rounded-[18px] px-10 h-12 font-black shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  {t("newsletter.button")}
                </Button>
              </div>
              <p className="text-xs text-(--text-tertiary) font-bold px-4 tracking-wide">
                Join 12,000+ vibe coders.{" "}
                <span className="opacity-50">No spam, just pure signal.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-(--surface-border) mb-16 opacity-50" />

        {/* 2. Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 px-4">
          {/* Logo and About */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 bg-(--brand-accent) rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30">
                <div className="h-6 w-6 border-[2.5px] border-white rounded-lg flex items-center justify-center">
                  <div className="w-2.5 h-0.5 bg-white rounded-full" />
                </div>
              </div>
              <span className="text-2xl font-black text-(--text-primary) tracking-tighter">
                VibeCode
              </span>
            </div>
            <p className="text-(--text-secondary) text-sm leading-relaxed font-bold opacity-80">
              {t("description")}
            </p>
            <div className="flex items-center gap-5 text-(--text-tertiary)">
              <Link
                href="#"
                className="hover:text-(--brand-accent) transition-all hover:scale-110"
              >
                <Disc className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="hover:text-(--brand-accent) transition-all hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="hover:text-(--brand-accent) transition-all hover:scale-110"
              >
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          {sections.map((section) => (
            <div key={section.title} className="space-y-8">
              <h3 className="flex items-center gap-2.5 text-md font-black uppercase">
                {section.icon}
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-(--text-secondary) hover:text-(--brand-accent)  text-[15px] transition-colors tracking-tight"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-(--surface-border) mb-10 opacity-50" />

        {/* 3. Bottom Bar */}
        <div className="flex flex-col text-[10px] md:flex-row items-center gap-6 md:gap-12">
          <p className=" font-black text-(--text-tertiary) uppercase tracking-widest opacity-80">
            &copy; {new Date().getFullYear()} VibeCode Market. {t("rights")}
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className=" font-bold text-(--text-tertiary) hover:text-(--brand-accent) uppercase tracking-widest transition-colors"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/terms"
              className=" font-bold text-(--text-tertiary) hover:text-(--brand-accent) uppercase tracking-widest transition-colors"
            >
              {t("terms")}
            </Link>
            <Link
              href="#"
              className=" font-bold text-(--text-tertiary) hover:text-(--brand-accent) uppercase tracking-widest transition-colors"
            >
              {t("sitemap")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
