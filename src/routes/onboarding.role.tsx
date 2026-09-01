import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { GraduationCap, Users, School, Home } from "lucide-react";

import { OnboardingShell } from "@/components/onboarding-shell";
import { saveProfile } from "@/lib/onboarding";

export const Route = createFileRoute("/onboarding/role")({
  head: () => ({
    meta: [
      { title: "Tell us who you are — ExamGlow" },
      {
        name: "description",
        content: "Choose your role so ExamGlow can tailor your study experience.",
      },
      { property: "og:title", content: "Tell us who you are — ExamGlow" },
      { property: "og:description", content: "Student, teacher, professor or parent?" },
    ],
  }),
  component: RoleStep,
});

const roles = [
  { label: "Student", Icon: GraduationCap },
  { label: "Teacher", Icon: Users },
  { label: "Professor", Icon: School },
  { label: "Parent", Icon: Home },
];

function RoleStep() {
  const navigate = useNavigate();

  return (
    <OnboardingShell title="I'm a..." step={1}>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
        {roles.map(({ label, Icon }) => (
          <button
            key={label}
            type="button"
            onClick={() => {
              saveProfile({ role: label });
              navigate({ to: "/onboarding/goal" });
            }}
            className="flex flex-col items-center gap-4 rounded-2xl bg-card p-10 transition-transform hover:-translate-y-1"
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-secondary">
              <Icon className="size-6" aria-hidden />
            </span>
            <span className="text-lg font-semibold">{label}</span>
          </button>
        ))}
      </div>
    </OnboardingShell>
  );
}
