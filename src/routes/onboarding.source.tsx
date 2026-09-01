import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  Bot,
  Music2,
  Instagram,
  UserRound,
  Facebook,
  MessagesSquare,
  Search,
  Youtube,
  MoreHorizontal,
} from "lucide-react";

import { OnboardingShell } from "@/components/onboarding-shell";
import { saveProfile } from "@/lib/onboarding";

export const Route = createFileRoute("/onboarding/source")({
  head: () => ({
    meta: [
      { title: "How did you hear about ExamGlow?" },
      {
        name: "description",
        content: "Let us know how you found ExamGlow so we can keep improving.",
      },
      { property: "og:title", content: "How did you hear about ExamGlow?" },
      { property: "og:description", content: "Tell us where you discovered ExamGlow." },
    ],
  }),
  component: SourceStep,
});

const sources = [
  { label: "ChatGPT", Icon: Bot },
  { label: "TikTok", Icon: Music2 },
  { label: "Instagram", Icon: Instagram },
  { label: "Friend or Classmate", Icon: UserRound },
  { label: "Facebook", Icon: Facebook },
  { label: "Reddit", Icon: MessagesSquare },
  { label: "Google", Icon: Search },
  { label: "YouTube", Icon: Youtube },
  { label: "Other", Icon: MoreHorizontal },
];

function SourceStep() {
  const navigate = useNavigate();

  return (
    <OnboardingShell title="How did you hear about ExamGlow?" step={3}>
      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {sources.map(({ label, Icon }, i) => (
          <button
            key={label}
            type="button"
            onClick={() => {
              saveProfile({ source: label });
              navigate({ to: "/pricing" });
            }}
            className={`flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 text-left transition-colors hover:bg-secondary ${
              i === sources.length - 1 ? "sm:col-span-2 sm:mx-auto sm:w-1/2" : ""
            }`}
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary">
              <Icon className="size-5" aria-hidden />
            </span>
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </div>
    </OnboardingShell>
  );
}
