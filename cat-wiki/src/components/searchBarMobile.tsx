"use client";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import SearchBar from "./searchBar";
import { useState } from "react";

export default function SearchBarMobile() {
  const [isViewSearchBar, setIsViewSearchBar] = useState(false);

  return (
    <div className="md:hidden">
      <div
        className={`grid gap-4 fixed top-0 w-full left-0 p-4 bg-white transition-all duration-500 shadow-[rgba(0,0,0,0.45)_0px_25px_20px_-20px] ${!isViewSearchBar && "hiddenMobileBar"}`}
      >
        <button
          onClick={() => setIsViewSearchBar(false)}
          title="close mobile menu"
          aria-label="close mobile menu"
          className="justify-self-end text-black hover:bg-slate-100 p-3 rounded-lg"
          type="button"
        >
          <AiOutlineClose />
        </button>
        <SearchBar hasBorder={true} fullSize={false}/>
      </div>

      <button
        onClick={() => setIsViewSearchBar(!isViewSearchBar)}
        aria-label="toggle search bar mobile"
        className={`w-fit flex bg-white text-black rounded-3xl py-3 px-5 gap-6 items-center transition-opacity ${isViewSearchBar && 'opacity-0 pointer-events-none'}`}
      >
        Search
        <IoMdSearch />
      </button>
    </div>
  );
}
