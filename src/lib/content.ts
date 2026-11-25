import about from "../../content/about.json";
import contact from "../../content/contact.json";
import cta from "../../content/cta.json";
import getInvolved from "../../content/get-involved.json";
import faq from "../../content/faq.json";
import home from "../../content/home.json";
import membership from "../../content/membership.json";
import schedule from "../../content/schedule.json";
import services from "../../content/services.json";
import settings from "../../content/settings.json";
import team from "../../content/team.json";

const digits = settings.phone.replace(/\D/g, "");

export const phones = {
  callUs: settings.phone,
  callTel: `tel:+1${digits}`,
  tollFree: settings.tollFree,
  phoneDisplay: settings.phoneDisplay,
};

export const email = settings.email;

export const social = {
  instagram: settings.instagram,
  facebook: settings.facebook,
  reel: settings.reel,
};

export const hoursLine = settings.hoursLine;
export const physicalAddress = settings.physicalAddress;
export const visitAddress = [settings.visitStreet, settings.visitCity] as const;
export const mailingAddress = settings.mailingAddress;
export const mapQuery = settings.mapQuery;
export const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=16&output=embed`;
export const mapLink = `https://maps.google.com/?q=${encodeURIComponent(mapQuery)}`;

export const donateUrl = "https://secure.qgiv.com/for/punchworx/";

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/classes/", label: "Services" },
  { href: "/team/", label: "Meet the Team" },
  { href: "/questions/", label: "Questions" },
  { href: "/get-involved/", label: "Get Involved" },
  { href: "/contact/", label: "Contact" },
] as const;

export const announcement = settings.announcement;
export const mission = settings.mission;
export const copyright = settings.copyright;
export const footerHours = {
  boxingTitle: settings.footerBoxingTitle,
  boxingDays: settings.footerBoxingDays,
  boxingTime: settings.footerBoxingTime,
  aquaTitle: settings.footerAquaTitle,
  aquaWhen: settings.footerAquaWhen,
  venue: settings.venue,
  street: settings.footerStreet,
  city: settings.footerCity,
  poBox: settings.poBox,
  poCity: settings.poCity,
};

export const homeIntro = home.intro;
export const offering = home.offering;
export const pillars = home.pillars;
export const homeContent = home;
export const ctaContent = cta;

export const prices = {
  monthly: membership.intro,
  assessment: membership.plans[0].summary,
  aquaResume: services.aquaResume,
  facility: membership.facility,
};

export const rockSteady = {
  name: services.boxingTitle,
  body: services.boxingBody,
  anniversary: services.anniversary,
};

export const aqua = {
  name: services.aquaTitle,
  body: services.aquaBody,
  season: services.aquaSeason,
};

export const membershipContent = membership;
export const scheduleContent = schedule;
export const servicesContent = services;

export const coaches = team.coaches.map((person) => ({
  name: person.name,
  role: person.title,
  image: person.image,
  alt: person.alt,
  bio: person.bio,
}));

export const board = team.board.map((person) => ({
  name: person.name,
  role: person.title,
  image: person.image,
  alt: person.alt,
  bio: person.bio,
}));

export const teamContent = team;

export const partnersHeading = getInvolved.partnersHeading;
export const partners = getInvolved.partners;

export const aboutContent = about;
export const aboutParagraphs = about.paragraphs;
export const testimonials = about.testimonials;
export const faqContent = faq;
export const contactContent = contact;

export const photos = {
  hero: { src: home.heroImage, alt: home.heroAlt },
  glovesCircle: { src: about.glovesCircleImage, alt: about.glovesCircleAlt },
  speedBag: { src: contact.heroImage, alt: contact.heroAlt },
  members: { src: about.membersImage, alt: about.membersAlt },
  highFive: { src: about.highFiveImage, alt: about.highFiveAlt },
  gloves: { src: services.heroImage, alt: "" },
  pool: { src: services.aquaImage, alt: services.aquaImageAlt },
  suspension: { src: about.suspensionImage, alt: about.suspensionAlt },
  pushups: { src: about.pushupsImage, alt: about.pushupsAlt },
  rockSteady: { src: services.boxingImage, alt: services.boxingImageAlt },
};

export const jerry = {
  quote: team.quote,
  by: team.quoteBy,
};
