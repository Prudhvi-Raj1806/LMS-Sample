"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: string;
  title: string;
  description: string;
  status: "completed" | "current" | "locked";
  xp?: number;
}

export function AchievementTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative pl-6 border-l border-white/10 space-y-8">
      {items.map((item, index) => (
        <motion.div 
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative"
        >
          {/* Icon indicator */}
          <div className="absolute -left-[35px] top-1 bg-background rounded-full">
            {item.status === "completed" && <CheckCircle2 className="text-success fill-success/20" size={20} />}
            {item.status === "current" && (
              <div className="relative flex items-center justify-center w-5 h-5">
                <span className="absolute w-full h-full rounded-full bg-primary/40 animate-ping" />
                <Circle className="text-primary fill-primary" size={14} />
              </div>
            )}
            {item.status === "locked" && <Lock className="text-muted-foreground" size={16} />}
          </div>
          
          <div className={cn(
            "p-4 rounded-xl border transition-all duration-300",
            item.status === "current" ? "glass-panel border-primary/30" : "bg-white/5 border-white/5",
            item.status === "locked" && "opacity-50 grayscale"
          )}>
            <div className="flex justify-between items-start mb-2">
              <h4 className={cn("font-semibold", item.status === "current" ? "text-primary" : "text-foreground")}>
                {item.title}
              </h4>
              {item.xp && (
                <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded-md">
                  +{item.xp} XP
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
