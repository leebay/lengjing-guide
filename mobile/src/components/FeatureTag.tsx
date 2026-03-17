/**
 * FeatureTag — 栏目子功能标签
 * 带有对应光谱色的侧边条
 */

interface FeatureTagProps {
  label: string;
  color: string;
}

export default function FeatureTag({ label, color }: FeatureTagProps) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-medium transition-all duration-200"
      style={{
        backgroundColor: `${color}08`,
        color: `${color}cc`,
        borderLeft: `2px solid ${color}40`,
      }}
    >
      {label}
    </span>
  );
}
