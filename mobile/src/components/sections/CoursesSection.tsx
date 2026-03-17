/**
 * CoursesSection — 开源课程栏目介绍
 * 光谱色：蓝色 #0078e0
 * 布局：左对齐，图片在上
 */

import FeatureTag from "@/components/FeatureTag";
import { useInView } from "@/hooks/useInView";
import { BookOpen } from "lucide-react";

const COURSE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663384561556/GfyRiHPLA62nHv5C9xohw8/course-drone-K2ThniLC7UN3nnDbquXzR3.webp";

const COLOR = "#0078e0";

const features = [
  "专业基础课",
  "专业核心课",
  "专业拓展课",
  "校企精品课",
  "教材库",
];

export default function CoursesSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="courses"
      ref={ref}
      className="relative py-14 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#0078e0]/[0.02] to-transparent" />
      
      {/* Diagonal line decoration */}
      <div className="absolute top-8 right-0 w-20 h-[1px] bg-gradient-to-l from-[#0078e0]/20 to-transparent" />

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
            <BookOpen className="w-4 h-4" style={{ color: COLOR }} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#0a1e3d] leading-tight">开源课程</h2>
            <p className="text-[10px] font-semibold tracking-[0.15em] mt-0.5" style={{ color: `${COLOR}99` }}>
              OPEN COURSES
            </p>
          </div>
          <div
            className="ml-auto h-[2px] w-12 rounded-full opacity-60"
            style={{ backgroundColor: COLOR }}
          />
        </div>

        {/* Image card */}
        <div
          className={`relative rounded-2xl overflow-hidden mb-5 shadow-[0_4px_20px_rgba(0,120,224,0.08)] transition-all duration-700 delay-150 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src={COURSE_IMG}
            alt="开源课程"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0078e0]/15 to-transparent" />
          {/* Corner accent */}
          <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-white/80 backdrop-blur-sm text-[10px] font-semibold" style={{ color: COLOR }}>
            核心栏目
          </div>
        </div>

        {/* Description */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[13px] text-[#0a1e3d]/65 leading-[1.9] mb-5">
            汇聚行业名师智慧，构建覆盖低空经济全领域的精品课程体系。从专业基础到核心技能，从拓展视野到校企联合开发，为职业院校提供系统化、标准化的教学内容支撑。
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
