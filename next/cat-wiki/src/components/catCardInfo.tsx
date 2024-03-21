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
      <Link className="grid grid-cols-[auto_1fr] gap-10" href={route}>
        <CatCard src={url} size={160} alt={title} />
        <div className="grid gap- grid-rows-[auto_1fr] gap-4">
          <figcaption className="text-font-md font-medium">
            {`${indexCat}.  ${title}`}
            </figcaption>
          <p>{description}</p>
        </div>
      </Link>
    </figure>
  );
}
