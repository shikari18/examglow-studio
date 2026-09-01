import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import logoMark from "@/assets/logo-mark.png";
import roomDoodle from "@/assets/room-doodle.png";

export function AuthLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="grid min-h-screen bg-background lg:grid-cols-2">
      <div className="flex flex-col px-6 py-8 sm:px-12">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={logoMark}
            alt="ExamGlow logo"
            width={512}
            height={512}
            className="size-9 rounded-full bg-lilac/60 p-0.5"
          />
          <span className="text-[22px] font-bold tracking-tight">ExamGlow</span>
        </Link>

        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-12">
          <h1 className="text-center text-[clamp(2rem,4vw,3rem)] leading-[1.1] whitespace-pre-line">
            {title}
          </h1>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <button
              type="button"
              className="rounded-full bg-secondary py-3.5 text-[15px] font-medium transition-colors hover:bg-muted"
            >
              Google
            </button>
            <button
              type="button"
              className="rounded-full bg-secondary py-3.5 text-[15px] font-medium transition-colors hover:bg-muted"
            >
              Apple
            </button>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            or
            <span className="h-px flex-1 bg-border" />
          </div>

          {children}

          <p className="mt-6 text-center text-xs text-muted-foreground">
            By continuing you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>

      <div className="hidden flex-col items-center justify-center bg-surface px-12 py-16 text-center lg:flex">
        <p className="text-[clamp(1.25rem,2vw,1.75rem)] leading-snug">
          <span className="bg-highlight px-1.5 display-italic">92% of students</span> get higher
          grades with ExamGlow!
        </p>
        <img
          src={roomDoodle}
          alt="Line drawing of a student studying with their cat"
          loading="lazy"
          width={1400}
          height={900}
          className="mt-10 w-full max-w-xl"
        />
        <h2 className="mt-10 text-[clamp(1.5rem,2.4vw,2.25rem)] leading-snug">
          Drop your class materials,
          <br />
          we'll make your study plan.
        </h2>
        <p className="mt-10 text-sm text-muted-foreground">
          Trusted by students from top institutions
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-8 font-display text-xl text-foreground/70">
          <span>HARVARD</span>
          <span>Yale</span>
          <span>MIT</span>
        </div>
      </div>
    </div>
  );
}
