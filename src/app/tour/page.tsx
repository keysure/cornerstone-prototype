"use client";

import Link from "next/link";
import {
  Home,
  Clock,
  Receipt,
  FileSearch,
  FolderPlus,
  ArrowRight,
  Hexagon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FLOWS = [
  {
    n: "01",
    title: "Home & My Work",
    desc: "Unified inbox across projects — approve, reply, submit and snooze with undo. Role cards for Engineer through Exec, Finance and HR.",
    href: "/home/",
    icon: Home,
    tip: "Start as Thandi (Engineer), then switch among the 7 tester roles top-right.",
  },
  {
    n: "02",
    title: "Daily timesheet",
    desc: "Week view under 60 seconds: suggested entries, fee-cap (NTE) warning, autosave, offline badge, submit → status timeline.",
    href: "/time/",
    icon: Clock,
    tip: "Watch the amber NTE warning on N2 Stage 3 Design.",
  },
  {
    n: "03",
    title: "Invoice flow",
    desc: "Create Tax Invoice from a project, VAT 15%, DOA approval above R500 000, then live status like an Uber trip.",
    href: "/invoices/new/?project=proj-n2",
    icon: Receipt,
    tip: "Or open INV-2026-084 and use Simulate client.",
  },
  {
    n: "04",
    title: "Design review & CRS",
    desc: "Pinned comments on a mock drawing, CRS table sync, designer responses, Excel export/import, stage-gate invoice loop.",
    href: "/reviews/rp-1/",
    icon: FileSearch,
    tip: "Click pins ↔ rows; add a comment by clicking the drawing.",
  },
  {
    n: "05",
    title: "New project across entities",
    desc: "Guided wizard: one project spanning Kopano SA + Botswana, with auto intercompany and sub-consultant commercial view.",
    href: "/projects/new/",
    icon: FolderPlus,
    tip: "One project for the whole job — not one per legal entity.",
  },
];

export default function TourPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50/80 via-background to-background dark:from-teal-950/20">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-10 flex items-start justify-between gap-4">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-teal-700 shadow-soft dark:text-teal-300">
              <Hexagon className="h-3.5 w-3.5" />
              Cornerstone AEC prototype · Kopano Consulting Engineers
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-navy-900 dark:text-white md:text-4xl">
              Cornerstone AEC — test the five key flows
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Front-end only. Fictional Kopano group (~2,000 staff, 20 entities, 8 countries). No login — use the avatar menu to switch between 7 tester roles.
              Press <kbd className="rounded border bg-muted px-1.5 text-xs">⌘K</kbd> anywhere for the command palette.
            </p>
          </div>
          <Link href="/home/">
            <Button>
              Enter app <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          {FLOWS.map((f) => {
            const Icon = f.icon;
            return (
              <Card key={f.n} className="overflow-hidden transition hover:shadow-card">
                <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-teal-600">
                      Flow {f.n}
                    </div>
                    <CardTitle className="mt-0.5 text-lg">{f.title}</CardTitle>
                    <CardDescription className="mt-1.5">{f.desc}</CardDescription>
                    <p className="mt-2 text-xs text-muted-foreground italic">{f.tip}</p>
                  </div>
                  <Link href={f.href}>
                    <Button>Start</Button>
                  </Link>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Fictional firm · All data fictional · Built for usability testing with engineers & architects
        </p>
      </div>
      <div className="fixed bottom-3 right-3 rounded-full border bg-card/90 px-2.5 py-1 text-[10px] font-medium text-muted-foreground shadow-soft">
        Prototype v0.1
      </div>
    </div>
  );
}
