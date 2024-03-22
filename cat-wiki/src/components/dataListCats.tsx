import { ICat } from "@/interfaces/IBreeds.interface";
import { useRouter } from "next/navigation";

interface Props {
  cats: ICat[];
  size: boolean;
}

export default function DataListCats({ cats, size }: Props): JSX.Element {
  const router = useRouter();
  const navigateTo = (route: string) => {
    router.push(`/cat/${route}`);
  };

  return (
    <ul
      className={`grid bg-white text-black py-2 max-h-56 overflow-y-scroll rounded-[.2rem] scroll translate-y-4 absolute w-full pointer-events-none  opacity-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity ${size ? "w-80" : "w-full"}`}
    >
      {cats.map(({ id, breeds }) => (
        <li
          className="w-full rounded-3xl px-6 py-3 hover:bg-slate-100 hover:pointer-events-auto"
          key={id}
          onClick={() => navigateTo(breeds[0]?.name)}
        >
          {breeds[0]?.name}
        </li>
      ))}
      {cats.length <= 0 && (
        <li className="w-full rounded-3xl px-6 py-3 hover:bg-slate-100">
          No results
        </li>
      )}
    </ul>
  );
}
