/**
 * SectionIndicator — 右侧固定的进度指示器
 * 棱镜折射风格：每个点对应光谱中的一种颜色
 */

const sections = [
  { id: "hero", color: "#0078e0", label: "首页" },
  { id: "courses", color: "#0078e0", label: "课程" },
  { id: "resources", color: "#00b4d8", label: "教学资源" },
  { id: "industry", color: "#6c5ce7", label: "行业资料" },
  { id: "enterprise", color: "#00cec9", label: "教材" },
  { id: "cta", color: "#f0a500", label: "前往电脑端" },
];

interface SectionIndicatorProps {
  activeSection: number;
}

export default function SectionIndicator({ activeSection }: SectionIndicatorProps) {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-2.5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
      {sections.map((section, index) => {
        const isActive = index === activeSection;
        return (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className="group relative flex items-center p-1"
            aria-label={section.label}
          >
            {/* Tooltip */}
            <span
              className="absolute right-7 whitespace-nowrap rounded-lg px-2.5 py-1 text-[10px] font-semibold opacity-0 transition-all duration-200 group-hover:opacity-100 pointer-events-none shadow-sm"
              style={{
                backgroundColor: section.color,
                color: "#fff",
              }}
            >
              {section.label}
            </span>
            {/* Dot */}
            <span
              className="block rounded-full transition-all duration-400"
              style={{
                width: isActive ? 8 : 5,
                height: isActive ? 8 : 5,
                backgroundColor: isActive ? section.color : "rgba(0,0,0,0.1)",
                boxShadow: isActive ? `0 0 10px ${section.color}50` : "none",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
