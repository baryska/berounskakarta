import { LuHouse, LuUsers, LuHeart } from "react-icons/lu";

export function VisionSection() {
  return (
    <section className="bg-surface px-6 pt-20 pb-[70px]">
      <div className="mx-auto max-w-[800px] text-center">
        <div className="mb-7 flex justify-center gap-2.5">
          <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-border">
            <LuHouse size={24} color="#3C96D7" />
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[rgba(255,175,75,0.2)]">
            <LuUsers size={24} color="#FFAF4B" />
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[rgba(0,200,100,0.15)]">
            <LuHeart size={24} color="#00C864" />
          </div>
        </div>

        <h2 className="m-0 mb-5 font-display text-[clamp(1.9rem,3.5vw,2.8rem)] leading-[1.15] font-extrabold text-body">
          Město, které myslí
          <br />
          <span className="text-primary">na své obyvatele</span>
        </h2>

        <p className="mx-auto m-0 max-w-[640px] text-lg leading-[1.8] text-muted">
          Věříme, že město by mělo přinášet výhody těm, kteří v něm žijí a mají tu trvalé bydliště. Není
          to žádná složitá věda – chceme ulevit rodinným rozpočtům a zároveň
          podpořit naše místní kavárny, kroužky a služby. Abychom se tu měli
          zkrátka lépe.
        </p>

        <div className="mt-9 flex items-center justify-center gap-3">
          <div className="h-[3px] w-10 rounded-sm bg-secondary" />
          <div className="h-[3px] w-20 rounded-sm bg-primary" />
          <div className="h-[3px] w-10 rounded-sm bg-accent" />
        </div>
      </div>
    </section>
  );
}
