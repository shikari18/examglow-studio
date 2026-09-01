import { useEffect, useRef, useState, type FormEvent } from "react";
import { Send } from "lucide-react";

import logoMark from "@/assets/logo-mark.png";

type Message = { role: "user" | "assistant"; content: string };

const suggestions = [
  "Create a study plan for me",
  "Quiz me on this study set",
  "Generate flashcards for this set",
];

export function StudyChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || status === "loading") return;
    const next: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setError(null);
    setStatus("loading");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = (await res.json()) as { text?: string; error?: string };
      if (!res.ok || !data.text) {
        setError(data.error ?? "Something went wrong. Please try again.");
      } else {
        setMessages([...next, { role: "assistant", content: data.text }]);
      }
    } catch {
      setError("Network error — check your connection and try again.");
    } finally {
      setStatus("idle");
      inputRef.current?.focus();
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    void send(input);
  }

  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-card">
      <div className="flex items-center gap-3 border-b border-border px-5 py-4">
        <img
          src={logoMark}
          alt=""
          width={512}
          height={512}
          className="size-9 rounded-full bg-lilac/60 p-0.5"
        />
        <div>
          <p className="text-sm font-semibold">Whiskers</p>
          <p className="text-xs text-muted-foreground">Your AI study tutor</p>
        </div>
      </div>

      <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
        {messages.length === 0 && (
          <div className="text-center">
            <img
              src={logoMark}
              alt="Whiskers the ExamGlow cat tutor"
              loading="lazy"
              width={512}
              height={512}
              className="mx-auto size-16 rounded-full bg-lilac/60 p-1"
            />
            <p className="mt-4 font-display text-xl">How can I help?</p>
            <div className="mt-5 flex flex-col gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => void send(s)}
                  className="rounded-full border border-border px-4 py-2.5 text-sm transition-colors hover:bg-secondary"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "flex justify-end" : ""}>
            <p
              className={
                m.role === "user"
                  ? "max-w-[85%] rounded-2xl bg-ink px-4 py-2.5 text-sm whitespace-pre-wrap text-ink-foreground"
                  : "text-sm leading-relaxed whitespace-pre-wrap text-foreground"
              }
            >
              {m.content}
            </p>
          </div>
        ))}

        {status === "loading" && (
          <p className="animate-pulse text-sm text-muted-foreground">Whiskers is thinking...</p>
        )}
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>

      <form onSubmit={onSubmit} className="border-t border-border p-3">
        <div className="flex items-end gap-2 rounded-2xl border border-border bg-background p-2">
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                void send(input);
              }
            }}
            placeholder="Ask your AI tutor anything..."
            className="max-h-32 flex-1 resize-none bg-transparent px-2 py-2 text-sm outline-none"
          />
          <button
            type="submit"
            disabled={status === "loading" || !input.trim()}
            aria-label="Send message"
            className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-ink text-ink-foreground transition-opacity disabled:opacity-40"
          >
            <Send className="size-4" aria-hidden />
          </button>
        </div>
      </form>
    </div>
  );
}
