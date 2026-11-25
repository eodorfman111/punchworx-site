import type { Metadata } from "next";
import { donateUrl, partners, partnersHeading } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Support PunchWorX and see the community partners behind the program in Lakeland.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <section className="bg-navy px-4 py-10 text-white md:py-14">
        <div className="mx-auto flex max-w-4xl flex-col items-start">
          <h1 className="font-display text-4xl leading-tight md:text-6xl">Get Involved</h1>
          <a
            href={donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gym-btn gym-btn-sky mt-6"
          >
            Donate Now
          </a>
        </div>
      </section>

      <section className="bg-[#071422] px-4 py-12 text-white md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-4xl md:text-5xl">{partnersHeading}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <article key={partner.name} className="flex flex-col rounded-2xl bg-white px-6 py-6 text-navy">
                <div className="flex h-36 items-center justify-center">
                  <img src={partner.image} alt={partner.alt} className="max-h-28 w-full object-contain" />
                </div>
                <h3 className="mt-4 text-center text-lg font-bold leading-snug">{partner.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
