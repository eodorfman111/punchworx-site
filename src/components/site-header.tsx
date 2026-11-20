"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { announcement, nav, phones } from "@/lib/content";
import { Logo } from "@/components/logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "cn";

function isCurrent(pathname: string, href: string) {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  if (href === "/") return path === "/" || path === "/home/";
  if (href === "/team/") return path.startsWith("/team");
  if (href === "/contact/") return path.startsWith("/contact");
  return path === href;
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 26 26" aria-hidden="true" fill="none">
      <path d="M4 7h18M4 13h18M4 19h18" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" fill="none">
      <path d="M6 6l14 14M20 6L6 20" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-40">
      <header className="flex h-[60px] items-center gap-2 border-b border-white/10 bg-navy px-3 text-white lg:px-3">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Logo className="h-10 w-10 md:h-[52px] md:w-[52px]" />
          <span className="font-display text-xl tracking-wide md:text-2xl">PUNCHWORX</span>
        </Link>
        <nav className="ml-auto hidden items-center lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
              className={cn(
                "px-1.5 py-2 text-[13px] font-bold whitespace-nowrap text-white xl:px-2 xl:text-sm",
                isCurrent(pathname, item.href) && "underline decoration-sky decoration-4 underline-offset-8",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a href={phones.callTel} className="gym-btn gym-btn-sky ml-2 hidden xl:inline-flex">
          Call {phones.callUs}
        </a>
        <Sheet>
          <SheetTrigger
            aria-label="Open menu"
            className="ml-auto inline-flex size-11 items-center justify-center rounded-full border-2 border-white/80 text-white lg:hidden"
          >
            <MenuIcon />
          </SheetTrigger>
          <SheetContent
            side="right"
            showCloseButton={false}
            className="w-full max-w-none border-none bg-navy p-0 text-white data-[side=right]:w-full sm:max-w-sm"
          >
            <div className="flex items-center justify-between px-4 pt-4">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <Logo className="h-12 w-12" />
              <SheetClose
                aria-label="Close menu"
                className="inline-flex size-12 items-center justify-center text-white"
              >
                <CloseIcon />
              </SheetClose>
            </div>
            <nav className="mt-6 flex flex-col" aria-label="Mobile">
              {nav.map((item) => (
                <SheetClose
                  key={item.href}
                  render={<Link href={item.href} aria-current={isCurrent(pathname, item.href) ? "page" : undefined} />}
                  className={cn(
                    "border-t border-white/20 px-4 py-4 text-2xl font-bold text-white",
                    isCurrent(pathname, item.href) && "underline decoration-sky decoration-4 underline-offset-8",
                  )}
                >
                  {item.label}
                </SheetClose>
              ))}
            </nav>
            <div className="px-4 pt-6">
              <a href={phones.callTel} className="gym-btn gym-btn-sky w-full">
                Call {phones.callUs}
              </a>
              <p className="mt-4 text-base leading-snug text-white/90">{announcement}</p>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}
