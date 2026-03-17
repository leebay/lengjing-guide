/**
 * Home — 棱境平台手机端引导页主页面
 * 
 * Design: "Prismatic Refraction" — 棱镜折射风格
 * - 垂直滚动浏览，每个栏目对应光谱中的一种颜色
 * - 右侧固定进度指示器
 * - 底部固定"前往电脑端"提示条
 * - 交替的左右布局打破居中单调感
 * - 桌面端显示跳转提示
 */

import { useEffect, useState } from "react";
import SectionIndicator from "@/components/SectionIndicator";
import SpectrumDivider from "@/components/SpectrumDivider";
import HeroSection from "@/components/sections/HeroSection";
import CoursesSection from "@/components/sections/CoursesSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import IndustrySection from "@/components/sections/IndustrySection";
import EnterpriseSection from "@/components/sections/EnterpriseSection";
import CTASection from "@/components/sections/CTASection";
import { ExternalLink, Monitor } from "lucide-react";

const SECTION_IDS = ["hero", "courses", "resources", "industry", "enterprise", "cta"];

function DesktopRedirect() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f6ff] via-white to-[#f8faff]">
      {/* Geometric decorations */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-[#0078e0]/10 rotate-45 rounded-sm" />
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#00b4d8]/10 -rotate-12 rounded-sm" />
      <div className="absolute top-40 right-40 w-16 h-16 border border-[#6c5ce7]/10 rotate-12 rounded-sm" />

      <div className="relative z-10 text-center max-w-lg px-8">
        {/* Logo */}
        <div className="w-24 h-24 mx-auto mb-8">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663384561556/GfyRiHPLA62nHv5C9xohw8/lengjing-logo-transparent_c7e34c63.png"
            alt="棱境Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <h1 className="text-3xl font-bold text-[#0a1e3d] mb-3">
          棱境 · 低空教育资源共享平台
        </h1>
        <p className="text-base text-[#0a1e3d]/50 mb-8 leading-relaxed">
          您当前正在使用电脑访问手机端引导页。
          <br />
          请直接访问完整版平台以获得最佳体验。
        </p>

        <a
          href="https://www.learnsence.com"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#0078e0] to-[#00b4d8] shadow-lg shadow-[#0078e0]/25 hover:shadow-xl hover:shadow-[#0078e0]/30 transition-all duration-300 hover:-translate-y-0.5"
        >
          <ExternalLink className="w-5 h-5" />
          前往棱境平台
        </a>

        <p className="mt-6 text-sm text-[#0a1e3d]/30">
          www.learnsence.com
        </p>

        {/* Spectrum line */}
        <div className="mt-12 h-[2px] w-48 mx-auto bg-gradient-to-r from-[#0078e0] via-[#00b4d8] via-[#6c5ce7] via-[#00cec9] to-[#f0a500] rounded-full animate-spectrum" />
      </div>
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [showBottomBar, setShowBottomBar] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    if (isDesktop) return;

    const handleScroll = () => {
      setShowBottomBar(window.scrollY > window.innerHeight * 0.5);

      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  if (isDesktop) {
    return <DesktopRedirect />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Section indicator */}
      <SectionIndicator activeSection={activeSection} />

      {/* Sections */}
      <HeroSection />
      <SpectrumDivider fromColor="#0078e0" toColor="#0078e0" direction="left" />
      <CoursesSection />
      <SpectrumDivider fromColor="#0078e0" toColor="#00b4d8" direction="right" />
      <ResourcesSection />
      <SpectrumDivider fromColor="#00b4d8" toColor="#6c5ce7" direction="left" />
      <IndustrySection />
      <SpectrumDivider fromColor="#6c5ce7" toColor="#00cec9" direction="right" />
      <EnterpriseSection />
      <SpectrumDivider fromColor="#00cec9" toColor="#f0a500" direction="left" />
      <CTASection />

      {/* Bottom floating bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
          showBottomBar
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-md border-t border-[#0078e0]/10 px-4 py-2.5 flex items-center justify-between safe-area-bottom">
          <div className="flex items-center gap-2">
            <Monitor className="w-3.5 h-3.5 text-[#0078e0]" />
            <span className="text-xs text-[#0a1e3d]/60">
              请使用电脑访问以获得最佳体验
            </span>
          </div>
          <a
            href="https://www.learnsence.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-white bg-[#0078e0] active:scale-95 transition-transform"
          >
            访问电脑版
          </a>
        </div>
      </div>
    </div>
  );
}
