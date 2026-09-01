import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BookOpen, Gamepad2, Mic, NotebookPen, Sparkles, Upload } from "lucide-react";

import logoMark from "@/assets/logo-mark.png";
import heroDoodle from "@/assets/hero-doodle.png";
import { StudyChat } from "@/components/study-chat";
import { readProfile, type OnboardingProfile } from "@/lib/onboarding";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Your ExamGlow study home" },
      {
        name: "description",
        content:
          "Your ExamGlow dashboard: study plan, notes, tutoring sessions, arcade games and your AI tutor.",
      },
      { property: "og:title", content: "Your ExamGlow study home" },
      {
        property: "og:description",
        content: "Pick up your study plan and chat with your AI tutor.",
      },
    ],
  }),
  component: HomePage,
});

const tools = [
  { label: "Study Plan", hint: "4 tasks due this week", Icon: BookOpen, tone: "bg-mint" },
  { label: "Notes", hint: "12 sets ready to review", Icon: NotebookPen, tone: "bg-lilac" },
  { label: "Tutor Me", hint: "Voice sessions, hands free", Icon: Mic, tone: "bg-lavender" },
  { label: "Arcade", hint: "Beat your 1,240 point streak", Icon: Gamepad2, tone: "bg-highlight" },
];

const plan = [
  { title: "Cardiac anatomy and blood flow", meta: "25 min · Reading + quiz", done: true },
  { title: "Electrical conduction and the ECG", meta: "40 min · Flashcards", done: false },
  { title: "The cardiac cycle and pressure-volume loops", meta: "30 min · Practice test", done: false },
  { title: "Cardiac output and vascular resistance", meta: "20 min · Recap", done: false },
];

function HomePage() {
  const [profile, setProfile] = useState<OnboardingProfile>({});

  useEffect(() => {
    setProfile(readProfile());
  }, []);

  const firstName = profile.name?.split(" ")[0];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-[1500px] items-center justify-between gap-4 px-5 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={logoMark}
              alt="ExamGlow logo"
              width={512}
              height={512}
              className="size-9 rounded-full bg-lilac/60 p-0.5"
            />
            <span className="text-[20px] font-bold tracking-tight">ExamGlow</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden rounded-full bg-secondary px-4 py-2 text-sm sm:block">
              {profile.plan === "free" ? "Free plan" : "Premium"}
            </span>
            <button className="flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-ink-foreground transition-transform hover:-translate-y-0.5">
              <Upload className="size-4" aria-hidden />
              Upload materials
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1500px] gap-8 px-5 py-10 lg:grid-cols-[1fr_380px] lg:px-8">
        <div>
          <section className="relative overflow-hidden rounded-3xl bg-lilac p-8 text-ink lg:p-10">
            <div className="max-w-lg">
              <p className="display-italic text-lg">Welcome back{firstName ? `, ${firstName}` : ""}</p>
              <h1 className="mt-3 text-[clamp(1.9rem,4vw,3rem)] leading-[1.05]">
                Today's plan for{" "}
                <span className="display-italic">{profile.goal ?? "your courses"}</span>
              </h1>
              <p className="mt-4 text-ink/70">
                You're 1 of 4 sessions in. Finish two more today and you'll stay on track for Block 2.
              </p>
              <button className="mt-7 rounded-full bg-ink px-7 py-3.5 font-medium text-ink-foreground transition-transform hover:-translate-y-0.5">
                Continue studying
              </button>
            </div>
            <img
              src={heroDoodle}
              alt=""
              loading="lazy"
              width={1200}
              height={912}
              className="pointer-events-none absolute -right-6 -bottom-6 hidden w-72 opacity-90 xl:block"
            />
          </section>

          <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {tools.map(({ label, hint, Icon, tone }) => (
              <button
                key={label}
                className="rounded-2xl border border-border bg-card p-5 text-left transition-transform hover:-translate-y-1"
              >
                <span
                  className={`flex size-11 items-center justify-center rounded-full ${tone} text-ink`}
                >
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="mt-4 block font-semibold">{label}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{hint}</span>
              </button>
            ))}
          </section>

          <section className="mt-8 rounded-3xl border border-border bg-card p-6 lg:p-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl">Cardiovascular Physiology · Block 2</h2>
              <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium">
                <Sparkles className="size-3.5" aria-hidden /> Built by Whiskers
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {plan.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-4 rounded-2xl bg-surface px-4 py-4"
                >
                  <span
                    className={`size-3.5 shrink-0 rounded-full ${item.done ? "bg-lavender" : "bg-muted"}`}
                  />
                  <span className="flex-1">
                    <span className="block text-[15px] font-medium">{item.title}</span>
                    <span className="block text-sm text-muted-foreground">{item.meta}</span>
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.done ? "Done" : "Start"}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span>Sources:</span>
              <span className="rounded-md bg-secondary px-2 py-1">Course Syllabus</span>
              <span className="rounded-md bg-secondary px-2 py-1">Block 2 Review Guide.pdf</span>
            </p>
          </section>
        </div>

        <aside className="lg:sticky lg:top-[92px] lg:h-[calc(100vh-124px)]">
          <div className="h-[600px] lg:h-full">
            <StudyChat />
          </div>
        </aside>
      </main>
    </div>
  );
}
