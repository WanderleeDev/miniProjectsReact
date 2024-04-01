import { fetchData } from "@/app/utils/fecthData";
import { INavigationItem } from "@/models/navigation.interface";
import Link from "next/link";
import Logo from "../assets/shared/logo.svg";
import Image from "next/image";

export default async function Navbar() {
  const navigationData = await fetchData<INavigationItem[]>(
    "http://localhost:3002/api/"
  );
  return (
    <nav>
      <Image src={Logo} alt="logo" width={100} height={100} className="logo" />
      <ul className="flex">
        {navigationData?.map(({ id, section }) => (
          <li key={id}>
            <Link href={`/${section}`}>{section}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
