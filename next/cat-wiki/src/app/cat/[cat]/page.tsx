import CatProfile from "@/components/catProfile";
import GridCats from "@/components/gridCats";
import fetchCat from "@/helpers/fetchCat";
import { ICat } from "@/interfaces/IBreeds.interface";
import { IParamCat } from "@/interfaces/IParamCat.interface";
import ErrorBoundary from "@/utils/ErrorBoundary";
import Loader from "@/utils/loader";
import { Suspense } from "react";

export default async function CatInfo({ params: { cat } }: IParamCat) {
  const { breeds, url } = await fetchCat<ICat>(
    `${process.env.NEXT_PUBLIC_API_CAT}images/${cat}`,
  );
  
  const {
    name,
    description,
    adaptability,
    affection_level,
    child_friendly,
    grooming,
    intelligence,
    health_issues,
    social_needs,
    stranger_friendly,
    id,
  } = breeds?.[0];

  return (
    <article className="flex flex-wrap gap-8 md:gap-24 justify-center md:justify-normal">
      <Suspense fallback={<Loader />}>
        <CatProfile
          alt={name}
          description={description}
          rowTable={{
            adaptability,
            affection_level,
            child_friendly,
            grooming,
            intelligence,
            health_issues,
            social_needs,
            stranger_friendly,
          }}
          url={url}
        />
      </Suspense>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <GridCats breed={name} catID={id} />
        </Suspense>
      </ErrorBoundary>
    </article>
  );
}
