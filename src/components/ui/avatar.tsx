import { cn, initials } from "@/lib/utils";

export function Avatar({
  name,
  color,
  size = "md",
  className,
}: {
  name: string;
  color?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = { sm: "h-7 w-7 text-[10px]", md: "h-9 w-9 text-xs", lg: "h-11 w-11 text-sm" };
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold text-white shrink-0",
        sizes[size],
        className
      )}
      style={{ backgroundColor: color || "#0F9488" }}
      aria-label={name}
      title={name}
    >
      {initials(name)}
    </div>
  );
}

export function AvatarStack({
  people,
  max = 4,
}: {
  people: { name: string; color?: string }[];
  max?: number;
}) {
  const shown = people.slice(0, max);
  const extra = people.length - max;
  return (
    <div className="flex -space-x-2">
      {shown.map((p) => (
        <Avatar key={p.name} name={p.name} color={p.color} size="sm" className="ring-2 ring-card" />
      ))}
      {extra > 0 && (
        <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-[10px] font-semibold text-slate-600 ring-2 ring-card dark:bg-slate-700 dark:text-slate-200">
          +{extra}
        </div>
      )}
    </div>
  );
}
