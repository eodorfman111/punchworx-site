"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { copyright, email, footerHours, mission, phones, social } from "@/lib/content";

const explore = [
  { href: "/", label: "Home" },
  { href: "/#membership", label: "Membership" },
  { href: "/team/", label: "Coaches" },
  { href: "/about/", label: "About" },
  { href: "/questions/", label: "Questions" },
  { href: "/get-involved/", label: "Donate" },
  { href: "/contact/", label: "Contact" },
] as const;

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.5 8.5H16V6h-1.8C11.8 6 11 7.2 11 9.1V10H9.5v2.5H11V18h2.5v-5.5h2l.4-2.5h-2.4V9.2c0-.5.2-.7 1-.7Z" />
    </svg>
  );
}

function isCurrent(pathname: string, href: string) {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  if (href === "/") return path === "/" || path === "/home/";
  if (href === "/team/") return path.startsWith("/team");
  if (href === "/contact/") return path.startsWith("/contact");
  return path === href;
}

export function SiteFooter() {
  const pathname = usePathname();

  return (
    <footer className="bg-[#071a33] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex items-center gap-2">
            <Logo className="h-11 w-11" />
            <span className="font-display text-2xl tracking-wide">PUNCHWORX</span>
          </Link>
          <p className="mt-4 max-w-xs text-base leading-relaxed text-white/90">{mission}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/30 text-white"
            >
              <InstagramIcon />
            </a>
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/30 text-white"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
        <div>
          <p className="font-display text-lg tracking-wide">Visit &amp; Contact</p>
          <p className="mt-4 text-base leading-relaxed text-white/90">
            {footerHours.venue}
            <br />
            {footerHours.street}
            <br />
            {footerHours.city}
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/90">
            {footerHours.poBox}
            <br />
            {footerHours.poCity}
          </p>
          <p className="mt-4 text-base whitespace-nowrap">
            <a className="font-bold text-white underline underline-offset-4" href={phones.callTel}>
              {phones.phoneDisplay}
            </a>
          </p>
          <p className="mt-2 text-base">
            <a className="break-all font-bold text-white underline underline-offset-4" href={`mailto:${email}`}>
              {email}
            </a>
          </p>
        </div>
        <div>
          <p className="font-display text-lg tracking-wide">Hours</p>
          <p className="mt-4 text-base font-bold">{footerHours.boxingTitle}</p>
          <p className="text-base text-white/90">{footerHours.boxingDays}</p>
          <p className="text-base text-white/90">{footerHours.boxingTime}</p>
          <p className="mt-4 text-base font-bold">{footerHours.aquaTitle}</p>
          <p className="text-base text-white/90">{footerHours.aquaWhen}</p>
        </div>
        <div>
          <p className="font-display text-lg tracking-wide">Explore</p>
          <nav className="mt-4 flex flex-col gap-2" aria-label="Explore">
            {explore.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                className={`text-base font-bold hover:text-sky ${
                  isCurrent(pathname, item.href) ? "underline decoration-sky decoration-4 underline-offset-8" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm text-white/80 md:px-6">
          {copyright}
        </p>
      </div>
    </footer>
  );
}
