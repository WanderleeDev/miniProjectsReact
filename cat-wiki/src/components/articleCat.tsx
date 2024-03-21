import Image, { StaticImageData } from "next/image";
import HighlightLink from "./highlightLink";
import cat1 from "../../public/assets/cat1.png";
import cat2 from "../../public/assets/cat2.png";
import cat3 from "../../public/assets/cat3.png";

export default function ArticleCat() {
  const photos: StaticImageData[] = [cat1, cat2, cat3];

  return (
    <section className="grid gap-12 text-clr-1 md:px-24 py-20 px-2 md:gap-4 lg:grid-cols-2">
      <div className="self-center lg:max-w-md grid gap-10">
        <h2 className="text-font-xl font-bold leading-tight highlight-line after:-top-4">
          Why should you have a cat?
        </h2>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <HighlightLink text="READ MORE" route="/blog" />
      </div>

      <figure className="grid grid-cols-12 grid-rows-5 justify-self-center lg:max-w-lg lg:justify-self-end">
        {photos.map((photo, i) => (
          <Image
            key={i}
            src={photo}
            alt={`photo cat ${i}`}
            className={`
                p-2 rounded-lg
                ${i === 0 && "col-[3/8] row-[3/6]"} 
                ${i === 1 && "col-[1/8] row-[1/3]"} 
                ${i === 2 && "col-[8/13] row-[1/4]"} 
              `}
          />
        ))}
      </figure>
    </section>
  );
}
