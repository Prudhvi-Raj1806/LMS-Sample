"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart,
  Bell,
  BookOpen,
  Command,
  LayoutDashboard,
  Search,
  Settings,
  Users,
} from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground lg:h-screen lg:flex-row lg:overflow-hidden">
      <aside className="relative z-20 w-full flex-shrink-0 border-b border-white/5 bg-card/70 p-4 backdrop-blur-xl lg:w-64 lg:border-b-0 lg:border-r lg:bg-card/50">
        <div className="mb-4 flex items-center gap-2 px-2 lg:mb-10">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-bold">
            R
          </div>
          <span className="text-lg font-semibold tracking-wide">
            Raj OS <span className="text-primary">LMS</span>
          </span>
        </div>

        <nav
          aria-label="Primary navigation"
          className="flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-2 lg:overflow-visible lg:pb-0"
        >
          <NavItem href="/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <NavItem href="/dashboard/journey" icon={<BookOpen size={18} />} label="Journey" />
          <NavItem href="/community" icon={<Users size={18} />} label="Community" />
          <NavItem href="/admin/lms" icon={<BarChart size={18} />} label="Analytics" />
        </nav>

        <div className="mt-4 hidden lg:absolute lg:bottom-4 lg:left-4 lg:right-4 lg:mt-0 lg:block">
          <GlassPanel intensity="low" className="flex items-center gap-3 p-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-accent" />
            <div>
              <p className="text-sm font-medium">Raj</p>
              <p className="text-xs text-muted-foreground text-gradient">Pro Member</p>
            </div>
          </GlassPanel>
        </div>
      </aside>

      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-white/5 px-4 glass sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 transition-colors hover:bg-white/10 sm:min-w-64">
              <Search size={14} />
              <span className="hidden sm:inline">Search courses...</span>
              <span className="sm:hidden">Search</span>
              <span className="ml-auto hidden items-center gap-1 text-xs opacity-50 sm:flex">
                <Command size={12} /> K
              </span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="text-muted-foreground transition-colors hover:text-white"
              aria-label="Open settings"
            >
              <Settings size={18} />
            </button>
            <button
              className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-muted-foreground transition-colors hover:bg-white/20 hover:text-white"
              aria-label="Open notifications"
            >
              <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-background bg-accent" />
              <Bell size={16} />
            </button>
          </div>
        </header>

        <main className="relative flex-1 overflow-y-auto scroll-smooth p-4 sm:p-6 lg:p-8">
          <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-[50%] w-[50%] rounded-full bg-primary/20 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[50%] w-[50%] rounded-full bg-secondary/20 blur-[120px]" />

          <div className="relative z-10 mx-auto min-h-full max-w-6xl">{children}</div>
        </main>
      </div>
    </div>
  );
}

function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`group flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
        isActive
          ? "bg-primary/15 text-white ring-1 ring-primary/30"
          : "text-muted-foreground hover:bg-white/5 hover:text-white"
      }`}
    >
      <span className="transition-colors group-hover:text-primary">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}
