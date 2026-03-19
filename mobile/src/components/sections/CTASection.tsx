/**
 * CTASection — 底部引导操作区
 * 光谱色：金色 #f0a500
 * 引导用户前往电脑端
 */

import { useInView } from "@/hooks/useInView";
import { Copy, ExternalLink, Monitor, Check } from "lucide-react";
import { useState } from "react";

const URL = "www.learnsence.com";

export default function CTASection() {
  const { ref, isInView } = useInView(0.1);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = URL;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="cta"
      ref={ref}
      className="relative py-20 pb-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f5f8ff] to-[#edf2ff]" />

      {/* Spectrum line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0078e0] via-[#00b4d8] via-[#6c5ce7] via-[#00cec9] to-[#f0a500] animate-spectrum" />

      {/* Geometric decorations */}
      <div className="absolute bottom-12 right-8 w-20 h-20 border border-[#f0a500]/8 rotate-45 rounded-sm" />
      <div className="absolute top-20 left-6 w-12 h-12 border border-[#0078e0]/8 -rotate-12 rounded-sm" />

      <div className="container relative z-10">
        <div
          className={`flex flex-col items-center text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0078e0] to-[#00b4d8] flex items-center justify-center mb-6 shadow-xl shadow-[#0078e0]/15">
            <Monitor className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-xl font-bold text-[#0a1e3d] mb-2 leading-tight">
            前往电脑端
            <br />
            <span className="text-[#0078e0]">体验完整功能</span>
          </h2>
          <p className="text-[13px] text-[#0a1e3d]/50 max-w-[280px] leading-[1.8] mb-8">
            资源下载、课程编辑、在线视频等高级操作需在电脑端进行，以获得最佳使用体验。
          </p>

          {/* URL display + copy */}
          <div
            className={`w-full max-w-[320px] rounded-2xl bg-white border border-[#0078e0]/8 p-5 shadow-[0_4px_24px_rgba(0,120,224,0.06)] mb-6 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[10px] text-[#0a1e3d]/35 mb-3 tracking-[0.15em] font-medium">
              平台地址
            </p>
            <div className="flex items-center gap-3">
              <span className="flex-1 text-[14px] font-bold text-[#0078e0] tracking-wide">
                {URL}
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[11px] font-semibold text-white transition-all duration-300 active:scale-95"
                style={{
                  backgroundColor: copied ? "#10b981" : "#0078e0",
                  boxShadow: copied
                    ? "0 2px 12px rgba(16,185,129,0.25)"
                    : "0 2px 12px rgba(0,120,224,0.25)",
                }}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    已复制
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    复制
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Open in browser button */}
          <a
            href="https://www.learnsence.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-[14px] font-bold text-white bg-gradient-to-r from-[#0078e0] to-[#00b4d8] shadow-xl shadow-[#0078e0]/20 active:scale-95 transition-all duration-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.35s" }}
          >
            <ExternalLink className="w-4.5 h-4.5" />
            立即访问电脑版
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-16 text-center">
        {/* Mini spectrum */}
        <div className="flex items-center justify-center gap-1 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#0078e0]/40" />
          <div className="w-2 h-2 rounded-full bg-[#00b4d8]/40" />
          <div className="w-2 h-2 rounded-full bg-[#6c5ce7]/40" />
          <div className="w-2 h-2 rounded-full bg-[#00cec9]/40" />
          <div className="w-2 h-2 rounded-full bg-[#f0a500]/40" />
        </div>
        <p className="text-[11px] text-[#0a1e3d]/30 font-medium">
          棱境 · 低空经济职业教育资源共享平台
        </p>
        <p className="text-[10px] text-[#0a1e3d]/20 mt-1">
          &copy; {new Date().getFullYear()} LearnSence. All rights reserved.
        </p>
      </div>
    </section>
  );
}
