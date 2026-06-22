"use client";

import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Code, Database, Brain, Rocket } from "lucide-react";

export function CareerRoadmap() {
  const steps = [
    { icon: <Code />, title: "Frontend Developer", status: "completed" },
    { icon: <Database />, title: "Full Stack Developer", status: "completed" },
    { icon: <Brain />, title: "AI Engineer", status: "current", recommended: "AI Product Engineering" },
    { icon: <Rocket />, title: "Startup Founder", status: "locked" },
  ];

  return (
    <div className="relative py-8 pb-32">
      {/* Connecting Line */}
      <div className="absolute top-1/4 left-0 w-full h-1 bg-white/5 -translate-y-1/2 z-0" />
      <div className="absolute top-1/4 left-0 w-3/4 h-1 bg-primary -translate-y-1/2 z-0" />

      <div className="relative z-10 flex justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center group relative w-1/4">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
              step.status === 'completed' ? 'bg-primary border-primary/20 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)]' :
              step.status === 'current' ? 'bg-background border-primary text-primary shadow-[0_0_20px_rgba(99,102,241,0.3)] animate-pulse' :
              'bg-background border-white/10 text-muted-foreground'
            }`}>
              {step.icon}
            </div>
            
            <div className="mt-4 text-center">
              <p className={`font-semibold text-sm ${step.status === 'current' ? 'text-primary' : step.status === 'completed' ? 'text-foreground' : 'text-muted-foreground'}`}>
                {step.title}
              </p>
            </div>

            {step.recommended && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-[80px] w-64 left-1/2 -translate-x-1/2 mt-8 z-20"
              >
                <GlassPanel className="p-4 border-primary/30 flex flex-col items-center text-center shadow-2xl bg-background/80">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Next Recommended Path</span>
                  <h4 className="font-semibold text-sm mb-3">{step.recommended}</h4>
                  <button className="text-xs bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors w-full">
                    Explore Course
                  </button>
                </GlassPanel>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
