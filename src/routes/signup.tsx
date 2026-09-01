import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { AuthLayout } from "@/components/auth-layout";
import { saveProfile } from "@/lib/onboarding";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create your ExamGlow account" },
      {
        name: "description",
        content:
          "Sign up for ExamGlow and turn your class materials into a personalized study plan in seconds.",
      },
      { property: "og:title", content: "Create your ExamGlow account" },
      {
        property: "og:description",
        content: "Drop your class materials, we'll make your study plan.",
      },
    ],
  }),
  component: SignUpPage,
});

function SignUpPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@") || password.length < 6) {
      setError("Enter a valid email and a password of at least 6 characters.");
      return;
    }
    saveProfile({ name: name.trim(), email: email.trim() });
    navigate({ to: "/onboarding/role" });
  }

  return (
    <AuthLayout title={"Create your\naccount"}>
      <form onSubmit={onSubmit} className="mt-8 space-y-4 text-left">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Your Name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            autoComplete="name"
            className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            autoComplete="email"
            className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium">
            Your Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            autoComplete="new-password"
            className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <button
          type="submit"
          className="w-full rounded-full bg-ink py-4 font-medium text-ink-foreground transition-transform hover:-translate-y-0.5"
        >
          Create account
        </button>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="underline underline-offset-2 hover:text-foreground">
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
