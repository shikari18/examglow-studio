export type OnboardingProfile = {
  name?: string;
  email?: string;
  role?: string;
  goal?: string;
  source?: string;
  plan?: "annual" | "monthly" | "free";
};

const KEY = "examglow.profile";

export function readProfile(): OnboardingProfile {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as OnboardingProfile) : {};
  } catch {
    return {};
  }
}

export function saveProfile(patch: OnboardingProfile) {
  if (typeof window === "undefined") return;
  try {
    const next = { ...readProfile(), ...patch };
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable */
  }
}
