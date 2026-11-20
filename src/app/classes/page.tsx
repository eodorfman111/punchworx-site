import type { Metadata } from "next";
import { PricingCards } from "@/components/pricing";
import { ScheduleTables } from "@/components/schedule";
import { phones, photos, prices, servicesContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Discover effective Parkinson's support through Rock Steady Boxing and Aqua-Box Fitness classes at PUNCHWORX in Lakeland, FL. Join us to improve mobility and strength.",
};

export default function ClassesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <img
          src={photos.gloves.src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04101f] via-[#04101f]/75 to-[#04101f]/30 md:bg-gradient-to-r md:from-[#04101f] md:via-[#04101f]/70 md:to-[#04101f]/15" />
        <div className="relative mx-auto flex min-h-[22rem] max-w-7xl flex-col justify-center px-4 py-8 md:min-h-[28rem] md:px-10">
          <h1 className="font-display text-4xl md:text-7xl">{servicesContent.heroTitle}</h1>
          <p className="mt-3 text-xl font-bold">{servicesContent.heroLine}</p>
          <p className="mt-1 text-xl font-bold">
            {servicesContent.heroCallLabel}{" "}
            <a className="text-sky underline underline-offset-4" href={phones.callTel}>
              {phones.callUs}
            </a>
          </p>
          <a href={phones.callTel} className="gym-btn gym-btn-sky mt-4 w-fit">
            {servicesContent.heroButton}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-14">
        <h2 className="font-display text-4xl text-navy uppercase md:text-5xl">{servicesContent.membershipHeading}</h2>
        <div className="mt-8">
          <PricingCards />
        </div>
        <p className="sr-only">{prices.facility}</p>
      </section>

      <section className="bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-14">
          <h2 className="font-display text-4xl text-navy uppercase md:text-5xl">{servicesContent.scheduleHeading}</h2>
          <p className="mt-4 max-w-3xl text-xl leading-relaxed">
            {servicesContent.scheduleIntro}
          </p>
          <div className="mt-10">
            <ScheduleTables />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-8 md:px-6 lg:grid-cols-2 lg:py-14">
        <img
          src={photos.rockSteady.src}
          alt={photos.rockSteady.alt}
          className="h-56 w-full object-cover md:h-96"
        />
        <div>
          <h2 className="font-display text-4xl text-navy uppercase">{servicesContent.boxingTitle}</h2>
          <p className="mt-5 text-xl leading-relaxed">{servicesContent.boxingBody}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-8 md:px-6 lg:grid-cols-2 lg:py-14">
        <div>
          <h2 className="font-display text-4xl text-navy uppercase">{servicesContent.aquaTitle}</h2>
          <p className="mt-5 text-xl leading-relaxed">{servicesContent.aquaBody}</p>
          <p className="mt-4 text-xl">{servicesContent.aquaSeason}</p>
          <p className="mt-4 bg-mist px-5 py-4 text-xl font-bold text-navy">{servicesContent.aquaResume}</p>
        </div>
        <img src={photos.pool.src} alt={photos.pool.alt} className="h-56 w-full object-cover md:h-[28rem]" />
      </section>
    </>
  );
}
