import { Sacramento, Montserrat, Noto_Naskh_Arabic } from "next/font/google";

export const fontSacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sacramento",
});

export const fontMonserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-monserrat",
});

export const fontNotoNaskhArabic = Noto_Naskh_Arabic({
  weight: "400",
  subsets: ["arabic"],
});
