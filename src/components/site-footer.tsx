import logoMark from "@/assets/logo-mark.png";

const columns = [
  { title: "Product", items: ["Study Plan", "Sparky", "Tutor Me", "Notes", "Arcade"] },
  { title: "Company", items: ["About", "Careers", "Blog", "Press"] },
  { title: "Resources", items: ["Help center", "Educators", "Enterprise", "Contact"] },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={logoMark}
                alt="ExamGlow logo"
                loading="lazy"
                width={512}
                height={512}
                className="size-9 rounded-full bg-lilac/60 p-0.5"
              />
              <span className="text-[22px] font-bold tracking-tight">ExamGlow</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The AI learning platform that turns your course materials into study tools you
              actually want to use.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold tracking-wide uppercase">{col.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition-colors hover:text-foreground">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ExamGlow. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
