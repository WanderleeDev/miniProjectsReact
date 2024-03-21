"use client";
import { IoMdSearch } from "react-icons/io";
import { ICat } from "@/interfaces/IBreeds.interface";
import { useRouter } from "next/navigation";
import fetchCat from "@/helpers/fetchCat";
import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  hasBorder?: boolean
  fullSize?:  true
}

export default function SearchBar({ hasBorder, fullSize }: Props) {
  const router = useRouter();
  const [cats, setCats] = useState<ICat[]>([]);
  const [backup, setBackup] = useState<ICat[]>([]);
  const [inputValue, setInputValue] = useState("");

  const navigateTo = (route: string) => router.push(`/cat/${route}`);
  const handleChange = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter") navigateTo(inputValue);
  };
  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };
  const filterCats = ():  ICat[] => {
    const regex = new RegExp(inputValue, "ig");
    return backup.filter(({ breeds }) => regex.test(breeds[0]?.name));
  };

  useEffect(() => {
    fetchCat<ICat[]>(`${process.env.NEXT_PUBLIC_API_CAT ?? ""}images/search?`, {
      has_breeds: "1",
      limit: "100",
    }).then((data) => {
      setCats([...data]);
      setBackup([...data])      
    });
  }, []);

  return (
    <div className="relative group">
      <label
        className={`w-full rounded-3xl grid grid-cols-[calc(100%-2rem)_2rem] items-center px-6 gap-2 bg-white text-clr-1 overflow-hidden group ${hasBorder && "border-2 border-slate-600"}`}
        htmlFor="search"
      >
        {fullSize}
        <input
          autoComplete="off"
          className={`placeholder:text-clr-1 py-3 text-lg outline-none ${fullSize ? 'w-40' : 'w-full'}`}
          type="text"
          name="search"
          id="search"
          value={inputValue}
          placeholder="Search"
          onChange={(e) => {
            if (inputValue.length === 0) setCats(backup);

            setCats(filterCats());
            handleInput(e);
          }}
          onKeyUp={handleChange}
        />
        <button className="group" onClick={() => navigateTo(inputValue)}>
          <IoMdSearch
            className="cursor-pointer opacity-0 group-focus-within:opacity-100"
            size={25}
          />
        </button>
      </label>

      {cats.length > 0 && (
        <ul className="grid bg-white text-black py-2 max-h-56 overflow-y-scroll rounded-2xl translate-y-4 absolute w-full  opacity-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity">
          {cats.map(({ id, breeds }) => (
            <li
              className="w-full rounded-3xl px-6 py-3 hover:bg-slate-100"
              key={id}
              onClick={() => navigateTo(id)}
            >
              {breeds[0]?.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
