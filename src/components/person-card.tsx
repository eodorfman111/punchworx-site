function partsOf(role: string) {
  return role
    .split(/,|\band\b/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function PersonCard({
  name,
  role,
  image,
  alt,
  logo = false,
}: {
  name: string;
  role: string;
  image: string;
  alt: string;
  logo?: boolean;
}) {
  const parts = partsOf(role);
  const title = parts[0] ?? role;
  const tags = parts.slice(1);

  return (
    <article className="overflow-hidden rounded-xl bg-white">
      <div className={logo ? "flex aspect-[4/5] items-center justify-center bg-[#f4f7fb]" : "aspect-[4/5] overflow-hidden"}>
        <img
          src={image}
          alt={alt}
          className={logo ? "h-40 w-40 object-contain" : "h-full w-full object-cover object-[center_18%]"}
        />
      </div>
      <div className="border-t-4 border-brass px-4 py-4">
        <h3 className="font-display text-xl tracking-wide text-navy uppercase">{name}</h3>
        <p className="mt-2 text-base leading-snug text-[#122033]">{title}</p>
        {tags.length > 0 ? <p className="mt-2 text-sm font-bold text-brass">{tags.join(" · ")}</p> : null}
      </div>
    </article>
  );
}
