import CatCard from "./catCard"
import DataTable from "./dataTable"

interface Props {
  url: string,
  alt: string
  rowTable: Record<string, number>,
  description: string,
}

export default function CatProfile({ alt, rowTable, url, description }: Props) {
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
      <div className="flex flex-col gap-8 max-w-xl xl:max-w-2xl">
        <h2 className="text-font-lg font-semibold">{alt}</h2>
        <p>{description}</p>
        <DataTable
          rowTable={rowTable}
        />
      </div>
    </>
  )
}
