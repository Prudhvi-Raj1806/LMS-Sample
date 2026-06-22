"use client";

import { useEffect, useState } from "react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export function StudentAnalytics() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsMounted(true);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  const engagementData = [
    { name: 'Mon', hours: 2.5 },
    { name: 'Tue', hours: 3.8 },
    { name: 'Wed', hours: 1.5 },
    { name: 'Thu', hours: 4.2 },
    { name: 'Fri', hours: 5.0 },
    { name: 'Sat', hours: 1.2 },
    { name: 'Sun', hours: 6.5 },
  ];

  const completionData = [
    { name: 'Module 1', score: 95 },
    { name: 'Module 2', score: 88 },
    { name: 'Module 3', score: 72 },
    { name: 'Module 4', score: 90 },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <GlassPanel className="p-6">
        <h3 className="font-semibold text-lg mb-6">Learning Engagement</h3>
        <div className="h-[250px] min-w-0 w-full">
          {isMounted ? (
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={250}>
            <AreaChart data={engagementData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.5}/>
                  <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Area type="monotone" dataKey="hours" stroke="var(--color-primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorHours)" />
            </AreaChart>
          </ResponsiveContainer>
          ) : (
            <ChartSkeleton />
          )}
        </div>
      </GlassPanel>

      <GlassPanel className="p-6">
        <h3 className="font-semibold text-lg mb-6">Module Scores</h3>
        <div className="h-[250px] min-w-0 w-full">
          {isMounted ? (
          <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={250}>
            <BarChart data={completionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              />
              <Bar dataKey="score" fill="var(--color-accent)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          ) : (
            <ChartSkeleton />
          )}
        </div>
      </GlassPanel>
    </div>
  );
}

function ChartSkeleton() {
  return (
    <div className="flex h-full items-end gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-4">
      {[48, 72, 38, 84, 64, 44, 92].map((height, index) => (
        <div
          key={index}
          className="flex-1 animate-pulse rounded-t-md bg-white/10"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}
