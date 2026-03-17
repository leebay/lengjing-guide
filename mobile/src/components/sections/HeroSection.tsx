/**
 * HeroSection — 首屏欢迎页
 * 棱镜折射风格：Banner图 + 棱境Logo + 手机端提示
 * 
 * Visual: Banner image at top (center-cropped), logo, brand info,
 * and a subtle gradient that transitions into the first content section.
 */

import { ChevronDown, Monitor } from "lucide-react";

const LOGO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663384561556/GfyRiHPLA62nHv5C9xohw8/lengjing-logo_072263b9.jpg";

const BANNER_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663384561556/GfyRiHPLA62nHv5C9xohw8/hero-banner_e41dedd0.png";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8f1ff] via-[#f5f9ff] to-white" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#0078e0 1px, transparent 1px), linear-gradient(90deg, #0078e0 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Geometric decorations */}
      <div className="absolute top-16 left-5 w-16 h-16 border border-[#0078e0]/8 rotate-45 rounded-sm animate-pulse-glow" />
      <div className="absolute top-28 right-10 w-10 h-10 border border-[#00b4d8]/12 rotate-12 rounded-sm" />
      <div className="absolute bottom-36 left-8 w-14 h-14 border border-[#6c5ce7]/8 -rotate-12 rounded-sm animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-52 right-6 w-8 h-8 bg-[#f0a500]/5 rotate-45 rounded-sm" />

      {/* Spectrum light rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#0078e0]/10 to-transparent" style={{ transform: "rotate(-15deg)", top: "30%" }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#00b4d8]/8 to-transparent" style={{ transform: "rotate(-12deg)", top: "35%" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center flex-1 justify-center">
        {/* Banner image — center cropped, showing middle portion */}
        <div className="w-full mb-6 overflow-hidden rounded-b-3xl shadow-[0_4px_24px_rgba(0,120,224,0.1)]" style={{ maxHeight: "200px" }}>
          <img
            src={BANNER_IMG}
            alt="棱境平台 Banner"
            className="w-full h-[200px] object-cover object-center"
          />
        </div>

        <div className="px-6">
          {/* Logo */}
          <div className="w-20 h-20 mx-auto mb-4">
            <img
              src={LOGO_IMG}
              alt="棱境Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Brand badge */}
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest text-[#0078e0] bg-[#0078e0]/[0.07] border border-[#0078e0]/15 uppercase">
              低空经济职业教育
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[2rem] font-bold tracking-tight text-[#0a1e3d] mb-2 leading-tight">
            棱境
          </h1>
          <p className="text-[15px] font-medium text-[#0a1e3d]/65 mb-2">
            低空教育资源共享平台
          </p>

          {/* Spectrum underline */}
          <div className="w-24 h-[2px] mx-auto bg-gradient-to-r from-[#0078e0] via-[#00b4d8] via-[#6c5ce7] to-[#00cec9] rounded-full mb-5 animate-spectrum" />

          <p className="text-[13px] text-[#0a1e3d]/45 max-w-[300px] mx-auto leading-[1.8] mb-8">
            深耕低空经济职业教育领域，为职业院校提供专业规划、课程体系、实训基地、师资培训及竞赛认证的全链路解决方案
          </p>

          {/* Mobile notice card */}
          <div className="w-full max-w-[320px] mx-auto rounded-2xl bg-white/70 backdrop-blur-md border border-[#0078e0]/8 p-5 shadow-[0_4px_24px_rgba(0,120,224,0.06)] mb-10">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#0078e0]/[0.08] flex items-center justify-center">
                <Monitor className="w-3.5 h-3.5 text-[#0078e0]" />
              </div>
              <span className="text-[13px] font-semibold text-[#0a1e3d]">
                温馨提示
              </span>
            </div>
            <p className="text-[12px] text-[#0a1e3d]/55 leading-[1.8]">
              本平台为电脑端设计，手机端仅供浏览平台介绍。请使用电脑访问
              <span className="font-semibold text-[#0078e0]"> www.learnsence.com </span>
              以获得完整的交互体验。
            </p>
          </div>

          {/* Scroll hint */}
          <div className="flex flex-col items-center gap-1.5 animate-bounce">
            <span className="text-[10px] text-[#0a1e3d]/25 tracking-[0.2em] font-medium">
              向下滑动了解更多
            </span>
            <ChevronDown className="w-4 h-4 text-[#0078e0]/30" />
          </div>
        </div>
      </div>

      {/* Bottom spectrum line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0078e0]/20 to-transparent" />
    </section>
  );
}
