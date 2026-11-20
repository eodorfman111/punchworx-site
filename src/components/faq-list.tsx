"use client";

import { useState } from "react";
import { faqContent, phones } from "@/lib/content";

const items = faqContent.items;

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

  return (
    <div className="divide-y divide-[#d5deea] border-y border-[#d5deea]">
      {items.map((item, index) => {
        const expanded = open === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.question}>
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
                  {expanded ? "–" : "+"}
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
