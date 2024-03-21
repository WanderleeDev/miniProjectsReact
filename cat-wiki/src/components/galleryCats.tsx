import { fetchData } from "@/helpers/fetchData,";
import { ICat } from "@/interfaces/IBreeds.interface";
import ErrorBoundary from "@/utils/ErrorBoundary";
import Link from "next/link";
import { Suspense } from "react";
import CatCard from "./catCard";
import HighlightLink from "./highlightLink";

const url: string = `${process.env.NEXT_PUBLIC_API_CAT}images/search?` ?? "";
const params = {
  limit: "4",
  page: "0",
  'has_breeds': '1'
};

const catData = fetchData<ICat[]>({ url, params });

export default function GalleryCats( ) {
  const razas = catData.read();

  return (
    <div className="bg-clr-2 px-4 text-clr-1 flex flex-col gap-10  py-12 rounded-br-[3rem] rounded-bl-[3rem] md:px-24">
      <span className="text-lg highlight-line">Most Searched Breeds</span>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <p className="text-font-xl font-bold max-w-md leading-tight">
          66+ Breeds For you to discover
        </p>
        <HighlightLink text="See more" route="/breeds" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-12">
        <ErrorBoundary>
          <Suspense fallback={<div>Cargando ...</div>}>
            {razas.map(({ id, url, breeds }) => (
              <Link href={`cat/${id}`} key={id}>
                <CatCard
                  size={250}
                  alt={breeds?.[0].name}
                  src={url}
                  hasTitle={true}
                  key={id}
                />
              </Link>
            ))}
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}
