import { createContext } from "react";
import { ICat } from "@/interfaces/IBreeds.interface";

const CatsContext = createContext<ICat[]>([])

export default CatsContext;
