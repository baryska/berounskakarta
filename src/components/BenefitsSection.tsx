import { LuSquareParking, LuFilm, LuWaves, LuStore } from "react-icons/lu";
import { BenefitCard } from "./BenefitCard";

export function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-[70px] pb-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(60,150,215,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-[1140px]">
        <div className="mb-13 text-center">
          <h2 className="m-0 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold text-body">
            Kde by vám karta pomohla
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
          <BenefitCard
            gradient="linear-gradient(135deg, #3C96D7, #7AC0F0)"
            shadow="0 6px 20px rgba(60,150,215,0.25)"
            icon={<LuSquareParking size={28} color="white" />}
            title="Parkování"
            description="Konec boje o místo. Berounská karta vám zajistí zvýhodněné parkování v centru i rezidenčních zónách — jednoduše, bez byrokracie."
          />
          <BenefitCard
            gradient="linear-gradient(135deg, #FFAF4B, #FFC97A)"
            shadow="0 6px 20px rgba(255,175,75,0.25)"
            icon={<LuFilm size={28} color="white" />}
            title="Kultura & kino"
            description="Zlevněné vstupné do městského kina, muzeí a na další akce Městského kulturního centra."
          />
          <BenefitCard
            gradient="linear-gradient(135deg, #3C96D7, #00C864)"
            shadow="0 6px 20px rgba(60,150,215,0.2)"
            icon={<LuWaves size={28} color="white" />}
            title="Laguna & koupaliště"
            description="Levnější rodinné odpoledne v Laguně nebo na letním koupališti."
          />
          <BenefitCard
            gradient="linear-gradient(135deg, #FFAF4B, #3C96D7)"
            shadow="0 6px 20px rgba(255,175,75,0.2)"
            icon={<LuStore size={28} color="white" />}
            title="Místní obchody"
            description="Slevy u místních – zapojíme berounské obchody, restaurace nebo kroužky pro děti."
          />
        </div>
      </div>
    </section>
  );
}
