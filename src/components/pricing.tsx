import { membershipContent } from "@/lib/content";
import { FacilityFeeLink } from "@/components/facility-fee-link";
import { Card, CardContent } from "@/components/ui/card";

const items = membershipContent.cards;

export function PricingCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <Card
          key={item.kicker}
          className={
            item.featured
              ? "rounded-none border-0 bg-sky text-[#03285d] ring-0"
              : "rounded-none border border-silver bg-white text-lg text-navy ring-0"
          }
        >
          <CardContent className="space-y-2 p-4 text-lg md:p-6">
            <p className={item.featured ? "text-lg font-bold text-[#03285d]" : "text-lg font-bold text-brass"}>
              {item.kicker}
            </p>
            <p className="font-display text-4xl leading-none md:text-5xl">
              {item.lead}
              {item.unit ? (
                <span className="ml-2 align-middle text-2xl">{item.unit}</span>
              ) : null}
            </p>
            <p className="text-lg leading-relaxed font-bold">
              {item.kicker === "Facility" ? (
                <FacilityFeeLink className="underline underline-offset-4" />
              ) : (
                item.text
              )}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
