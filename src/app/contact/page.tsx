import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import {
  contactContent,
  email,
  hoursLine,
  mailingAddress,
  mapEmbed,
  mapLink,
  phones,
  photos,
  physicalAddress,
  visitAddress,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to PUNCHWORX for support and information on fighting Parkinson’s through specialized programs in Lakeland, FL. Contact us today for assistance.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy text-white lg:grid lg:grid-cols-2">
        <img
          src={photos.speedBag.src}
          alt={photos.speedBag.alt}
          className="h-52 w-full object-cover md:h-80 lg:h-full"
        />
        <div className="px-4 py-6 md:px-8 lg:py-16">
          <h1 className="font-display text-3xl leading-tight md:text-5xl">
            {contactContent.heading}
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-8 md:px-6 lg:grid-cols-2 lg:py-14">
        <div className="space-y-8 text-xl">
          <div>
            <h2 className="font-display text-3xl text-navy uppercase">{contactContent.phoneHeading}</h2>
            <p className="mt-2 whitespace-nowrap">
              <a className="font-bold text-link underline underline-offset-4" href={phones.callTel}>
                {phones.callUs}
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-navy uppercase">{contactContent.emailHeading}</h2>
            <p className="mt-2">
              <a className="font-bold text-link underline underline-offset-4" href={`mailto:${email}`}>
                {email}
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl text-navy uppercase">{contactContent.visitHeading}</h2>
            <p className="mt-2">
              {visitAddress[0]}
              <br />
              {visitAddress[1]}
            </p>
            <p className="mt-4 text-lg leading-relaxed">{physicalAddress}</p>
            <p className="mt-3 text-lg leading-relaxed">{mailingAddress}</p>
            <p className="mt-3 text-lg leading-relaxed">{hoursLine}</p>
          </div>
          <a href={phones.callTel} className="gym-btn gym-btn-sky">
            {contactContent.button}
          </a>
        </div>
        <div className="border border-sky/40 bg-panel p-4 md:p-6">
          <h2 className="font-display mb-6 text-3xl text-navy uppercase">{contactContent.formHeading}</h2>
          <ContactForm />
        </div>
      </section>

      <section className="px-4 pb-10 md:px-6">
        <div className="mx-auto max-w-6xl overflow-hidden border border-sky/40">
          <iframe
            title="Map of Kelly Recreation Complex, 404 Imperial Blvd, Lakeland, FL 33803"
            src={mapEmbed}
            className="h-72 w-full md:h-[28rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="mx-auto mt-4 max-w-6xl">
          <a className="text-xl font-bold text-link underline underline-offset-4" href={mapLink}>
            {contactContent.mapLinkLabel}
          </a>
        </p>
      </section>
    </>
  );
}
