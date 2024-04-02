import Link from "next/link";

export default function Home() {
  return (
    <section className="grid gap-4 place-items-center h-full lg:grid-cols-[10%_1fr_1fr_10%] lg:items-end lg:pb-24">
      <div className="text-center max-w-lg grid gap-8 lg:col-[2/3] lg:text-left">
        <header className="grid gap-4">
          <span className="text-font-base up uppercase">So, you want to travel to</span>
          <h1 className="text-font-3xl">Space</h1>
        </header>
        <p className="text-font-base">
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>
      <Link
        className="relative uppercase bg-white text-black size-40 grid place-content-center rounded-[50%] before:absolute before:inset-0 before:bg-white before:rounded-[50%] before:-z-10 hover:before:animate-ping lg:size-56 lg:col-[3/4] lg:justify-self-end"
        href="/"
      >
        explore
      </Link>
    </section>
  );
}
