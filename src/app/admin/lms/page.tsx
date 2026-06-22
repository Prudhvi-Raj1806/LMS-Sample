import { GlassPanel } from "@/components/ui/GlassPanel";
import { NeonButton } from "@/components/ui/NeonButton";
import { StudentAnalytics } from "@/components/lms/StudentAnalytics";
import { DollarSign, Users, Activity, Settings, TrendingUp } from "lucide-react";
import DashboardLayout from "@/app/dashboard/layout";

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Creator <span className="text-gradient">Studio</span>
            </h1>
            <p className="text-muted-foreground">Monitor revenue, retention, and student success.</p>
          </div>
          <NeonButton variant="secondary" className="flex items-center justify-center gap-2">
            <Settings size={16} /> Platform Settings
          </NeonButton>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Monthly Recurring Revenue"
            value="$42,500"
            icon={<DollarSign className="text-success" />}
            trend="+12.5%"
            positive
          />
          <MetricCard
            title="Active Students"
            value="1,248"
            icon={<Users className="text-primary" />}
            trend="+5.2%"
            positive
          />
          <MetricCard
            title="Avg. Completion Rate"
            value="68%"
            icon={<Activity className="text-accent" />}
            trend="+2.1%"
            positive
          />
          <MetricCard
            title="Churn Rate"
            value="2.4%"
            icon={<TrendingUp className="text-destructive" />}
            trend="-0.8%"
            positive
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Performance Analytics</h2>
          <StudentAnalytics />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Course Funnel</h2>
          <GlassPanel className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-4 text-sm font-semibold">Course Name</th>
                    <th className="p-4 text-sm font-semibold">Enrollments</th>
                    <th className="p-4 text-sm font-semibold">Completion Rate</th>
                    <th className="p-4 text-sm font-semibold">Avg. Rating</th>
                    <th className="p-4 text-sm font-semibold">Revenue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <TableRow
                    name="AI Product Engineering"
                    enrollments="842"
                    completion="72%"
                    rating="4.9"
                    revenue="$84,200"
                  />
                  <TableRow
                    name="Full Stack Next.js"
                    enrollments="1,124"
                    completion="65%"
                    rating="4.7"
                    revenue="$56,200"
                  />
                  <TableRow
                    name="UI/UX for Founders"
                    enrollments="532"
                    completion="81%"
                    rating="4.9"
                    revenue="$26,600"
                  />
                </tbody>
              </table>
            </div>
          </GlassPanel>
        </div>
      </div>
    </DashboardLayout>
  );
}

function MetricCard({
  title,
  value,
  icon,
  trend,
  positive,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
  positive: boolean;
}) {
  return (
    <GlassPanel className="group relative overflow-hidden p-6">
      <div className="absolute right-0 top-0 p-4 opacity-20 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100">
        {icon}
      </div>
      <h3 className="mb-2 text-sm font-medium text-muted-foreground">{title}</h3>
      <div className="mb-2 text-3xl font-bold">{value}</div>
      <div
        className={`inline-block rounded-md px-2 py-1 text-xs font-semibold ${
          positive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
        }`}
      >
        {trend} vs last month
      </div>
    </GlassPanel>
  );
}

function TableRow({
  name,
  enrollments,
  completion,
  rating,
  revenue,
}: {
  name: string;
  enrollments: string;
  completion: string;
  rating: string;
  revenue: string;
}) {
  return (
    <tr className="group transition-colors hover:bg-white/5">
      <td className="p-4 font-medium transition-colors group-hover:text-primary">{name}</td>
      <td className="p-4 text-muted-foreground">{enrollments}</td>
      <td className="p-4 text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>{completion}</span>
          <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-primary" style={{ width: completion }} />
          </div>
        </div>
      </td>
      <td className="p-4 text-muted-foreground">{rating} / 5</td>
      <td className="p-4 font-semibold text-success">{revenue}</td>
    </tr>
  );
}
