import { GlassPanel } from "@/components/ui/GlassPanel";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { NeonButton } from "@/components/ui/NeonButton";
import { AchievementTimeline } from "@/components/lms/AchievementTimeline";
import { Flame, Clock, Trophy, ArrowRight, Play } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Good Evening, <span className="text-gradient">Raj</span>
          </h1>
          <p className="text-muted-foreground">
            Continue where you left off. You are on a 7-day streak.
          </p>
        </div>
        <NeonButton className="flex items-center justify-center gap-2">
          <Play size={16} fill="currentColor" />
          Resume AI Product Engineering
        </NeonButton>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <GlassPanel className="col-span-1 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="mb-1 text-lg font-semibold">Current Course</h3>
            <p className="mb-4 text-sm text-muted-foreground">AI Product Engineering</p>
            <div className="text-sm font-medium">Module 4: RAG Systems</div>
          </div>
          <ProgressRing progress={76} size={100} strokeWidth={8} color="var(--color-primary)" />
        </GlassPanel>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-2">
          <GlassPanel intensity="low" className="relative flex flex-col justify-center overflow-hidden p-5">
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-orange-500/20 blur-xl" />
            <div className="mb-2 flex items-center gap-2 text-orange-500">
              <Flame size={18} />
              <span className="text-sm font-semibold">Current Streak</span>
            </div>
            <div className="text-3xl font-bold">7 Days</div>
          </GlassPanel>

          <GlassPanel intensity="low" className="relative flex flex-col justify-center overflow-hidden p-5">
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-accent/20 blur-xl" />
            <div className="mb-2 flex items-center gap-2 text-accent">
              <Clock size={18} />
              <span className="text-sm font-semibold">Learning Hours</span>
            </div>
            <div className="text-3xl font-bold">42.5h</div>
          </GlassPanel>

          <GlassPanel intensity="low" className="relative flex flex-col justify-center overflow-hidden p-5">
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-success/20 blur-xl" />
            <div className="mb-2 flex items-center gap-2 text-success">
              <Trophy size={18} />
              <span className="text-sm font-semibold">XP Points</span>
            </div>
            <div className="text-3xl font-bold">12,450</div>
          </GlassPanel>

          <GlassPanel
            intensity="low"
            className="relative flex cursor-pointer flex-col justify-center overflow-hidden p-5 transition-colors hover:bg-white/10"
          >
            <div className="flex h-full items-center justify-between">
              <div>
                <span className="mb-1 block text-sm font-semibold text-primary">Live Session</span>
                <div className="text-lg font-bold">In 2 Hours</div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                <ArrowRight size={18} />
              </div>
            </div>
          </GlassPanel>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">AI Recommended Path</h2>
          <GlassPanel className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-primary">
                <span className="text-lg font-bold text-white">AI</span>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Mastering Vector Databases</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Based on your recent progress in RAG systems, we recommend solidifying your
                  understanding of vector embeddings.
                </p>
                <button className="flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-white">
                  Start Module <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </GlassPanel>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Your Journey</h2>
          <AchievementTimeline
            items={[
              {
                id: "1",
                title: "Intro to LLMs",
                description: "Completed module and passed the quiz with 95%.",
                status: "completed",
                xp: 500,
              },
              {
                id: "2",
                title: "RAG Systems",
                description: "Currently building the context retrieval engine.",
                status: "current",
                xp: 1000,
              },
              {
                id: "3",
                title: "Agents & Tools",
                description: "Unlock by completing RAG Systems.",
                status: "locked",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
