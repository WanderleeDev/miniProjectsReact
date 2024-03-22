import { ICat } from "@/interfaces/IBreeds.interface";
import { useRouter } from "next/navigation";

interface Props {
  cats: ICat[];
}

export default function DataListCats({ cats }: Props): JSX.Element {
  const router = useRouter();
  const navigateTo = (route: string) => {
    router.push(`/cat/${route}`);
  };

  return (
    <ul
      className={`grid bg-white text-black py-2 max-h-56 overflow-y-scroll rounded-2xl translate-y-4 absolute w-full  opacity-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity`}
    >
      {cats.map(({ id, breeds }) => (
        <li
          className="w-full rounded-3xl px-6 py-3 hover:bg-slate-100"
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
