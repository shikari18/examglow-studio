import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  GraduationCap,
  BookMarked,
  Backpack,
  Stethoscope,
  BriefcaseMedical,
  BadgeCheck,
  ClipboardList,
  MoreHorizontal,
} from "lucide-react";

import { OnboardingShell } from "@/components/onboarding-shell";
import { saveProfile } from "@/lib/onboarding";

export const Route = createFileRoute("/onboarding/goal")({
  head: () => ({
    meta: [
      { title: "What are you studying for? — ExamGlow" },
      {
        name: "description",
        content: "Pick your program or exam so ExamGlow can build the right study plan.",
      },
      { property: "og:title", content: "What are you studying for? — ExamGlow" },
      { property: "og:description", content: "College, grad school, med school, certs and more." },
    ],
  }),
  component: GoalStep,
});

const goals = [
  { label: "College", hint: "Intro courses, major requirements, finals, etc.", Icon: GraduationCap },
  { label: "Grad School", hint: "Masters, PhD, dissertations", Icon: BookMarked },
  { label: "High School", hint: "AP, IB, Honors, or regular classes", Icon: Backpack },
  { label: "Med School", hint: "Pre-clinical, Step 1, Step 2, rotations", Icon: Stethoscope },
  {
    label: "Nursing School",
    hint: "Nursing programs, clinicals, licensure exams, etc.",
    Icon: BriefcaseMedical,
  },
  {
    label: "Professional Certification",
    hint: "NCLEX, Bar Exam, CPA, PMP, AWS certs, etc.",
    Icon: BadgeCheck,
  },
  { label: "Standardized Tests", hint: "SAT, ACT, MCAT, GRE, GMAT, LSAT, etc.", Icon: ClipboardList },
  { label: "Other", hint: "", Icon: MoreHorizontal },
];

function GoalStep() {
  const navigate = useNavigate();

  return (
    <OnboardingShell title="What are you studying for?" step={2}>
      <div className="mx-auto flex max-w-2xl flex-col gap-3">
        {goals.map(({ label, hint, Icon }) => (
          <button
            key={label}
            type="button"
            onClick={() => {
              saveProfile({ goal: label });
              navigate({ to: "/onboarding/source" });
            }}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 text-left transition-colors hover:bg-secondary"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary">
              <Icon className="size-5" aria-hidden />
            </span>
            <span>
              <span className="block font-semibold">{label}</span>
              {hint && <span className="block text-sm text-muted-foreground">{hint}</span>}
            </span>
          </button>
        ))}
      </div>
    </OnboardingShell>
  );
}
