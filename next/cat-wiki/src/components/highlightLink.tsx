import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

interface Props {
  route: string;
  text: string;
}

export default function HighlightLink({ route, text }: Props) {
  return (
    <Link
      className="flex items-center gap-2 text-clr-highlight font-bold w-fit group"
      href={route}
    >
      {text}
      <FaLongArrowAltRight className="group-hover:animate-fade-out-right  group-hover:animate-duration-1000  group-hover:animate-iteration-count-infinite" />
    </Link>
  );
}
