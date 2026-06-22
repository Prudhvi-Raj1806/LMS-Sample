import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export function GlassPanel({ children, className, intensity = "medium", ...props }: GlassPanelProps) {
  const intensityClasses = {
    low: "bg-white/5 backdrop-blur-sm",
    medium: "glass-panel",
    high: "bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 text-white overflow-hidden transition-all duration-300",
        intensityClasses[intensity],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
