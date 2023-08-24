import { Card } from "../Card"
import { useFetch } from "../../hooks/useFetch/useFetch"
// api
import { url } from "../../API/api"
import { IDigiData } from "../../API/interface/IDigiData.interface"
import { useEffect } from "react"

export const GalleryCard = ({ paramSearch }) => {
  console.log(paramSearch);
  
  const { data, isLoading, errors} = useFetch(url) 
  
  useEffect(() => {
    console.log('change');
    
  }, [paramSearch])
  
  return (
    <div id="card-gallery" className="relative grid place-items-center items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-8 xl:gap-24">
    
      {isLoading && 
        <div className="absolute -translate-x-2/4 left-2/4 top-40
        text-4xl">Cargando...</div>}
      {errors && 
      <div className="text-red-500 absolute -translate-x-2/4 left-2/4 
      top-40 text-xl">Hubo un error al cargar los datos. Por favor,inténtalo de nuevo más tarde.</div>}
      {data?.map((d:IDigiData) => <Card key={d.name} digimon={d}/>)}
    
    </div>
  )
}
