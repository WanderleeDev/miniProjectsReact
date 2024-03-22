import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/footer";
import HeaderPage from "@/components/headerPage";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cat wiki",
  description: "Cat-Wiki: Everything you need to know about domestic cats—history, behavior, care, and curiosities. Discover fascinating facts about these adorable felines and how to keep them happy and healthy. Explore the world of cats on Cat-Wiki!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-dvh grid grid-rows-[auto_1fr_auto] px-2 max-w-screen-xl mx-auto pt-2 text-lg scroll`} >
        <HeaderPage />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
