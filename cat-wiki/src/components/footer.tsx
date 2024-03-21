import Logo from "./logo";

export default function Footer(): JSX.Element {
  return (
    <footer className="flex flex-col bg-clr-1 gap-4 p-6 pt-8 rounded-tr-[3rem] rounded-tl-[3rem] text-clr-3 md:flex-row md:items-center md:justify-between">
      <div className="hidden md:block">
        <Logo />
      </div>
      <div className="text-xs lg:text-base flex items-center flex-col md:flex-row">
        <p>
          <span>&#169;</span> created by
          <a
            className="font-bold px-1"
            href="https://github.com/WanderleeDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            WanderleeDev
          </a>
        </p>
        -&nbsp;
        <p>
          <a
            className="font-bold px-1"
            href="https://legacy.devchallenges.io/challenges/f4NJ53rcfgrP6sBMD2jt"
            target="_blank"
            rel="noopener noreferrer"
          >
            devChallenges.io
          </a>
          (legacy) 2024
        </p>
      </div>
    </footer>
  );
}
