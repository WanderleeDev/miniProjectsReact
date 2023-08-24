import { useEffect } from "react";
import { IDigiData } from "../../API/interface/IDigiData.interface"
import "aos/dist/aos.css";
import AOS from "aos"

export const Card = ( { digimon }: IDigiData) => {
  const { name, img, level } = digimon
  useEffect(() => {
    AOS.init()
  }, [])
  
  return (
    <figure id={`${name}`}
      data-aos="fade-up"  
      data-aos-duration="500" 
      className="relative bg-yellow-700/90 w-52 h-80 grid grid-rows-[auto,auto,auto] place-items-center border-2 border-black rounded-md duration-200 hover:-translate-y-4">
      <figcaption className="mx-4 bg-pink-700 justify-self-stretch font-semibold border-4 border-ridge border-slate-300 pl-2 tracking-wider w-100% text-ellipsis overflow-hidden whitespace-nowrap"># {name}</figcaption>
      <img className="aspect-square w-44 justify-self-center border-4 border-slate-300 border-ridge" loading="lazy" src={img} alt={`${name}`} title={name} />
      <div className="justify-self-stretch mx-4 grid grid-cols-2 justify-">
        <span>Type : </span>
        <span className="justify-self-end border-ridge border-2 w-24 text-center">{level}</span>
      </div>
    </figure>
  )
}
