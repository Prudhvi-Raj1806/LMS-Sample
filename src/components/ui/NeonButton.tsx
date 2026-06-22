"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface NeonButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "success";
  className?: string;
}

export function NeonButton({ children, variant = "primary", className, ...props }: NeonButtonProps) {
  const variants = {
    primary: "bg-primary/20 text-primary border-primary/50 hover:bg-primary/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]",
    secondary: "bg-secondary/20 text-white border-secondary/50 hover:bg-secondary/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]",
    accent: "bg-accent/20 text-white border-accent/50 hover:bg-accent/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]",
    success: "bg-success/20 text-white border-success/50 hover:bg-success/30 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative overflow-hidden rounded-full border px-6 py-3 font-semibold backdrop-blur-md transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
    </motion.button>
  );
}
