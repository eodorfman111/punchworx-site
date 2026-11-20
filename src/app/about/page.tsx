import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
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
      <section className="bg-navy text-white lg:grid lg:grid-cols-2">
        <img
          src={photos.members.src}
          alt={photos.members.alt}
          className="h-56 w-full object-cover sm:h-72 lg:h-full lg:min-h-[28rem]"
        />
        <div className="px-4 py-6 md:px-8 lg:py-16">
          <h1 className="font-display text-4xl leading-tight md:text-6xl">{aboutContent.heading}</h1>
          <p className="mt-4 text-xl leading-relaxed">{aboutContent.mission}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-5 px-4 py-8 text-lg leading-relaxed md:px-6 md:py-14 md:text-xl">
        {aboutContent.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </section>

      <section className="bg-[#f7f8fa]">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-display text-center text-3xl text-navy uppercase md:text-5xl">{aboutContent.offerHeading}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {aboutContent.offers.map((offer) => (
              <Reveal key={offer.title}>
                <article className="h-full border border-[#c9d3e0] bg-white p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-sky/15 text-brass">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h14M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <h3 className="font-display mt-4 text-xl text-navy uppercase">{offer.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-[#3d4d63]">{offer.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
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
