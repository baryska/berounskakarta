import { Badge } from "./Badge";
import { Step } from "./Step";

export function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-surface px-6 py-20">
      <svg
        className="absolute top-0 left-0 block w-full"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ height: "60px" }}
      >
        <path d="M0 60 Q360 0 720 40 Q1080 80 1440 20 L1440 0 L0 0 Z" fill="#fff" />
      </svg>

      <div className="relative mx-auto max-w-[1000px] pt-5">
        <div className="grid grid-cols-1 items-center gap-15 md:grid-cols-2">
          <div>
            <div className="mb-5">
              <Badge>Jak to bude fungovat</Badge>
            </div>
            <h2 className="m-0 mb-8 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-body">
              Žádné složité
              <br />
              <span className="text-primary">papírování</span>
            </h2>
            <p className="m-0 mb-8 text-[1.1rem] leading-[1.8] text-muted">
              Bude to jednoduché. Kartu budete mít ve svém telefonu jako QR
              kód. Vždycky po ruce, když půjdete plavat nebo na kávu.
            </p>
            <p className="m-0 text-[1.1rem] leading-[1.8] text-muted">
              A pokud nefandíte chytrým telefonům, samozřejmě pro vás
              zajistíme i klasickou plastovou kartičku do peněženky.
            </p>
          </div>

          <div className="flex flex-col gap-4.5">
            <Step number={1} color="#3C96D7" title="Přijdete k volbám" description="Svou důvěrou nám umožníte plán uskutečnit." />
            <Step number={2} color="#00C864" title="Dostanete kartu" description="QR kód do telefonu nebo plastová kartička – vyberte si." />
            <Step number={3} color="#FFAF4B" title="Užíváte si výhody" description="Ukážete kartu a hned ušetříte – v Laguně, v kině, u pekaře." />
          </div>
        </div>
      </div>
    </section>
  );
}
