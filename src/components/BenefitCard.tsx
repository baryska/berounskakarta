export function BenefitCard({
  gradient,
  shadow,
  icon,
  title,
  description,
}: {
  gradient: string;
  shadow: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="benefit-card rounded-3xl border-[1.5px] border-border bg-surface p-8 pb-6">
      <div
        className="mb-5 flex h-14 w-14 items-center rounded-2xl"
        style={{
          background: gradient,
          boxShadow: shadow,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>
      <h3 className="mb-2.5 font-display text-lg font-bold text-body">
        {title}
      </h3>
      <p className="m-0 text-[0.95rem] leading-relaxed text-subtle">
        {description}
      </p>
    </div>
  );
}
