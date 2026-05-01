import type { Metadata } from "next";
import { Inria_Sans } from "next/font/google";
import "./globals.css";

const inriaSans = Inria_Sans({
  variable: "--font-inria-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Berounská karta – Výhody pro místní",
  description:
    "Kdo má v Berouně trvalé bydliště, měl by to poznat i na běžném životě. Sousedská karta plná slev.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={inriaSans.variable}>
      <body>{children}</body>
    </html>
  );
}
