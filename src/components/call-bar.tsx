"use client";

import Link from "next/link";
import { phones } from "@/lib/content";

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path
        d="M7 3.5h2.2l1.2 3-1.6 1a12 12 0 0 0 5.7 5.7l1-1.6 3 1.2V19a1.5 1.5 0 0 1-1.6 1.5A15.5 15.5 0 0 1 3.5 6.6 1.5 1.5 0 0 1 5 5l2-1.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#04101f] px-3 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] lg:hidden">
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href={phones.callTel}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border-2 border-white text-base font-bold text-white"
        >
          <PhoneIcon />
          CALL US
        </a>
        <Link
          href="/join/"
          className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-sky text-base font-bold text-[#03285d]"
        >
          Join Today
        </Link>
      </div>
    </div>
  );
}
