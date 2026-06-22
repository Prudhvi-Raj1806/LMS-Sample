"use client";

import { useEffect, useRef, useState } from "react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Sparkles, Send, Bot, X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AICopilot() {
  type ChatMessage = {
    role: "assistant" | "user";
    content: string;
  };

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: "Hi Raj! I'm your learning copilot. How can I help you master RAG systems today?" }
  ]);
  const [input, setInput] = useState("");
  const responseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (responseTimerRef.current) {
        clearTimeout(responseTimerRef.current);
      }
    };
  }, []);

  const handleSend = () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) return;

    setMessages(prev => [...prev, { role: "user", content: trimmedInput }]);
    setInput("");
    
    // Simulate AI response
    responseTimerRef.current = setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: "That's a great question! A Vector Database stores data as mathematical vectors, allowing us to perform semantic similarity searches instead of exact keyword matches." }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        aria-label="Open AI tutor"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-shadow z-40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Sparkles size={24} />
      </motion.button>

      {/* Copilot Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[400px] h-[600px] z-50 flex flex-col"
          >
            <GlassPanel className="flex-1 flex flex-col overflow-hidden border-primary/20 shadow-2xl">
              {/* Header */}
              <div className="h-14 border-b border-white/10 flex items-center justify-between px-4 bg-white/5">
                <div className="flex items-center gap-2">
                  <Bot className="text-primary" size={20} />
                  <span className="font-semibold">AI Tutor</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <button className="hover:text-white transition-colors" aria-label="Expand AI tutor"><Maximize2 size={16} /></button>
                  <button onClick={() => setIsOpen(false)} className="hover:text-white transition-colors" aria-label="Close AI tutor"><X size={20} /></button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed shadow-md ${
                      msg.role === 'user' 
                        ? 'bg-primary text-white rounded-tr-sm' 
                        : 'bg-card text-foreground border border-white/5 rounded-tl-sm'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-white/10 bg-black/20 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-background border border-white/10 rounded-full px-4 py-2.5 flex items-center shadow-inner">
                    <input 
                      type="text"
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleSend()}
                      placeholder="Ask anything..."
                      className="bg-transparent border-none outline-none w-full text-sm placeholder:text-muted-foreground"
                    />
                  </div>
                  <button 
                    onClick={handleSend}
                    aria-label="Send message"
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors flex-shrink-0 shadow-lg"
                  >
                    <Send size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
