"use client";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Loader from "@/utils/loader";

export default function CatVideo() {
  const [isClient, setIsClient] = useState(false);
  const video = "https://www.youtube.com/watch?v=h5RVJOfuOKI";

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="grid gap-12 text-clr-1 md:px-24 py-20 px-2 lg:gap-4 lg:grid-cols-2">
      <div className="lg:max-w-md grid lg:justify-self-end col-[1/2] row-[1/2] lg:col-[2/3] lg:row-[1/2] self-center">
        <h2 className="text-font-xl font-bold leading-tight highlight-line after:-top-4">
          The most expensive cat
        </h2>
        <p>
          A look at the human fascination with these animals and how this
          passion can end up costing a fortune. In this top 15.
        </p>
      </div>
      <div className="bg-slate-300 col-[1/2] row-[2/3] lg:col-[1/3] lg:row-[1/2] relative aspect-video w-full lg:max-w-sm xl:max-w-md lg:justify-self-start justify-self-center rounded-[1rem] overflow-hidden shadow-md">
        {isClient && (
          <ReactPlayer
            className="absolute"
            fallback={<Loader />}
            width="100%"
            height="100%"
            controls={true}
            url={video}
          />
        )}
      </div>
    </section>
  );
}
