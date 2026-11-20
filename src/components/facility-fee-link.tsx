import Link from "next/link";
import { membershipContent } from "@/lib/content";

export function FacilityFeeLink({ className }: { className?: string }) {
  return (
    <Link href="/questions/#facility-fee" className={className}>
      {membershipContent.facility}
    </Link>
  );
}
