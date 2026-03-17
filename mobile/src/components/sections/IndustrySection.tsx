/**
 * IndustrySection — 行业资料库栏目介绍
 * 光谱色：紫色 #6c5ce7
 * 布局：左对齐，图片在上
 */

import FeatureTag from "@/components/FeatureTag";
import { useInView } from "@/hooks/useInView";
import { FileText } from "lucide-react";

const INDUSTRY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663384561556/GfyRiHPLA62nHv5C9xohw8/industry-data-hcr3HxqxGvCyYYxRLnKobd.webp";

const COLOR = "#6c5ce7";

const features = [
  "产研报告",
  "规划纲要",
  "地方政策",
  "行业标准",
  "法律法规",
  "教学标准",
  "职教政策",
  "职业标准",
  "工学一体",
];

export default function IndustrySection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="industry"
      ref={ref}
      className="relative py-14 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#6c5ce7]/[0.02] to-transparent" />

      {/* Diagonal line decoration */}
      <div className="absolute top-8 right-0 w-20 h-[1px] bg-gradient-to-l from-[#6c5ce7]/20 to-transparent" />

      <div className="container relative z-10">
        {/* Section header */}
        <div
          className={`flex items-center gap-3 mb-5 transition-all duration-700 ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
            style={{ backgroundColor: `${COLOR}10`, border: `1px solid ${COLOR}15` }}
          >
            <FileText className="w-4 h-4" style={{ color: COLOR }} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#0a1e3d] leading-tight">行业资料库</h2>
            <p className="text-[10px] font-semibold tracking-[0.15em] mt-0.5" style={{ color: `${COLOR}99` }}>
              INDUSTRY DATABASE
            </p>
          </div>
          <div
            className="ml-auto h-[2px] w-12 rounded-full opacity-60"
            style={{ backgroundColor: COLOR }}
          />
        </div>

        {/* Image card */}
        <div
          className={`relative rounded-2xl overflow-hidden mb-5 shadow-[0_4px_20px_rgba(108,92,231,0.08)] transition-all duration-700 delay-150 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src={INDUSTRY_IMG}
            alt="行业资料库"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#6c5ce7]/15 to-transparent" />
          <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-white/80 backdrop-blur-sm text-[10px] font-semibold" style={{ color: COLOR }}>
            权威资料
          </div>
        </div>

        {/* Description */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[13px] text-[#0a1e3d]/65 leading-[1.9] mb-5">
            实时追踪低空经济产业动态，汇集产研报告、职教政策、行业标准及法律法规等权威资料。帮助教育工作者紧贴行业脉搏，确保教学内容与产业发展同步。
          </p>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-2">
            {features.map((f) => (
              <FeatureTag key={f} label={f} color={COLOR} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
