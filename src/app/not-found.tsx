import Link from "next/link";
import { phones } from "@/lib/content";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="font-display text-5xl text-navy uppercase">That page is not on this site.</h1>
      <p className="mt-5 text-xl">The class line is open on weekdays. Call to join or observe a class.</p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href={phones.callTel} className="gym-btn gym-btn-sky">
          Call {phones.callUs}
        </a>
        <Link href="/" className="gym-btn gym-btn-line-navy">
          Back to PUNCHWORX
        </Link>
      </div>
    </section>
  );
}
