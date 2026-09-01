import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { AuthLayout } from "@/components/auth-layout";
import { saveProfile } from "@/lib/onboarding";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login to ExamGlow" },
      {
        name: "description",
        content: "Welcome back to ExamGlow. Log in to continue your personalized study plan.",
      },
      { property: "og:title", content: "Login to ExamGlow" },
      { property: "og:description", content: "Welcome back to your ExamGlow study plan." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@") || password.length < 6) {
      setError("Enter a valid email and your password.");
      return;
    }
    saveProfile({ email: email.trim() });
    navigate({ to: "/onboarding/role" });
  }

  return (
    <AuthLayout title={"Welcome back to\nExamGlow"}>
      <form onSubmit={onSubmit} className="mt-8 space-y-4 text-left">
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
            placeholder="Enter your password"
            autoComplete="current-password"
            className="mt-1.5 w-full rounded-xl border border-border bg-card px-4 py-3.5 text-[15px] outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <button
          type="submit"
          className="w-full rounded-full bg-ink py-4 font-medium text-ink-foreground transition-transform hover:-translate-y-0.5"
        >
          Login
        </button>

        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/signup" className="underline underline-offset-2 hover:text-foreground">
            Register
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
