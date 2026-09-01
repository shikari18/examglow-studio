import { useRouter } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function OnboardingShell({
  title,
  step,
  children,
  onSkip,
}: {
  title: string;
  step: number;
  children: ReactNode;
  onSkip?: () => void;
}) {
  const router = useRouter();

  return (
    <div className="dark min-h-screen bg-background px-5 py-6 text-foreground">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => router.history.back()}
          className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:bg-secondary"
        >
          <span aria-hidden>←</span> Back
        </button>
        <div className="flex items-center gap-2" aria-label={`Step ${step} of 3`}>
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === step ? "w-8 bg-foreground" : "w-4 bg-border"
              }`}
            />
          ))}
        </div>
        {onSkip ? (
          <button
            type="button"
            onClick={onSkip}
            className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:bg-secondary"
          >
            Skip <span aria-hidden>→</span>
          </button>
        ) : (
          <span className="w-[92px]" />
        )}
      </div>

      <div className="mx-auto w-full max-w-3xl py-16 sm:py-24">
        <h1 className="text-center text-[clamp(2rem,5vw,3.25rem)] leading-tight">{title}</h1>
        <div className="mt-12">{children}</div>
      </div>
    </div>
  );
}
