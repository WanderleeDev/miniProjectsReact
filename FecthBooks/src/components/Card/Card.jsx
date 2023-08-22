export const Card = () => {
  return (
    <figure className="bg-yellow-700/90 w-52 h-80 grid grid-rows-[auto,auto,auto] place-items-center border-2 border-black rounded-md">
      <figcaption className="mx-4 bg-pink-700 justify-self-stretch font-semibold border-4 border-ridge border-slate-300 pl-2 tracking-wider">title</figcaption>
      <img className="aspect-square w-44 justify-self-center border-4 border-slate-300 border-ridge" src="https://digimon.shadowsmith.com/img/koromon.jpg" alt="" />
      <div className="justify-self-stretch mx-4 grid grid-cols-2 justify-">
        <span>Type : </span>
        <span className="justify-self-end border-ridge border-2 w-24 text-center">Vacuna</span>
      </div>
    </figure>
  )
}
