"use client";

import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { useAppStore } from "@/lib/store";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";
import { CommandPalette } from "./command-palette";
import { cn } from "@/lib/utils";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const collapsed = useAppStore((s) => s.sidebarCollapsed);
  const setLoadingHome = useAppStore((s) => s.setLoadingHome);
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoadingHome(false), 500);
    const onOpen = () => setCmdOpen(true);
    document.addEventListener("open-command", onOpen);
    return () => {
      clearTimeout(t);
      document.removeEventListener("open-command", onOpen);
    };
  }, [setLoadingHome]);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className={cn("transition-all duration-200", collapsed ? "pl-[68px]" : "pl-60")}>
        <Topbar onOpenCommand={() => setCmdOpen(true)} />
        <main className="min-h-[calc(100vh-3.5rem)] p-4 md:p-6 lg:p-8">{children}</main>
      </div>
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
      <Toaster position="bottom-right" richColors closeButton />
      <div className="pointer-events-none fixed bottom-3 right-3 z-50 rounded-full border bg-card/90 px-2.5 py-1 text-[10px] font-medium text-muted-foreground shadow-soft backdrop-blur">
        Cornerstone AEC · Prototype v0.1
      </div>
    </div>
  );
}
