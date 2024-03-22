'use client'
import { useEffect, useState } from "react";
import { ICat } from "@/interfaces/IBreeds.interface";
import CatsContext from "./catsContext";
import fetchCat from "@/helpers/fetchCat";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const CatsProvider = ({ children }: Props) => { 
  const [cats, setCats] = useState<ICat[]>([]);

  useEffect(() => {
    fetchCat<ICat[]>(`${process.env.NEXT_PUBLIC_API_CAT ?? ""}images/search?`, {
      has_breeds: "1",
      limit: "100",
    }).then((data) => {
      setCats([...data])      
    })
    return () => setCats([]);
  }, [])

  return (
    <CatsContext.Provider value={cats}>
      {children}
    </CatsContext.Provider>
  );
}

export default CatsProvider;
