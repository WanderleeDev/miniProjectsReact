import SearchBar from "./searchBar";
import Logo from "./logo";
import GalleryCats from "./galleryCats";
import Image from "next/image";
import catBackground from "../../public/assets/HeroImagelg.png";
import SearchBarMobile from "./searchBarMobile";
import CatsProvider from "@/context/CatsProvider";

export default function SearchGallery() {
  return (
    <CatsProvider>
      <section className="bg-clr-1 rounded-[3rem] overflow-hidden">
        <header className="flex flex-col gap-6 p-6 px-4 md:px-24 py-36 relative z-10 text-clr-3">
          <div className="absolute -z-[1] w-full h-full inset-0 rounded-[3rem] hidden sm:block">
            <Image
              priority
              className="object-cover h-full w-full animate-fade-left animate-duration-700 animate-ease-linear"
              src={catBackground}
              quality={80}
              alt="cat background"
            />
          </div>
          <div className="scale-x-75 origin-left">
            <Logo width={280} height={100} />
          </div>
          <p className="max-w-72 pb-6 text-xl">
            Get to know more about your cat breed
          </p>
          <div className="hidden md:block">
            <SearchBar fullSize={true} />
          </div>
          <SearchBarMobile />
        </header>
        <GalleryCats />
      </section>
    </CatsProvider>
  );
}
