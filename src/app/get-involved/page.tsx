
import type { Metadata } from "next";
import { donation, sponsors } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Thank you to the sponsors and community partners supporting PunchWorX in Lakeland.",
};

export default function GetInvolvedPage() {
  const sponsorOrganizations = sponsors.filter((sponsor) =>
    ["K.L. Smith Roofing Experts", "Solid Start, Inc"].includes(sponsor.name)
  );

  const communityPartners = sponsors.filter((sponsor) =>
    ["Parkinson's Foundation", "GiveWell Community Foundation"].includes(
      sponsor.name
    )
  );

  return (
    <>
      <section className="bg-navy px-4 py-8 text-white md:py-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-lg font-bold text-sky">Thank you</p>
          <h1 className="font-display mt-2 text-4xl leading-tight md:text-6xl">
            Get Involved
          </h1>
        </div>
      </section>

      {/* Sponsors */}
      <section className="bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-14">
          <h2 className="font-display text-center text-4xl text-navy md:text-5xl">
            Thank you sponsors
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {sponsorOrganizations.map((sponsor) => (
              <article
                key={sponsor.name}
                className="flex flex-col border border-sky/40 bg-panel p-4"
              >
                <div className="flex h-28 items-center justify-center bg-[#f4f7fb] px-4">
                  <img
                    src={sponsor.image}
                    alt={sponsor.alt}
                    className="max-h-24 w-auto max-w-full object-contain"
                  />
                </div>

                <h3 className="font-display mt-5 text-2xl text-navy">
                  {sponsor.name}
                </h3>

                <p className="mt-3 text-lg leading-relaxed font-bold">
                  {sponsor.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Community Partners */}
      <section className="bg-panel">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-14">
          <h2 className="font-display text-center text-4xl text-navy md:text-5xl">
            Thank you community partners
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {communityPartners.map((partner) => (
              <article
                key={partner.name}
                className="flex flex-col border border-sky/40 bg-panel p-4"
              >
                <div className="flex h-28 items-center justify-center bg-[#f4f7fb] px-4">
                  <img
                    src={partner.image}
                    alt={partner.alt}
                    className="max-h-24 w-auto max-w-full object-contain"
                  />
                </div>

                <h3 className="font-display mt-5 text-2xl text-navy">
                  {partner.name}
                </h3>

                <p className="mt-3 text-lg leading-relaxed font-bold">
                  {partner.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
