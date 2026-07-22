"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Eyebrow, RedDot } from "@/presentation/components/ui/Eyebrow";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong. Try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-paper-line dark:border-night-line bg-paper dark:bg-night px-4 py-3 text-sm text-ink dark:text-cloud placeholder:text-ink-faint dark:placeholder:text-cloud-soft outline-none transition-colors focus:border-brand";

  return (
    <section id="contact" className="container-page py-5 sm:py-5">
      <Eyebrow>contact</Eyebrow>
      <h2 className="mb-10 font-display text-3xl font-semibold tracking-tight text-ink dark:text-cloud sm:text-4xl">
        Let&apos;s Talk
        <RedDot />
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-10">
        <div className="relative h-72 overflow-hidden rounded-2xl border border-paper-line dark:border-night-line md:h-full md:min-h-[420px]">
          <Image
            src="/images/siro-devs.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-paper-line dark:border-night-line bg-paper-raised dark:bg-night-raised p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-mono text-xs uppercase tracking-wide text-ink-faint dark:text-cloud-soft"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Omonto Oyonde"
                className={inputClasses}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-mono text-xs uppercase tracking-wide text-ink-faint dark:text-cloud-soft"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="oyonde@obande.com"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="subject"
              className="mb-2 block font-mono text-xs uppercase tracking-wide text-ink-faint dark:text-cloud-soft"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="New app idea"
              className={inputClasses}
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="mb-2 block font-mono text-xs uppercase tracking-wide text-ink-faint dark:text-cloud-soft"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Let's start a conversation, talk to me about your app idea"
              className={`${inputClasses} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 font-mono text-sm font-medium text-white transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 sm:w-auto"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending…
              </>
            ) : (
              <>
                <Send size={16} />
                Send message
              </>
            )}
          </button>

          {status === "success" && (
            <p className="mt-4 flex items-center gap-2 font-mono text-xs text-green-600 dark:text-green-400">
              <CheckCircle2 size={15} />
              Message sent — I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 flex items-center gap-2 font-mono text-xs text-red-600 dark:text-red-400">
              <AlertCircle size={15} />
              {errorMsg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
