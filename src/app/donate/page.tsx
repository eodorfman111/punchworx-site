import type { Metadata } from "next";
import { DonationForm } from "@/components/donation-form";
import { donation, phones } from "@/lib/content";

export const metadata: Metadata = {
  title: "Donate Now",
  description:
    "Support PunchWorX, a Lakeland nonprofit 501 (c) (3) offering Rock Steady Boxing and Aqua-Box Fitness for people with Parkinson’s.",
};

export default function DonatePage() {
  return (
    <>
      <section className="bg-navy px-4 py-8 text-white md:py-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-lg font-bold text-sky">{donation.eyebrow}</p>
          <h1 className="font-display mt-2 text-3xl leading-tight md:text-6xl">{donation.help}</h1>
          <p className="mt-2 text-2xl font-bold text-sky">{donation.today}</p>
        </div>
      </section>

      <section className="bg-[#071422] px-4 py-8 md:py-12">
        <div className="mx-auto max-w-[42rem] rounded-2xl bg-white p-3 text-[#122033] shadow-xl md:p-5">
          <DonationForm />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-8 md:px-6 lg:grid-cols-5 lg:py-14">
        <div className="space-y-6 text-xl leading-relaxed lg:col-span-3">
          <p>{donation.lead}</p>
          <p>{donation.gift}</p>
        </div>
        <aside className="border border-sky/40 bg-panel p-4 lg:col-span-2 md:p-6">
          <p className="text-lg font-bold">{donation.mailLabel}</p>
          <p className="font-display mt-4 text-3xl leading-tight text-navy">
            {donation.org}
            <br />
            {donation.box}
            <br />
            {donation.city}
          </p>
          <p className="mt-4 text-lg">{donation.nonprofit}</p>
          <p className="mt-3 text-lg leading-relaxed">{donation.registration}</p>
          <a href={phones.callTel} className="gym-btn gym-btn-sky mt-5 w-full">
            {donation.button}
          </a>
        </aside>
      </section>
    </>
  );
}
