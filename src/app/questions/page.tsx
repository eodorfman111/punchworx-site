import type { Metadata } from "next";
import { FaqList } from "@/components/faq-list";
import { faqContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Questions",
  description: "Frequently asked questions about PunchWorX classes, assessments, caregivers, and Aqua-Box Fitness in Lakeland.",
};

export default function QuestionsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-16">
      <h1 className="font-display text-4xl text-navy uppercase md:text-5xl">{faqContent.heading}</h1>
      <div className="mt-8">
        <FaqList />
      </div>
    </section>
  );
}
