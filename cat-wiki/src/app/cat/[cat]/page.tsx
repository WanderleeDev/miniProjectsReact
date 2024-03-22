import CatProfile from "@/components/catProfile";
import GridCats from "@/components/gridCats";
import fetchCat from "@/helpers/fetchCat";
import formatString from "@/helpers/formatString";
import { ISingleBreed } from "@/interfaces/IBreeds.interface";
import { IParamCat } from "@/interfaces/IParamCat.interface";
import ErrorBoundary from "@/utils/ErrorBoundary";
import Loader from "@/utils/Loader/loader";
import { Suspense } from "react";

export default async function CatInfo({ params: { cat } }: IParamCat) {
  const formatParam = formatString(cat, {
    hasReplaceAll: true,
    toReplace: "%20",
    replaceWith: "_",
  });
  const catData = await fetchCat<ISingleBreed[]>(
    `${process.env.NEXT_PUBLIC_API_CAT}breeds/search?`,
    { q: formatParam },
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
    alt_names,
    image,
  } = catData[0];

  return (
    <article className="flex flex-wrap gap-8 md:gap-24 justify-center md:justify-normal">
      <Suspense fallback={<Loader />}>
        <CatProfile
          title={name}
          alt={alt_names || `${name} photo`}
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
          url={image.url}
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
