import { siteConfig } from "../config/siteConfig";
import logoLight from "figma:asset/f635104af2cf53ace21b9209950b9e060dad3ab0.png";
import logoDark from "figma:asset/4b63deb012f64ef7f5125f65b802f44f62c0ec3f.png";

interface LogoProps {
  variant?: "default" | "light";
  size?: "default" | "xl";
  className?: string;
}

export function Logo({
  variant = "default",
  size = "default",
  className = "",
}: LogoProps) {
  const height = size === "xl" ? "h-20" : "h-14";

  return (
    <div className={className}>
      {/* Light Mode Logo */}
      <img
        src={logoLight}
        alt={siteConfig.company.name}
        className={`dark:hidden ${height} h-14 w-auto`}
      />
      {/* Dark Mode Logo */}
      <img
        src={logoDark}
        alt={siteConfig.company.name}
        className={`hidden dark:block ${height} h-14 w-auto`}
      />
    </div>
  );
}