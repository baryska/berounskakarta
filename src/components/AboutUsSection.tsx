import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";

export function AboutUsSection() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-[900px]">
        <div className="rounded-3xl border-[1.5px] border-border bg-surface p-10 md:p-14">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
            <div className="flex-shrink-0">
              <Image
                src="/nove_logo.png"
                alt="Beroun sobě"
                width={1080}
                height={1080}
                className="rounded-full"
                style={{ width: "120px", height: "120px" }}
              />
            </div>
            <div>
              <h2 className="m-0 mb-3 font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-extrabold text-body">
                Berounská karta je <span className="text-primary">náš návrh</span>
              </h2>
              <p className="m-0 mb-5 text-[1.05rem] leading-[1.8] text-muted">
                Jsme <strong>BEROUN SOBĚ</strong> — nezávislá občanská kandidátka, která není napojena na žádnou celostátní stranu. V minulých komunálních volbách jsme získali nejvíce hlasů, přesto jsme skončili v opozici. Tu dobu jsme ale nepromarnili.
              </p>
              <p className="m-0 mb-6 text-[1.05rem] leading-[1.8] text-muted">
                Berounská karta je jedním z konkrétních návrhů, se kterými jdeme do nadcházejících voleb. Věříme, že město má odměňovat ty, kteří v něm žijí. S vaší podporou to dotáhneme do konce.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.berounsobe.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-display text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Zjistěte o nás víc
                  <LuArrowRight size={16} />
                </a>
                <a
                  href="https://www.instagram.com/beroun_sobe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-border px-5 py-2.5 font-display text-sm font-semibold text-body transition hover:border-primary/40 hover:text-primary"
                >
                  <FaInstagram size={16} />
                  Sledujte nás
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
