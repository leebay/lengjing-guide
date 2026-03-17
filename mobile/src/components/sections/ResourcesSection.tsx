/**
 * ResourcesSection — 教学资源库栏目介绍
 * 光谱色：青色 #00b4d8
 * 布局：右对齐，图片在下
 */

import FeatureTag from "@/components/FeatureTag";
import { useInView } from "@/hooks/useInView";
import { FolderOpen } from "lucide-react";

const RESOURCE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663384561556/GfyRiHPLA62nHv5C9xohw8/resource-library-W5je2iguMPxuZnYNnBGjTV.webp";

const COLOR = "#00b4d8";

const features = [
  "知识手册",
  "教学课件",
  "课程教案",
  "课程标准",
  "实训工卡",
  "微课视频",
  "教学图库",
  "虚拟仿真",
  "二维动画",
  "设备图库",
];

export default function ResourcesSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="resources"
      ref={ref}
      className="relative py-14 overflow-hidden"
    >
      {/* Background accent — from left */}
      <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-[#00b4d8]/[0.02] to-transparent" />

      {/* Diagonal line decoration */}
      <div className="absolute top-8 left-0 w-20 h-[1px] bg-gradient-to-r from-[#00b4d8]/20 to-transparent" />

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
            <h2 className="text-lg font-bold text-[#0a1e3d] leading-tight">教学资源库</h2>
            <p className="text-[10px] font-semibold tracking-[0.15em] mt-0.5" style={{ color: `${COLOR}99` }}>
              RESOURCE LIBRARY
            </p>
          </div>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
            style={{ backgroundColor: `${COLOR}10`, border: `1px solid ${COLOR}15` }}
          >
            <FolderOpen className="w-4 h-4" style={{ color: COLOR }} />
          </div>
        </div>

        {/* Description — right aligned */}
        <div
          className={`text-right transition-all duration-700 delay-150 ${
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <p className="text-[13px] text-[#0a1e3d]/65 leading-[1.9] mb-5">
            海量数字化教学资源一站式获取。涵盖知识手册、教学课件、微课视频、虚拟仿真等十大资源类型，全方位赋能高效课堂教学与自主学习。
          </p>
        </div>

        {/* Feature tags — right aligned */}
        <div
          className={`flex flex-wrap gap-2 justify-end mb-5 transition-all duration-700 delay-250 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {features.map((f) => (
            <FeatureTag key={f} label={f} color={COLOR} />
          ))}
        </div>

        {/* Image card */}
        <div
          className={`relative rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,180,216,0.08)] transition-all duration-700 delay-400 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src={RESOURCE_IMG}
            alt="教学资源库"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00b4d8]/15 to-transparent" />
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-white/80 backdrop-blur-sm text-[10px] font-semibold" style={{ color: COLOR }}>
            十大资源类型
          </div>
        </div>
      </div>
    </section>
  );
}
