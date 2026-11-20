import type { Metadata } from "next";
import { Marquee } from "@/components/marquee";
import { PersonCard } from "@/components/person-card";
import { board, coaches, jerry, teamContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Learn about Punchwork Fighting Against Parkinson's team, including coaches and board members dedicated to supporting Parkinson's patients through boxing and fitness programs.",
};

export default function TeamPage() {
  return (
    <>
      <section className="bg-navy px-4 py-6 text-white md:py-14">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-4xl md:text-6xl">{teamContent.heading}</h1>
        </div>
      </section>
      <Marquee text={teamContent.marquee} />
      <section className="bg-[#f4f7fb] px-4 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coaches
            .filter((person) => !("logo" in person && person.logo))
            .map((person) => (
              <PersonCard key={person.name} {...person} />
            ))}
        </div>
      </section>
      <section className="bg-navy px-5 py-16 text-white">
        <figure className="mx-auto max-w-4xl">
          <blockquote className="font-display text-2xl leading-snug md:text-4xl">“{jerry.quote}”</blockquote>
          <figcaption className="mt-6 text-xl font-bold text-sky">{jerry.by}</figcaption>
        </figure>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="font-display text-4xl text-navy uppercase md:text-5xl">{teamContent.boardHeading}</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {board.map((person) => (
            <PersonCard key={person.name} {...person} />
          ))}
        </div>
      </section>
    </>
  );
}
