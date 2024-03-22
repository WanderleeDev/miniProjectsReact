import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

interface Props {
  route: string;
  text: string;
  label:  string;
}

export default function HighlightLink({ route, text, label }: Props) {
  return (
    <Link
      className="flex items-center gap-2 text-clr-highlight font-bold w-fit group"
      href={route}
      aria-label={label}
      title={label}
    >
      {text}
      <FaLongArrowAltRight className="group-hover:animate-fade-left group-hover:animate-infinite group-hover:animate-duration-[1100ms] group-hover:animate-ease-in" />
    </Link>
  );
}
