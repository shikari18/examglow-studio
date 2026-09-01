import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import heroDoodle from "@/assets/hero-doodle.png";
import birdsDoodle from "@/assets/birds-doodle.png";
import studentsGrass from "@/assets/students-grass.jpg";
import studentDesk from "@/assets/student-desk.jpg";
import avatar1 from "@/assets/avatar-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ExamGlow — Learning that adapts to you" },
      {
        name: "description",
        content:
          "ExamGlow turns your notes, slides and syllabi into personalized study plans, tutoring, practice tests and games. Trusted by 8M+ students.",
      },
      { property: "og:title", content: "ExamGlow — Learning that adapts to you" },
      {
        property: "og:description",
        content:
          "Upload your course materials and get study plans, notes, tutoring and practice built around you.",
      },
    ],
  }),
  component: Index,
});

const tabs = [
  {
    id: "Study Plan",
    eyebrow: "Study Plan",
    title: "Know exactly\nwhat comes next",
    body: "Sparky builds a personalized study schedule around your materials and deadlines, breaking everything into clear milestones to help you focus.",
    items: [
      "Cardiac anatomy and blood flow",
      "Electrical conduction and the ECG",
      "The cardiac cycle and pressure-volume loops",
      "Cardiac output and vascular resistance",
    ],
    heading: "Cardiovascular Physiology · Block 2",
  },
  {
    id: "Sparky",
    eyebrow: "Sparky",
    title: "An AI tutor that\nknows your class",
    body: "Sparky reads every file you upload and answers with citations back to the exact page, so you always know where the answer came from.",
    items: [
      "Explain glycolysis like I'm five",
      "Quiz me on lecture 4",
      "Summarize the reading in 10 bullets",
      "What will likely be on the midterm?",
    ],
    heading: "Chat · Biochemistry 210",
  },
  {
    id: "Tutor Me",
    eyebrow: "Tutor Me",
    title: "Learn it out loud,\nstep by step",
    body: "Work through problems with a voice tutor that pauses, checks your understanding and adapts the pace to how you're doing.",
    items: [
      "Guided problem walkthroughs",
      "Voice conversation, hands free",
      "Instant hints instead of answers",
      "Session recaps saved to notes",
    ],
    heading: "Session · Calculus II",
  },
  {
    id: "Live Lecture",
    eyebrow: "Live Lecture",
    title: "Never scramble\nto take notes",
    body: "Record class and get structured notes, key terms and follow-up questions the moment the lecture ends.",
    items: [
      "Real-time transcription",
      "Auto-highlighted key terms",
      "Slide-synced timestamps",
      "Shareable class summaries",
    ],
    heading: "Recording · Organic Chemistry",
  },
  {
    id: "Notes",
    eyebrow: "Notes",
    title: "Notes that\nteach back",
    body: "Every note turns into flashcards, summaries and quizzes so reviewing feels like progress instead of re-reading.",
    items: [
      "Auto-generated flashcards",
      "Spaced repetition built in",
      "Cloze and recall practice",
      "Export to PDF or Anki",
    ],
    heading: "Notebook · Block 2 Review",
  },
  {
    id: "Arcade",
    eyebrow: "Arcade",
    title: "Studying that\ndoesn't feel like it",
    body: "Turn any set of materials into fast, competitive games and race your classmates to the top of the leaderboard.",
    items: [
      "Timed recall challenges",
      "Class leaderboards",
      "Streaks and daily goals",
      "Team study battles",
    ],
    heading: "Arcade · Pharmacology Sprint",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-20 pb-16 lg:px-10 lg:pt-28">
      <div className="mx-auto max-w-[1400px]">
        <h1 className="mx-auto max-w-4xl text-center text-[clamp(2.75rem,8vw,6rem)] leading-[0.98]">
          Learning that
          <br />
          <span className="display-italic">adapts to you</span>
        </h1>

        <div className="mt-10 flex justify-center">
          <Link
            to="/signup"
            className="rounded-full bg-ink px-12 py-5 text-xl font-medium text-ink-foreground transition-transform hover:-translate-y-0.5"
          >
            Try for free
          </Link>
        </div>

        <div className="mt-4 grid grid-cols-2 items-end gap-6">
          <img
            src={birdsDoodle}
            alt="Doodle of three small birds"
            width={800}
            height={600}
            className="w-40 justify-self-start opacity-90 sm:w-56"
          />
          <img
            src={heroDoodle}
            alt="Doodle of a student studying on a laptop with their cat"
            width={1200}
            height={912}
            className="w-full max-w-md justify-self-end"
          />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-2">
        <h2 className="max-w-md text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
          The trusted AI learning platform for students
        </h2>

        <div className="relative grid grid-cols-2 gap-5">
          <div className="col-span-1 flex aspect-square flex-col justify-between rounded-2xl bg-mint p-6 text-ink">
            <span className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none">8M+</span>
            <span className="text-sm">Users worldwide</span>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <img
              src={studentDesk}
              alt="Student studying at a library computer"
              loading="lazy"
              width={900}
              height={900}
              className="size-full object-cover"
            />
            <span className="absolute top-4 left-5 font-display text-4xl text-ink-foreground">
              4.9 ★
            </span>
            <div className="absolute right-3 bottom-3 left-3 rounded-xl bg-card p-4 text-sm leading-snug shadow-lg">
              App store rating from 10k reviews
            </div>
          </div>

          <div className="relative col-start-1 row-start-2 -mt-10 ml-8 aspect-[4/5] overflow-hidden rounded-2xl sm:ml-16">
            <img
              src={studentsGrass}
              alt="Students sitting on the grass on campus"
              loading="lazy"
              width={900}
              height={1100}
              className="size-full object-cover"
            />
            <span className="absolute top-3 left-4 font-display text-[clamp(2rem,4vw,3.25rem)] text-ink-foreground">
              92%
            </span>
            <div className="absolute right-3 bottom-3 left-3 rounded-xl bg-card p-4 text-sm leading-snug shadow-lg">
              of regularly active users reported grade improvements
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="px-5 py-20 lg:px-10">
      <div className="mx-auto max-w-[1400px] text-center">
        <h2 className="mx-auto max-w-4xl text-[clamp(2.25rem,5.5vw,4.25rem)] leading-tight">
          Start <span className="display-italic">really</span> learning in seconds
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg text-muted-foreground">
          Stop fighting your notes. Understand them. See how ExamGlow evolves your course materials
          into content you'll like to learn from.
        </p>

        <div className="mt-10 flex items-center justify-end gap-2">
          <span className="display-italic text-lg">See how ExamGlow works</span>
          <svg width="34" height="40" viewBox="0 0 34 40" fill="none" aria-hidden>
            <path
              d="M4 2c14 4 24 14 24 32m0 0l-7-8m7 8l6-9"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="relative mt-4 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-3xl bg-lavender">
          <span className="font-display text-[clamp(3rem,10vw,8rem)] text-ink/85">ExamGlow</span>
          <button className="absolute flex items-center gap-3 rounded-full bg-ink px-8 py-5 text-lg font-medium text-ink-foreground transition-transform hover:scale-105">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor" aria-hidden>
              <path d="M0 0l16 9-16 9z" />
            </svg>
            Watch · 4:03
          </button>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const [active, setActive] = useState(tabs[0]!.id);
  const tab = tabs.find((t) => t.id === active) ?? tabs[0]!;

  return (
    <section className="px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <p className="display-italic text-lg">Features</p>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.05]">
            <span className="display-italic">Personalized</span> tutoring, totally redefined
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground lg:pt-4">
            Just upload your course materials and you'll get engaging notes, games, videos, and more
            that help you understand faster, retain longer, and stress less.
          </p>
        </div>

        <div className="mt-14 flex gap-1 overflow-x-auto rounded-full border border-border/70 bg-surface p-1.5">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`shrink-0 grow rounded-full px-7 py-4 text-[15px] font-medium whitespace-nowrap transition-colors ${
                t.id === active
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.id}
            </button>
          ))}
        </div>

        <div className="relative mt-10">
          <div className="absolute inset-x-6 -bottom-4 h-full rounded-3xl bg-mint/40" aria-hidden />
          <div className="relative grid gap-8 rounded-3xl bg-lilac p-8 text-ink lg:grid-cols-2 lg:p-12">
            <div className="flex flex-col">
              <p className="display-italic text-lg">{tab.eyebrow}</p>
              <h3 className="mt-4 text-[clamp(1.9rem,3.5vw,3rem)] leading-[1.08] whitespace-pre-line">
                {tab.title}
              </h3>
              <p className="mt-5 max-w-sm leading-relaxed text-ink/70">{tab.body}</p>
              <div className="mt-auto flex flex-wrap gap-3 pt-10">
                <Link
                  to="/signup"
                  className="rounded-full bg-ink px-8 py-4 font-medium text-ink-foreground transition-transform hover:-translate-y-0.5"
                >
                  Get started
                </Link>
                <button className="rounded-full border border-ink/30 px-8 py-4 font-medium transition-colors hover:bg-ink/5">
                  Learn more
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-card/70 p-5 shadow-sm">
              <div className="rounded-xl bg-card p-5 shadow-sm">
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <span className="size-3 rounded-full bg-lavender" />
                  {tab.heading}
                </p>
                <ul className="mt-5 space-y-4">
                  {tab.items.map((item, i) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-foreground/85">
                      <span
                        className={`size-3 shrink-0 rounded-full ${i === 0 ? "bg-lavender" : "bg-muted"}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span>Sources:</span>
                  <span className="rounded-md bg-secondary px-2 py-1">Course Syllabus</span>
                  <span className="rounded-md bg-secondary px-2 py-1">Block 2 Review Guide.pdf</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "I went from a low grade at the beginning of the semester to ending with A's and B's, and I've maintained them every semester since.",
    name: "Samantha Gonzales, Pre-Med Biology at Hartnell Community College",
  },
  {
    quote:
      "ExamGlow turned four hundred pages of lecture slides into a study plan I could actually follow the week before finals.",
    name: "Devon Marsh, Nursing at Ohio State University",
  },
];

function Testimonials() {
  return (
    <section className="bg-ink px-5 py-24 text-ink-foreground lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        <p className="display-italic text-lg text-ink-foreground/70">Testimonials</p>
        <div className="mt-4 h-px w-full bg-ink-foreground/20" />
        <h2 className="mt-16 text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.05]">
          Helping students
          <br />
          achieve more.
        </h2>

        <div className="mt-20 space-y-16">
          {testimonials.map((t, i) => (
            <figure key={t.name} className="flex flex-col gap-7 sm:flex-row sm:items-start">
              <img
                src={avatar1}
                alt={`Portrait of ${t.name.split(",")[0]}`}
                loading="lazy"
                width={512}
                height={512}
                className={`size-24 shrink-0 rounded-full object-cover ${i === 1 ? "grayscale" : ""}`}
              />
              <div>
                <blockquote className="font-display text-[clamp(1.4rem,3vw,2.4rem)] leading-[1.25]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-ink-foreground/60">{t.name}</figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-[clamp(2.25rem,6vw,4rem)] leading-[1.05]">
          <span className="bg-highlight px-2">92% of students</span> get higher grades with ExamGlow
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Drop your class materials, we'll make your study plan.
        </p>
        <Link
          to="/signup"
          className="mt-10 inline-block rounded-full bg-ink px-12 py-5 text-xl font-medium text-ink-foreground transition-transform hover:-translate-y-0.5"
        >
          Start for free
        </Link>
        <p className="mt-14 text-sm text-muted-foreground">
          Trusted by students from top institutions
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-10 font-display text-2xl text-foreground/70">
          <span>HARVARD</span>
          <span>Yale</span>
          <span>MIT</span>
          <span>Stanford</span>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Stats />
        <VideoSection />
        <Features />
        <Testimonials />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}
