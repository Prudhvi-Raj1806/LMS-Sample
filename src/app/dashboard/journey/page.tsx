import { GlassPanel } from "@/components/ui/GlassPanel";
import { NeonButton } from "@/components/ui/NeonButton";
import { Map, Star, Target, Compass, Zap } from "lucide-react";

export default function JourneyPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2 flex items-center gap-3">
            <Compass className="text-primary" size={32} />
            Smart Learning <span className="text-gradient">Journey</span>
          </h1>
          <p className="text-muted-foreground">Your personalized skill tree and knowledge map.</p>
        </div>
        <NeonButton className="flex items-center gap-2">
          <Map size={16} /> View 3D Map
        </NeonButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2 space-y-6">
          <GlassPanel className="p-8 relative overflow-hidden min-h-[500px] flex items-center justify-center border-primary/20">
            {/* Placeholder for 3D Node Map */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
            
            <div className="relative z-10 text-center space-y-4">
               <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center border border-primary/50 relative">
                 <span className="absolute -inset-2 bg-primary/20 rounded-full animate-ping opacity-50" />
                 <Zap className="text-primary" size={32} />
               </div>
               <h3 className="text-2xl font-bold">AI Product Engineering Node</h3>
               <p className="text-muted-foreground max-w-sm mx-auto">
                 You are currently exploring the AI Product Engineering path. Next up: Agentic Workflows.
               </p>
               <NeonButton variant="accent">Continue Path</NeonButton>
            </div>
            
            {/* Visual connecting lines placeholder */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
               <path d="M 100 100 Q 200 150 400 250" stroke="var(--color-primary)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
               <path d="M 400 250 Q 600 350 800 100" stroke="var(--color-accent)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
            </svg>
          </GlassPanel>
        </div>

        <div className="space-y-6">
          <GlassPanel className="p-6">
            <h3 className="font-semibold text-lg flex items-center gap-2 mb-4">
              <Target className="text-accent" size={18} /> Current Objectives
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <div className="mt-0.5"><Zap className="text-primary" size={14} /></div>
                <div>
                  <p className="text-sm font-medium">Build a RAG Chatbot</p>
                  <p className="text-xs text-muted-foreground">Practical Exercise • 2h</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <div className="mt-0.5"><Star className="text-accent" size={14} /></div>
                <div>
                  <p className="text-sm font-medium">Pass Module Quiz</p>
                  <p className="text-xs text-muted-foreground">Assessment • 30m</p>
                </div>
              </li>
            </ul>
          </GlassPanel>

          <GlassPanel className="p-6">
            <h3 className="font-semibold text-lg mb-4">Skill Masteries</h3>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Prompt Engineering</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-[92%]" />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Vector Databases</span>
                  <span className="font-medium">45%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full w-[45%]" />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">React & Next.js</span>
                  <span className="font-medium">100%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-success rounded-full w-full" />
                </div>
              </div>
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
}
