export function Marquee({ text }: { text: string }) {
  return (
    <div className="border-y border-white/15 bg-panel px-4 py-3">
      <p className="text-center text-lg font-bold text-navy md:text-2xl">{text}</p>
    </div>
  );
}
