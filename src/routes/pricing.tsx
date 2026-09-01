import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useState } from "react";

import balanceDoodle from "@/assets/balance-doodle.png";
import avatar1 from "@/assets/avatar-1.jpg";
import { saveProfile } from "@/lib/onboarding";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Unlock ExamGlow Premium" },
      {
        name: "description",
        content:
          "Join 8M+ students using ExamGlow. Annual for $8/mo or monthly for $19 — cancel anytime.",
      },
      { property: "og:title", content: "Unlock ExamGlow Premium" },
      {
        property: "og:description",
        content: "92% of ExamGlow subscribers improved their grades.",
      },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    id: "annual" as const,
    name: "Annual",
    sub: "$96.00 billed yearly",
    price: "$8.00",
    badge: "BEST VALUE — SAVE $132",
  },
  { id: "monthly" as const, name: "Monthly", sub: "$19.00 billed monthly", price: "$19.00" },
];

function PricingPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<"annual" | "monthly">("annual");
  const [processing, setProcessing] = useState(false);

  function unlock() {
    setProcessing(true);
    saveProfile({ plan: selected });
    navigate({ to: "/home" });
  }

  return (
    <div className="dark min-h-screen bg-background px-5 py-6 text-foreground">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => navigate({ to: "/onboarding/source" })}
          className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:bg-secondary"
        >
          <span aria-hidden>←</span> Back
        </button>
        <button
          type="button"
          onClick={() => {
            saveProfile({ plan: "free" });
            navigate({ to: "/home" });
          }}
          className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:bg-secondary"
        >
          Skip <span aria-hidden>→</span>
        </button>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 py-16 lg:grid-cols-2">
        <div>
          <img
            src={balanceDoodle}
            alt="Line drawing of a student and a cat balancing on a seesaw"
            loading="lazy"
            width={900}
            height={760}
            className="mx-auto w-full max-w-sm invert"
          />
          <figure className="mt-8 rounded-2xl bg-card p-6">
            <blockquote className="text-[15px] leading-relaxed">
              “I knew ExamGlow was fantastic for me when I could remember information without having
              to put a pen on paper at all.”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <img
                src={avatar1}
                alt="Portrait of Nana Agyakoma"
                loading="lazy"
                width={512}
                height={512}
                className="size-10 rounded-full object-cover"
              />
              <span className="text-sm">
                <span className="block font-medium">Nana Agyakoma</span>
                <span className="block text-muted-foreground">Nursing at Emory University</span>
              </span>
            </figcaption>
          </figure>
        </div>

        <div>
          <h1 className="text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight">
            92% of ExamGlow subscribers improved their grades
          </h1>
          <p className="mt-3 text-muted-foreground">
            Join <strong className="text-foreground">8M+</strong> students already using ExamGlow
          </p>

          <div className="mt-8 space-y-4">
            {plans.map((plan) => {
              const active = selected === plan.id;
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelected(plan.id)}
                  aria-pressed={active}
                  className={`w-full overflow-hidden rounded-2xl border text-left transition-colors ${
                    active ? "border-foreground bg-secondary" : "border-border bg-card"
                  }`}
                >
                  {plan.badge && (
                    <span className="block bg-ink-foreground py-2 text-center text-xs font-semibold tracking-wide text-ink">
                      {plan.badge}
                    </span>
                  )}
                  <span className="flex items-center justify-between px-6 py-5">
                    <span>
                      <span className="block font-semibold">{plan.name}</span>
                      <span className="block text-sm text-muted-foreground">{plan.sub}</span>
                    </span>
                    <span className="flex items-center gap-4">
                      <span className="font-display text-3xl">
                        {plan.price}
                        <span className="text-base text-muted-foreground">/mo</span>
                      </span>
                      <span
                        className={`flex size-7 items-center justify-center rounded-full border ${
                          active ? "border-transparent bg-foreground text-background" : "border-border"
                        }`}
                      >
                        {active && <Check className="size-4" aria-hidden />}
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={unlock}
            disabled={processing}
            className="mt-10 w-full rounded-full bg-ink-foreground py-4 text-lg font-medium text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-70"
          >
            {processing ? "Setting up your workspace..." : "Unlock Premium"}
          </button>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Cancel anytime · No pressure · Secure checkout
          </p>
        </div>
      </div>
    </div>
  );
}
