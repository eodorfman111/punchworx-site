import Link from "next/link";
import { FacilityFeeLink } from "@/components/facility-fee-link";
import {
  aqua,
  ctaContent,
  donation,
  email,
  homeContent,
  membershipContent,
  mapEmbed,
  mapLink,
  phones,
  photos,
  rockSteady,
  sponsors,
} from "@/lib/content";

const tel = phones.callTel;

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="mt-1 shrink-0 text-sky">
      <path d="M4 9.2 7.2 12.5 14 5.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function linkedBody(body: string) {
  const phone = phones.callUs;
  const parts = body.split(phone);
  if (parts.length === 1) return body;
  return parts.map((part, index) => (
    <span key={index}>
      {part}
      {index < parts.length - 1 ? (
        <a href={tel} className="font-bold whitespace-nowrap text-sky underline underline-offset-4">
          {phone}
        </a>
      ) : null}
    </span>
  ));
}

export default function HomePage() {
  const [assessment, boxingPlan, aquaPlan] = membershipContent.plans;
  return (
    <>
      <section className="relative min-h-[calc(100svh-9.5rem)] bg-[#04101f] text-white md:h-[min(82vh,760px)] md:min-h-[520px]">
        <img src={photos.hero.src} alt={photos.hero.alt} className="absolute inset-0 h-full w-full object-cover object-[center_30%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04101f]/92 via-[#04101f]/70 to-[#04101f]/40 md:hidden" />
        <div className="absolute inset-0 hidden bg-[#04101f]/72 md:block" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-9.5rem)] max-w-4xl flex-col items-start justify-start px-5 pt-7 pb-28 text-left md:h-full md:min-h-0 md:items-center md:justify-center md:pt-0 md:pb-8 md:text-center">
          <p className="max-w-xl text-sm font-bold leading-snug text-sky md:text-base">{homeContent.heroEyebrow}</p>
          <h1 className="font-display mt-3 text-[clamp(2.65rem,11.2vw,5.5rem)] leading-[0.9] md:mt-4 md:text-[clamp(2.6rem,7vw,5.5rem)]">
            {homeContent.heroLine1}
            <br />
            {homeContent.heroLine2}
          </h1>
          <p className="mt-4 max-w-[20rem] text-[1.05rem] leading-snug text-white md:hidden">{homeContent.offering}</p>
          <p className="mt-5 hidden max-w-xl text-lg leading-relaxed text-white/95 md:block">{homeContent.offering}</p>
          <div className="mt-5 flex flex-col items-start gap-3 md:mt-6 md:flex-row md:items-center md:justify-center">
            <Link href="#membership" className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-sky px-5 text-base font-bold text-[#03285d] md:px-6">
              {homeContent.heroPrimary}
            </Link>
            <a href={tel} className="inline-flex h-12 w-fit items-center justify-center rounded-full border-2 border-white px-5 text-base font-bold text-white md:px-6">
              {homeContent.heroSecondary}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fa] px-4 py-14 text-[#122033] md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.08em] text-brass uppercase">{homeContent.offerEyebrow}</p>
          <h2 className="font-display mt-3 text-4xl text-navy uppercase md:text-5xl">{homeContent.offerHeading}</h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3d4d63]">{homeContent.intro}</p>
        </div>
        <ol className="mx-auto mt-10 max-w-3xl list-none border-t border-[#d5deea]">
          {homeContent.offerCards.map((card, index) => (
            <li key={card.title} className="flex items-start gap-4 border-b border-[#d5deea] py-6 md:gap-8 md:py-8">
              <span aria-hidden="true" className="font-display min-w-10 shrink-0 text-5xl leading-none text-sky md:min-w-14 md:text-6xl">
                {index + 1}
              </span>
              <div className="min-w-0 pt-1">
                <h3 className="text-xl font-bold text-navy md:text-2xl">{card.title}</h3>
                <p className="mt-1 text-base leading-relaxed text-[#3d4d63] md:text-lg">{card.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="membership" className="scroll-mt-24 border-t-4 border-sky bg-[#071422] px-4 py-14 text-white md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.08em] text-sky uppercase">{homeContent.membershipEyebrow}</p>
          <h2 className="font-display mt-3 text-4xl uppercase md:text-5xl">{homeContent.membershipHeading}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/90">
            {membershipContent.intro}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl items-stretch gap-4 lg:grid-cols-3">
          <article className="flex flex-col border border-white/20 bg-[#0c1c33] p-6">
            <h3 className="text-2xl font-bold">{assessment.name}</h3>
            <p className="mt-4">
              <span className="font-display text-5xl text-sky">{assessment.price}</span>
              <span className="ml-1 text-lg text-white/80">{assessment.period}</span>
            </p>
            <p className="mt-3 text-lg leading-relaxed text-white/85">{assessment.summary}</p>
            <a href={tel} className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-white text-base font-bold text-white lg:mt-auto">
              {assessment.button}
            </a>
          </article>

          <article className="flex flex-col border-2 border-sky bg-[#10243f] p-6">
            <p className="mb-4 w-fit bg-sky px-3 py-1 text-xs font-bold tracking-wide text-[#03285d] uppercase">
              {boxingPlan.badge}
            </p>
            <h3 className="text-2xl font-bold">{boxingPlan.name}</h3>
            <p className="mt-3">
              <FacilityFeeLink className="font-bold text-sky underline underline-offset-4" />
            </p>
            <p className="mt-4">
              <span className="font-display text-5xl text-sky">{boxingPlan.price}</span>
              <span className="text-lg text-white/80">{boxingPlan.period}</span>
            </p>
            <ul className="mt-4 space-y-2 text-lg">
              {boxingPlan.bullets.map((item) => (
                <li key={item} className="flex gap-2"><Check /> {item}</li>
              ))}
            </ul>
            <a href={tel} className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-full bg-sky text-base font-bold text-[#03285d] lg:mt-auto">
              {boxingPlan.button}
            </a>
          </article>

          <article className="flex flex-col border border-white/20 bg-[#0c1c33] p-6">
            <span className="w-fit border border-sky px-3 py-1 text-sm font-bold text-sky">{aquaPlan.badge}</span>
            <h3 className="mt-4 text-2xl font-bold">{aquaPlan.name}</h3>
            <p className="mt-3 text-xl font-bold">{aquaPlan.extra}</p>
            <p className="mt-3 text-lg leading-relaxed text-white/85">{aquaPlan.summary}</p>
            <ul className="mt-4 space-y-2 text-lg">
              {aquaPlan.bullets.map((item) => (
                <li key={item} className="flex gap-2"><Check /> {item}</li>
              ))}
            </ul>
            <a href={tel} className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-white text-base font-bold text-white lg:mt-auto">
              {aquaPlan.button}
            </a>
          </article>
        </div>
      </section>

      <section className="bg-[#071422] px-4 py-12 text-white md:py-16">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-bold tracking-[0.08em] text-sky uppercase">{homeContent.stepsEyebrow}</p>
          <h2 className="font-display mt-2 text-4xl uppercase md:text-5xl">{homeContent.stepsHeading}</h2>
        </div>
        <ol className="mx-auto mt-8 max-w-xl">
          {homeContent.steps.map((step, index, steps) => (
            <li key={step.title} className="flex gap-3">
              <div className="flex flex-col items-center">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sky text-sm font-bold text-[#03285d]">
                  {index + 1}
                </span>
                {index < steps.length - 1 ? <span className="my-1 w-px flex-1 bg-sky/60" aria-hidden="true" /> : null}
              </div>
              <div className={index < steps.length - 1 ? "min-w-0 pb-6" : "min-w-0"}>
                <h3 className="text-lg leading-8 font-bold">{step.title}</h3>
                <p className="mt-1 text-base leading-snug text-white/90">{linkedBody(step.body)}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-[#f7f8fa] px-4 py-16 text-[#122033] md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm font-bold tracking-[0.08em] text-brass uppercase">{homeContent.insideEyebrow}</p>
          <h2 className="font-display mt-3 text-center text-4xl text-navy uppercase md:text-5xl">{homeContent.insideHeading}</h2>
          <img src={photos.hero.src} alt={photos.hero.alt} className="mt-8 h-72 w-full object-cover md:h-96" />
          <ul className="mt-6 grid grid-cols-2 gap-3 text-center md:grid-cols-4">
            {homeContent.pillars.map((item) => (
              <li key={item} className="bg-white px-3 py-4 text-lg font-bold text-navy">{item}</li>
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-[#3d4d63]">{rockSteady.body}</p>
          <p className="mx-auto mt-3 max-w-3xl text-center text-lg leading-relaxed text-[#3d4d63]">{aqua.body}</p>
        </div>
      </section>

      <section className="bg-navy px-4 py-10 text-center text-white md:py-14">
        <h2 className="mx-auto max-w-3xl text-2xl font-bold leading-snug md:text-3xl">{rockSteady.anniversary}</h2>
      </section>

      <section className="bg-white px-4 py-16 text-[#122033] md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.08em] text-brass uppercase">{homeContent.supportersEyebrow}</p>
          <h2 className="font-display mt-3 text-4xl text-navy uppercase md:text-5xl">{homeContent.supportersHeading}</h2>
          <p className="mt-4 text-lg leading-relaxed text-[#3d4d63]">{donation.lead}</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2">
          {sponsors.map((sponsor) => (
            <article key={sponsor.name} className="rounded-2xl border border-[#e6ebf2] p-5 text-center">
              <div className="flex h-24 items-center justify-center bg-[#f7f8fa]">
                <img src={sponsor.image} alt={sponsor.alt} className="max-h-16 max-w-full object-contain" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-navy">{sponsor.name}</h3>
              <p className="mt-2 text-lg text-[#3d4d63]">{sponsor.text}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-lg">{donation.gift}</p>
        <p className="mt-6 text-center">
          <Link href="/donate/" className="inline-flex h-12 items-center rounded-full bg-navy px-6 font-bold text-white">Donate Now</Link>
        </p>
      </section>

      <section className="bg-[#f7f8fa] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.08em] text-brass uppercase">{homeContent.contactEyebrow}</p>
          <h2 className="font-display mt-3 text-4xl text-navy uppercase md:text-5xl">{homeContent.contactHeading}</h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-[#e6ebf2] bg-white p-6">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-sky/15 text-brass">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 3.5h2.2l1.2 3-1.6 1a12 12 0 0 0 5.7 5.7l1-1.6 3 1.2V19a1.5 1.5 0 0 1-1.6 1.5A15.5 15.5 0 0 1 3.5 6.6 1.5 1.5 0 0 1 5 5l2-1.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="mt-4 text-lg font-bold text-navy">{homeContent.callCardTitle}</h3>
            <a href={tel} className="mt-1 inline-block text-lg font-bold whitespace-nowrap text-link underline underline-offset-4">{phones.phoneDisplay}</a>
          </article>
          <article className="rounded-2xl border border-[#e6ebf2] bg-white p-6">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-sky/15 text-brass">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="mt-4 text-lg font-bold text-navy">{homeContent.emailCardTitle}</h3>
            <a href={`mailto:${email}`} className="mt-1 inline-block text-lg font-bold break-all text-link underline underline-offset-4">{email}</a>
          </article>
        </div>
        <div className="mx-auto mt-8 max-w-6xl">
          <iframe title="Map of Kelly Recreation Complex, 404 Imperial Blvd, Lakeland, FL 33803" src={mapEmbed} className="h-72 w-full border border-[#e6ebf2]" loading="lazy" />
          <p className="mt-3"><a className="font-bold text-link underline" href={mapLink}>{homeContent.mapLinkLabel}</a></p>
        </div>
      </section>

      <section className="bg-navy px-4 py-14 text-center text-white md:py-16">
        <p className="text-sm font-bold tracking-[0.08em] text-sky uppercase">{ctaContent.label}</p>
        <h2 className="font-display mt-3 text-4xl uppercase md:text-5xl">{ctaContent.headline}</h2>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={ctaContent.primaryHref} className="inline-flex h-12 items-center rounded-full bg-sky px-6 text-base font-bold text-[#03285d]">
            {ctaContent.primaryLabel}
          </Link>
          <a href={tel} className="inline-flex h-12 items-center rounded-full border-2 border-white px-6 text-base font-bold whitespace-nowrap">
            {ctaContent.secondaryLabel}
          </a>
        </div>
      </section>
    </>
  );
}
