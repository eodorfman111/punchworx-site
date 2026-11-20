import type { Metadata } from "next";
import {
  aboutContent,
  photos,
  testimonials,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover PunchWorX, a non-contact boxing program in Lakeland dedicated to improving quality of life for those with Parkinson’s through specialized exercise and community support.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:px-6 md:py-8">
          <img
            src={photos.members.src}
            alt={photos.members.alt}
            className="h-36 w-full object-cover sm:h-44 md:h-40 md:w-72 md:shrink-0"
          />
          <div>
            <h1 className="font-display text-4xl leading-[0.95] md:text-5xl">{aboutContent.heading}</h1>
            <p className="mt-3 max-w-2xl text-lg leading-snug md:text-xl">{aboutContent.mission}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-10">
        <h2 className="font-display text-3xl text-navy md:text-4xl">{aboutContent.missionHeading}</h2>
        <div className="mt-4 space-y-5 text-lg leading-relaxed md:text-xl">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:px-6 lg:grid-cols-2">
        <img
          src={photos.highFive.src}
          alt={photos.highFive.alt}
            className="h-64 w-full object-cover md:h-[28rem]"
        />
        <img
          src={photos.suspension.src}
          alt={photos.suspension.alt}
            className="h-64 w-full object-cover md:h-[28rem]"
        />
      </section>

      <section className="bg-navy px-5 py-16 text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl md:text-5xl">{aboutContent.testimonialsHeading}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {testimonials.map((item) => (
              <figure key={item.by} className="rounded-3xl bg-panel/8 p-7 ring-1 ring-white/15">
                <blockquote className="font-display text-2xl leading-snug">“{item.quote.trim()}”</blockquote>
                <figcaption className="mt-5 text-lg font-bold text-sky">- {item.by}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          <img src={photos.pushups.src} alt={photos.pushups.alt} className="h-48 w-full object-cover md:h-64" />
          <img src={photos.rockSteady.src} alt={photos.rockSteady.alt} className="h-48 w-full object-cover md:h-64" />
          <img src={photos.glovesCircle.src} alt={photos.glovesCircle.alt} className="h-48 w-full object-cover md:h-64" />
        </div>
      </section>
    </>
  );
}
