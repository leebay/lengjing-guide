/**
 * EnterpriseSection — 教材栏目介绍
 * 光谱色：绿色 #00cec9
 * 布局：右对齐，图片在下
 */

import { useInView } from "@/hooks/useInView";
import { BookMarked } from "lucide-react";

const ENTERPRISE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663384561556/GfyRiHPLA62nHv5C9xohw8/school-enterprise-9o6iVkUTLCwL89wy78jsCu.webp";

const COLOR = "#00cec9";

export default function EnterpriseSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="enterprise"
      ref={ref}
      className="relative py-14 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-[#00cec9]/[0.02] to-transparent" />

      {/* Diagonal line decoration */}
      <div className="absolute top-8 left-0 w-20 h-[1px] bg-gradient-to-r from-[#00cec9]/20 to-transparent" />

      <div className="container relative z-10">
        {/* Section header — right aligned */}
        <div
          className={`flex items-center gap-3 mb-5 transition-all duration-700 ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div
            className="h-[2px] w-12 rounded-full opacity-60"
            style={{ backgroundColor: COLOR }}
          />
          <div className="ml-auto text-right">
            <h2 className="text-lg font-bold text-[#0a1e3d] leading-tight">教材</h2>
            <p className="text-[10px] font-semibold tracking-[0.15em] mt-0.5" style={{ color: `${COLOR}99` }}>
              TEXTBOOKS
            </p>
          </div>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
            style={{ backgroundColor: `${COLOR}10`, border: `1px solid ${COLOR}15` }}
          >
            <BookMarked className="w-4 h-4" style={{ color: COLOR }} />
          </div>
        </div>

        {/* Description — right aligned */}
        <div
          className={`text-right transition-all duration-700 delay-150 ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <p className="text-[13px] text-[#0a1e3d]/65 leading-[1.9] mb-5">
            配套权威职教教材，涵盖低空经济各专业方向。为实训教学提供全面支撑，助力培养符合行业需求的高素质技能人才。
          </p>
        </div>

        {/* Image card */}
        <div
          className={`relative rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,206,201,0.08)] transition-all duration-700 delay-250 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src={ENTERPRISE_IMG}
            alt="教材"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00cec9]/15 to-transparent" />
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-white/80 backdrop-blur-sm text-[10px] font-semibold" style={{ color: COLOR }}>
            权威教材
          </div>
        </div>
      </div>
    </section>
  );
}
