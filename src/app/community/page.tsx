"use client";

import { GlassPanel } from "@/components/ui/GlassPanel";
import { NeonButton } from "@/components/ui/NeonButton";
import { CareerRoadmap } from "@/components/lms/CareerRoadmap";
import { Users, MessageSquare, Briefcase, Award, TrendingUp } from "lucide-react";
import DashboardLayout from "@/app/dashboard/layout";

export default function CommunityPage() {
  return (
    <DashboardLayout>
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
        
        {/* Header */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2 flex items-center gap-3">
              <Users className="text-primary" size={32} />
              Founder <span className="text-gradient">Community Hub</span>
            </h1>
            <p className="text-muted-foreground">Network with peers, get project feedback, and level up.</p>
          </div>
          <NeonButton>New Discussion</NeonButton>
        </div>

        {/* Roadmap Upsell Engine */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <TrendingUp className="text-accent" size={20} /> Your Career Roadmap
          </h2>
          <GlassPanel className="p-8 border-accent/20">
            <CareerRoadmap />
          </GlassPanel>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Discussion Board */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold">Trending Discussions</h2>
            <div className="space-y-4">
              {[
                { title: "Best vector DB for production?", author: "Sarah J.", replies: 42, tags: ["AI", "Architecture"] },
                { title: "Review my SaaS landing page", author: "Mike T.", replies: 18, tags: ["Feedback", "Design"] },
                { title: "How to price an AI Wrapper?", author: "Elena R.", replies: 56, tags: ["Business", "Pricing"] }
              ].map((post, i) => (
                <GlassPanel key={i} className="p-5 hover:border-primary/50 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{post.title}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <MessageSquare size={14} /> {post.replies}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-accent to-primary" />
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                    </div>
                    <div className="flex gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassPanel>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Showcases */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Award className="text-success" size={20} /> Student Showcases
              </h2>
              <GlassPanel className="p-5 space-y-4 border-success/20">
                <div className="aspect-video bg-card rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-accent/20" />
                  <div className="absolute bottom-3 left-3">
                    <h4 className="font-bold text-sm">AI Marketing Tool</h4>
                    <p className="text-xs text-white/80">by David Chen</p>
                  </div>
                </div>
                <div className="aspect-video bg-card rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 to-success/20" />
                  <div className="absolute bottom-3 left-3">
                    <h4 className="font-bold text-sm">Fitness Tracker</h4>
                    <p className="text-xs text-white/80">by Emma W.</p>
                  </div>
                </div>
              </GlassPanel>
            </div>

            {/* Mentorship */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Briefcase className="text-primary" size={20} /> Mentorship
              </h2>
              <GlassPanel className="p-6 text-center border-primary/20">
                <div className="w-16 h-16 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Book a 1:1 Session</h3>
                <p className="text-sm text-muted-foreground mb-4">Get personalized feedback from industry experts.</p>
                <button className="w-full text-sm font-semibold text-primary border border-primary/50 py-2 rounded-lg hover:bg-primary/10 transition-colors">
                  Find a Mentor
                </button>
              </GlassPanel>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
