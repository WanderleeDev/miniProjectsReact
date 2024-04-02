import { Bellefair, Barlow_Condensed } from "next/font/google";

export const bellefair = Bellefair({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bellefair",
  weight: ["400"],
});

export const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-condensed",
  weight: ["400", "500", "600", "700", "800", "900"],
});
