import type { Metadata } from "next";
import Link from "next/link";
import { PricingCards } from "@/components/pricing";
import { announcement, hoursLine, phones, physicalAddress } from "@/lib/content";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Join PUNCHWORX to fight Parkinson's with specialized programs and community support. Discover more about our services and how you can get involved today.",
};

export default function JoinPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-14">
      <h1 className="font-display text-3xl text-navy uppercase md:text-5xl">{announcement}</h1>
      <p className="mt-6 max-w-3xl text-xl leading-relaxed">{hoursLine}</p>
      <p className="mt-4 text-xl">{physicalAddress}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href={phones.callTel} className="gym-btn gym-btn-sky">
          Call to join or observe a class
        </a>
        <Link href="/classes/" className="gym-btn gym-btn-line-navy">
          See All Classes
        </Link>
      </div>
      <div className="mt-14">
        <h2 className="font-display text-4xl text-navy uppercase">Membership</h2>
        <div className="mt-8">
          <PricingCards />
        </div>
      </div>
    </section>
  );
}
