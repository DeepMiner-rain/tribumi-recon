import { siteConfig } from "../config/siteConfig";

interface LogoProps {
  size?: "default" | "xl";
  className?: string;
}

export function Logo({
  size = "default",
  className = "",
}: LogoProps) {
  const height = size === "xl" ? "h-20" : "h-14";

  return (
    <div className={className}>
      <div className={`bg-yellow-500 text-gray-900 px-4 py-2 rounded font-bold ${height} flex items-center justify-center`}>
        <span className={size === "xl" ? "text-2xl" : "text-xl"}>{siteConfig.company.name}</span>
      </div>
    </div>
  );
}