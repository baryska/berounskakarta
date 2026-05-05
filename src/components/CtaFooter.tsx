import Image from "next/image";
import { LuArrowRight, LuMail } from "react-icons/lu";
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SocialIcon } from "./SocialIcon";

export function CtaFooter() {
  return (
    <section
      className="relative overflow-hidden px-6 pt-20 pb-0"
      style={{
        background: "linear-gradient(145deg, #2A7AB8 0%, #3C96D7 60%, #5AADE8 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute -right-20 -bottom-[100px] h-[400px] w-[400px] rounded-full opacity-30"
        style={{ background: "#7AC0F0", filter: "blur(60px)" }}
      />
      <div
        className="pointer-events-none absolute -top-[60px] left-[10%] h-[250px] w-[250px] rounded-full opacity-20"
        style={{ background: "#00C864", filter: "blur(60px)" }}
      />

      <div className="relative z-[2] mx-auto max-w-[720px] text-center">
        <h2 className="m-0 mb-5 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.15] font-extrabold text-white">
          Dává vám to smysl?
        </h2>

        <p className="mx-auto m-0 mb-9 max-w-[580px] text-lg leading-[1.85] text-white/90">
          Berounská karta je zatím jen na papíře. Je to náš slib vám,
          našim sousedům. Pokud se vám tato myšlenka líbí, pomozte nám ji
          zrealizovat. S vaší podporou v komunálních volbách můžeme tento plán
          proměnit ve skutečnost.
        </p>

        {/* <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.berounsobe.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-display text-base font-bold text-primary transition hover:bg-white/90"
          >
            Poznejte celý náš program
            <LuArrowRight size={18} strokeWidth={2.5} />
          </a>
        </div> */}

        <p className="m-0 mt-8 font-display text-xl font-bold text-gold">
          Beroun má na víc!
        </p>
      </div>

      <footer className="relative z-[2] mt-16 border-t border-white/15 py-10">
        <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/nove_logo_hor.png"
              alt="Beroun sobě"
              width={1414}
              height={199}
              className="brightness-0 invert"
              style={{ height: "26px", width: "auto" }}
            />
          </div>

          <div className="flex items-center gap-3">
            <SocialIcon href="https://www.instagram.com/beroun_sobe/" label="Instagram">
              <FaInstagram size={16} color="white" />
            </SocialIcon>
            <SocialIcon href="https://www.facebook.com/Berounsobeeu" label="Facebook">
              <FaFacebookF size={16} color="white" />
            </SocialIcon>
          </div>

          <div className="text-center text-sm text-white/50 md:text-right">
            <a href="mailto:info@berounsobe.eu" className="inline-flex items-center gap-1.5 text-white/70 transition hover:text-white">
              <LuMail size={14} />
              info@berounsobe.eu
            </a>
            <div className="mt-1">&copy; 2026 BEROUN SOB&#282;</div>
          </div>
        </div>
      </footer>
    </section>
  );
}
