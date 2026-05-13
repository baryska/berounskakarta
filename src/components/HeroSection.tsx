import Image from "next/image";
import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import { SocialIcon } from "./SocialIcon";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #2A7AB8 0%, #3C96D7 55%, #5AADE8 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute -top-[120px] -right-[100px] h-[500px] w-[500px] rounded-full opacity-25"
        style={{ background: "#7AC0F0", filter: "blur(60px)" }}
      />

      <svg
        className="pointer-events-none absolute top-0 right-0 h-full w-[55%] opacity-[0.12]"
        viewBox="0 0 400 600"
        preserveAspectRatio="xMaxYMid slice"
      >
        <path
          d="M380 0 C320 80, 260 120, 300 200 C340 280, 380 320, 310 420 C240 520, 180 560, 200 620"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="32"
        />
        <path
          d="M420 0 C360 100, 290 140, 330 240 C370 340, 400 380, 330 490 C260 600, 200 640, 220 700"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="18"
        />
      </svg>

      <nav className="relative z-10 mx-auto flex max-w-[1140px] items-center justify-between px-6 pt-6">
        <a href="https://www.berounsobe.eu" target="_blank" rel="noopener noreferrer">
          <Image
            src="/nove_logo_hor.png"
            alt="Beroun sobě"
            width={1414}
            height={199}
            className="h-8 w-auto brightness-0 invert"
            style={{ height: "32px", width: "auto" }}
            preload
          />
        </a>
        <div className="flex items-center gap-2">
          <SocialIcon href="https://www.instagram.com/beroun_sobe/" label="Instagram">
            <FaInstagram size={18} color="white" />
          </SocialIcon>
          <SocialIcon href="https://www.facebook.com/Berounsobeeu" label="Facebook">
            <FaFacebookF size={18} color="white" />
          </SocialIcon>
          <a
            href="https://www.berounsobe.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hidden rounded-full bg-white/15 px-5 py-2 font-display text-sm font-semibold text-white transition hover:bg-white/25 sm:block"
          >
            berounsobe.eu
          </a>
        </div>
      </nav>

      <div className="relative z-[2] mx-auto max-w-[1140px] px-6 pt-14 pb-[140px]">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <h1 className="fadein-2 m-0 mb-6 font-display text-[clamp(2.4rem,4.5vw,3.6rem)] leading-[1.1] font-extrabold text-white">
              Berounská karta.
              <br />
              <span className="text-gold">
                Výhody pro ty,
                <br />
                kteří tu jsou doma.
              </span>
            </h1>

            <p className="fadein-3 m-0 max-w-[480px] text-lg leading-[1.75] text-white/88">
              Kdo má v Berouně trvalé bydliště, měl by to poznat i v běžném
              životě. Připravili jsme jednoduchou sousedskou kartu plnou výhod.
              Uvedeme ji k životu, pokud nám dáte ve volbách svou důvěru.
            </p>
          </div>

          <div className="flex items-center justify-center py-10">
            <div className="card-float w-full max-w-[90vw]">
              <Image
                src="/berounska-karta.png"
                alt="Berounská karta"
                width={931}
                height={675}
                className="block rounded-[18px]"
                style={{ width: "100%", height: "auto" }}
                preload
              />
            </div>
          </div>
        </div>
      </div>

      <svg
        className="block w-full"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        style={{ height: "70px", marginTop: "-2px" }}
      >
        <path
          d="M0 0 Q360 70 720 35 Q1080 0 1440 50 L1440 70 L0 70 Z"
          fill="#F7F8FA"
        />
      </svg>
    </section>
  );
}
