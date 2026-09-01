import logoMark from "@/assets/logo-mark.png";

const links = ["Features", "Educators & Enterprise", "About"];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-6 px-5 lg:px-10">
        <a href="/" className="flex items-center gap-2.5">
          <img
            src={logoMark}
            alt="ExamGlow logo"
            width={512}
            height={512}
            className="size-9 rounded-full bg-lilac/60 p-0.5"
          />
          <span className="text-[22px] font-bold tracking-tight">ExamGlow</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((label) => (
            <button
              key={label}
              className="flex items-center gap-1.5 text-[15px] text-foreground/85 transition-colors hover:text-foreground"
            >
              {label}
              <svg width="11" height="7" viewBox="0 0 11 7" fill="none" aria-hidden>
                <path
                  d="M1 1l4.5 4.5L10 1"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-border px-6 py-2.5 text-[15px] transition-colors hover:bg-secondary sm:block">
            Login
          </button>
          <button className="rounded-full bg-ink px-6 py-2.5 text-[15px] font-semibold text-ink-foreground transition-transform hover:-translate-y-0.5">
            Start for Free
          </button>
        </div>
      </div>
    </header>
  );
}
