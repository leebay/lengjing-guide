/**
 * SpectrumDivider — 棱镜折射光谱分隔线
 * 用于各栏目之间的过渡装饰
 */

interface SpectrumDividerProps {
  fromColor?: string;
  toColor?: string;
  direction?: "left" | "right";
}

export default function SpectrumDivider({
  fromColor = "#0078e0",
  toColor = "#00b4d8",
  direction = "left",
}: SpectrumDividerProps) {
  return (
    <div className="relative w-full h-10 overflow-hidden">
      {/* Main gradient line */}
      <div
        className="absolute top-1/2 -translate-y-1/2 h-[1px]"
        style={{
          left: direction === "left" ? "8%" : "20%",
          right: direction === "left" ? "20%" : "8%",
          background: `linear-gradient(90deg, transparent 0%, ${fromColor}30 30%, ${toColor}30 70%, transparent 100%)`,
        }}
      />
      {/* Decorative dot */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
        style={{
          [direction === "left" ? "left" : "right"]: "8%",
          backgroundColor: `${fromColor}40`,
        }}
      />
      {/* Small triangle */}
      <div
        className="absolute top-1/2 -translate-y-1/2"
        style={{
          [direction === "left" ? "right" : "left"]: "20%",
        }}
      >
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path
            d="M4 0L7.464 6H0.536L4 0Z"
            fill={toColor}
            opacity="0.25"
          />
        </svg>
      </div>
    </div>
  );
}
