"use client";

import { useEffect, useState } from "react";
import { faqContent, phones } from "@/lib/content";

const items = faqContent.items;

function itemId(question: string) {
  if (question.toLowerCase().includes("facility fee")) return "facility-fee";
  return undefined;
}

function Answer({ text }: { text: string }) {
  const phone = phones.callUs;
  const parts = text.split(phone);
  if (parts.length === 1) return <p>{text}</p>;
  return (
    <p>
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 ? (
            <a href={phones.callTel} className="font-bold whitespace-nowrap text-link underline underline-offset-4">
              {phone}
            </a>
          ) : null}
        </span>
      ))}
    </p>
  );
}

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const index = items.findIndex((item) => itemId(item.question) === hash);
      if (index < 0) return;
      setOpen(index);
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ block: "start" });
      });
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <div className="divide-y divide-[#d5deea] border-y border-[#d5deea]">
      {items.map((item, index) => {
        const expanded = open === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        const anchor = itemId(item.question);
        return (
          <div key={item.question} id={anchor} className={anchor ? "scroll-mt-28" : undefined}>
            <h2>
              <button
                id={buttonId}
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-lg font-bold text-navy"
              >
                <span>{item.question}</span>
                <span aria-hidden="true" className="text-2xl leading-none text-brass">
                  {expanded ? "-" : "+"}
                </span>
              </button>
            </h2>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!expanded} className="pb-4 text-lg leading-relaxed text-[#122033]">
              <Answer text={item.answer} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
