import { createFileRoute } from "@tanstack/react-router";

type ChatMessage = { role: "user" | "assistant"; content: string };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as { messages?: ChatMessage[] };
        const messages = Array.isArray(body.messages) ? body.messages.slice(-20) : [];
        if (messages.length === 0) {
          return new Response(JSON.stringify({ error: "Messages are required" }), {
            status: 400,
            headers: { "content-type": "application/json" },
          });
        }

        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) {
          return new Response(JSON.stringify({ error: "AI is not configured." }), {
            status: 500,
            headers: { "content-type": "application/json" },
          });
        }

        const res = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
          method: "POST",
          headers: {
            authorization: `Bearer ${apiKey}`,
            "content-type": "application/json",
          },
          body: JSON.stringify({
            model: "openai/gpt-5.6-luna",
            input: [
              {
                role: "system",
                content:
                  "You are Whiskers, the ExamGlow study assistant — a friendly cat tutor. Help students plan study sessions, explain concepts simply, quiz them, and summarize material. Keep answers short, warm and concrete. Use markdown-free plain text with short paragraphs or dashes.",
              },
              ...messages.map((m) => ({ role: m.role, content: m.content })),
            ],
          }),
        });

        if (!res.ok) {
          const detail = await res.text();
          const message =
            res.status === 429
              ? "Whiskers is a bit busy right now — try again in a moment."
              : res.status === 402
                ? "AI credits have run out for this workspace."
                : "Whiskers couldn't answer that just now.";
          console.error("AI gateway error", res.status, detail);
          return new Response(JSON.stringify({ error: message }), {
            status: res.status,
            headers: { "content-type": "application/json" },
          });
        }

        const data = (await res.json()) as {
          output_text?: string;
          output?: Array<{ content?: Array<{ type?: string; text?: string }> }>;
        };

        const text =
          data.output_text ??
          data.output
            ?.flatMap((item) => item.content ?? [])
            .filter((part) => part.type === "output_text")
            .map((part) => part.text ?? "")
            .join("") ??
          "";

        return new Response(JSON.stringify({ text: text.trim() }), {
          headers: { "content-type": "application/json" },
        });
      },
    },
  },
});
