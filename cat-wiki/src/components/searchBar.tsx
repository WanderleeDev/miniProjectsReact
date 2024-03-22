"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useContext } from "react";
import CatsContext from "@/context/catsContext";
import { IoMdSearch } from "react-icons/io";
import { ICat } from "@/interfaces/IBreeds.interface";
import DataListCats from "./dataListCats";

interface Props {
  hasBorder?: boolean;
  fullSize?: true;
}

export default function SearchBar({ hasBorder, fullSize }: Props) {
  const catsData = useContext<ICat[]>(CatsContext);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const navigateTo = (route: string) => router.push(`/cat/${route}`);
  const handleChange = (e: React.KeyboardEvent): void => {
    if (e.key !== "Enter") return;
    navigateTo(`${inputValue}`);
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };
  const filterCats = (): ICat[] => {
    const regex = new RegExp(inputValue, "ig");
    return catsData.filter(({ breeds }) => regex.test(breeds[0]?.name));
  };

  return (
    <div className="relative group">
      <label
        className={`w-full rounded-3xl grid grid-cols-[calc(100%-2rem)_2rem] items-center px-6 gap-2 bg-white text-clr-1 overflow-hidden group ${hasBorder && "border-2 border-slate-600"}`}
        htmlFor="search"
      >
        {fullSize}
        <input
          autoComplete="off"
          className={`placeholder:text-clr-1 py-3 text-lg outline-none ${fullSize ? "w-40" : "w-full"}`}
          type="text"
          name="search"
          id="search"
          value={inputValue}
          placeholder="Search"
          onChange={handleInput}
          onKeyUp={handleChange}
        />
        <button className="group" onClick={() => navigateTo(inputValue)}>
          <IoMdSearch
            className="cursor-pointer opacity-0 group-focus-within:opacity-100"
            size={25}
          />
        </button>
      </label>

      <DataListCats cats={filterCats()} />
    </div>
  );
}
