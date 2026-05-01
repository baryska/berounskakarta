export function Step({
  number,
  color,
  title,
  description,
}: {
  number: number;
  color: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4.5 rounded-[1.25rem] border-[1.5px] border-border bg-white p-5.5 shadow-[0_4px_20px_rgba(60,150,215,0.08)]">
      <div
        className="flex min-w-[44px] h-11 items-center justify-center rounded-xl font-display text-lg font-extrabold text-white"
        style={{ backgroundColor: color }}
      >
        {number}
      </div>
      <div>
        <div className="mb-1 font-display text-base font-bold text-body">
          {title}
        </div>
        <div className="text-[0.92rem] leading-relaxed text-subtle">
          {description}
        </div>
      </div>
    </div>
  );
}
