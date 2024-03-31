import Image from "next/image";
interface Props {
  src: string;
  title: string;
  alt: string;
  hasTitle?: boolean;
  size?: number;
  styles?: string[];
}

export default function CatCard({ alt, src, hasTitle, size, title, styles }: Props) {
  return (
    <figure className="mx-auto lg:mx-[initial]">
      <div className="relative first:after:absolute first:after:w-12 first:after:h-5/6 first:after:top-2/4 first:after:-translate-y-2/4 first:after:bg-[#dec68b] first:after:rounded-xl first:after:-left-2 first:after:-z-10">
        <Image
          className={`bg-gray-300 rounded-3xl aspect-square object-cover ${styles && styles.join(" ")}`}
          src={src}
          alt={alt}
          width={size ?? 200}
          height={size ?? 200}
        />
      </div>
      <figcaption
        className={`${!hasTitle && "hidden"} font-medium text-xs lg:text-base pt-4 text-center`}
      >
        {title}
      </figcaption>
    </figure>
  );
}
