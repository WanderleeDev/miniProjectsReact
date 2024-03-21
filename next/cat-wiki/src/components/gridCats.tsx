import fetchCat from "@/helpers/fetchCat";
import CatCard from "./catCard";
import { ICat } from "@/interfaces/IBreeds.interface";

interface Props {
  catID:string,
  breed: string
}

export default async function GridCats({ catID, breed }: Props) {
  const cats = await fetchCat<ICat[]>(
    `${process.env.NEXT_PUBLIC_API_CAT}images/search?`,
    {
      limit: "8",
      breed_ids: catID,
    },
  );

  return (
    <figure className="flex flex-col gap-12 basis-full pb-24">
      <figcaption className="text-font-lg font-semibold">
        Other photos
      </figcaption>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
      {cats.map(({ url, id }) => (
        <CatCard key={id} alt={breed} src={url} size={250} styles={['w-fit']}/>
      ))}
      </div>
    </figure>
  );
}
