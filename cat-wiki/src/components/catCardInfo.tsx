import Link from "next/link";
import CatCard from "./catCard";

interface Props {
  route: string;
  description: string;
  title: string;
  url: string;
  indexCat: number;
}

export default function CatCardInfo({
  route,
  description,
  title,
  url,
  indexCat,
}: Props) {
  return (
    <figure>
      <Link className="grid sm:grid-cols-[auto_1fr] gap-10" href={route}>
        <div className="mx-auto sm:mx-[initial]">
          <CatCard src={url} size={180} alt={title} />
        </div>
        <div className="grid gap- grid-rows-[auto_1fr] gap-4">
          <figcaption className="text-font-md font-medium">
            {`${indexCat}.  ${title}`}
          </figcaption>
          <p className="max-h-28 overflow-y-scroll lg:overflow-auto lg:max-h-max scroll">{description}</p>
        </div>
      </Link>
    </figure>
  );
}
