import CatCard from "./catCard";
import DataTable from "./dataTable";

interface Props {
  url: string;
  alt: string;
  rowTable: Record<string, number>;
  description: string;
  title: string;
}

export default function CatProfile({
  alt,
  rowTable,
  url,
  description,
  title,
}: Props) {
  const catCardStyles = [
    "size-52",
    "lg:size-72",
    "bg-gray-400",
    "rounded-lg",
    "mx-auto",
    "md:mx-0",
  ];

  return (
    <>
      <CatCard styles={catCardStyles} src={url} size={288} alt={alt} />
      <div className="flex flex-col mx-auto gap-8 max-w-xl lg:mx-[initial] xl:max-w-2xl">
        <h2 className="text-font-lg font-semibold">{title}</h2>
        <p>{description}</p>
        <DataTable rowTable={rowTable} />
      </div>
    </>
  );
}
