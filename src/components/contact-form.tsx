"use client";

import { useState } from "react";
import { email } from "@/lib/content";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Errors = { name?: string; email?: string; message?: string };

export function ContactForm() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.trim())) {
      next.email = "Please enter a valid email.";
    }
    if (!message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    if (Object.keys(next).length) {
      setSent(false);
      return;
    }
    const body = `Name: ${name.trim()}\nEmail: ${mail.trim()}\n\n${message.trim()}`;
    const href = `mailto:${email}?subject=${encodeURIComponent("Message for PunchWorx")}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-lg font-bold text-navy">
          Name
        </label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          required
          value={name}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          onChange={(event) => setName(event.target.value)}
          className="h-12 rounded-sm border-silver bg-white px-4 text-lg text-navy md:text-lg"
        />
        {errors.name ? (
          <p id="name-error" className="text-lg font-bold text-rose-300">
            {errors.name}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-lg font-bold text-navy">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={mail}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          onChange={(event) => setMail(event.target.value)}
          className="h-12 rounded-sm border-silver bg-white px-4 text-lg text-navy md:text-lg"
        />
        {errors.email ? (
          <p id="email-error" className="text-lg font-bold text-rose-300">
            {errors.email}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="block text-lg font-bold text-navy">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          value={message}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(event) => setMessage(event.target.value)}
          className="min-h-36 rounded-sm border-silver bg-white px-4 py-3 text-lg text-navy md:text-lg"
        />
        {errors.message ? (
          <p id="message-error" className="text-lg font-bold text-rose-300">
            {errors.message}
          </p>
        ) : null}
      </div>
      <button type="submit" className="gym-btn gym-btn-sky w-full sm:w-auto">
        Submit
      </button>
      {sent ? (
        <p className="font-display text-3xl text-navy" role="status">
          Thank you!
        </p>
      ) : null}
      <p className="text-lg text-ink/80">
        Submit opens your email app with this message addressed to {email}.
      </p>
    </form>
  );
}
