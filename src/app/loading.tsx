import { GlassPanel } from "@/components/ui/GlassPanel";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6 text-foreground">
      <GlassPanel className="w-full max-w-md p-6">
        <div className="mb-4 h-3 w-32 rounded-full bg-white/10" />
        <div className="space-y-3">
          <div className="h-4 w-full animate-pulse rounded-full bg-white/10" />
          <div className="h-4 w-4/5 animate-pulse rounded-full bg-white/10" />
          <div className="h-4 w-2/3 animate-pulse rounded-full bg-white/10" />
        </div>
      </GlassPanel>
    </div>
  );
}
