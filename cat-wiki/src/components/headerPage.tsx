import Greeting from "@/utils/greeting";
import Logo from "./logo";

export default function HeaderPage() {
  return (
    <header>
      <Greeting />
      <h1 className="text-clr-1 pt-4 pb-6" title="Cat wiki">
        <Logo />
      </h1>
    </header>
  );
}
