import Image from "next/image";
interface Props {
  src: string;
  alt: string;
  hasTitle?: boolean;
  size?: number
  styles?: string[]
}

export default function CatCard({ alt, src, hasTitle, size, styles }: Props) {
  
  return (
    <figure className="z-0 first:relative first:after:absolute first:after:w-full first:after:h-32 first:after:top-4 first:after:bg-[#dec68b] first:after:rounded-xl first:after:-left-2 first:after:-z-10">
      <Image
        className={`bg-gray-300 rounded-3xl aspect-square object-cover ${ styles && styles.join(' ')}`}
        src={src}
        alt={alt}
        width={ size ?? 200}
        height={ size ?? 200}
      />
      <figcaption
        className={`${!hasTitle && "hidden"} font-medium text-xs md:text-base pt-4`}
      >
        {alt}
      </figcaption>
    </figure>
  );
}
