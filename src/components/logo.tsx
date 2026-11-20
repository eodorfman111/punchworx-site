export function Logo({
  className = "h-11 w-11",
}: {
  className?: string;
}) {
  return (
    <img
      src="/images/logo-mark.png"
      alt=""
      width={570}
      height={570}
      className={`block max-w-none bg-navy object-contain ${className}`}
    />
  );
}
