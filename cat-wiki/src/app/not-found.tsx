import Image from "next/image";
import notFoundImage from "../../public/assets/404.webp";
import HighlightLink from "@/components/highlightLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "We can't seem to find the page you were looking for",
}

export default function NotFoundPage() {
  return (
    <figure className="grid sm:grid-cols-2 place-items-center h-full place-content-center gap-14 pb-12">
      <Image
        className="aspect-auto drop-shadow-xl"
        src={notFoundImage}
        alt="not found image"
        width={270}
        height={500}
      />
      <div className="flex flex-col gap-12">
        <figcaption className="text-font-3xl font-bold text-center sm:text-left ">404</figcaption>
        <p className="sm:text-font-lg leading-snug">We can't seem to find the page you were looking</p>
        <HighlightLink text="Go back home" route="/" /> 
      </div>
    </figure>
  );
}
