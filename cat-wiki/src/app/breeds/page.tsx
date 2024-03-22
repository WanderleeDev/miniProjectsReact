import CatCardInfo from "@/components/catCardInfo";
import { fetchData } from "@/helpers/fetchData,";
import { Suspense } from "react";
import Loader from "@/utils/loader";
import { ICat } from "@/interfaces/IBreeds.interface";

const data = fetchData<ICat[]>({
  url: `${process.env.NEXT_PUBLIC_API_CAT ?? ""}images/search?`,
  params: {
    has_breeds: "1",
    limit: "10",
    page: "0",
  },
});

export default function Blog() {
  const cats = data.read();

  return (
    <section className="grid grid-rows-[auto_1fr] gap-14">
      <h2 className="text-font-md font-semibold">
        Top 10 most searched breeds
      </h2>
      <Suspense fallback={<Loader />}>
        <div className="grid gap-12 pb-16">
          {cats.map(({ url, breeds, id }, i) => (
            <CatCardInfo
              title={breeds[0]?.name}
              description={breeds[0]?.description}
              url={url}
              key={id}
              route={`/cat/${breeds[0]?.name}`}
              indexCat={i + 1}
            />
          ))}
          <button
            className="bg-black text-white w-fit py-3 px-6 rounded-lg hover:text-black hover:bg-white transition-colors border-current border-2 font-medium mx-auto"
            type="button"
          >
            More Cats
          </button>
        </div>
      </Suspense>
    </section>
  );
}
