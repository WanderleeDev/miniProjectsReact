import { fetchData } from "@/app/utils/fecthData";
import { INavigationItem } from "@/models/navigation.interface";
import Link from "next/link";
import Logo from "../assets/shared/logo.svg";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

export default async function Navbar() {
  const navigationData = await fetchData<INavigationItem[]>(
    "http://localhost:3002/api/"
  );
  return (
    <nav className="flex items-center justify-between ">
      <Image src={Logo} alt="logo" width={50} height={50} className="logo" />
      <ul className="md:flex gap-8 bg-white/10 backdrop-blur-sm px-28 relative hidden">
        {navigationData?.map(({ id, section },i) => (
          <li className="relative h-full after:absolute after:w-full after:h-[.25rem] after:rounded-sm after:left-0 after:bottom-0 hover:after:bg-white after:transition-colors" key={id}>
            <Link className=" py-10 block" href={`/${section}`}>0{i} {section}</Link>
          </li>
        ))}
      </ul>
      <AiOutlineMenu className="text-[#acaec2] text-4xl md:hidden font-bold" />
    </nav>
  );
}
