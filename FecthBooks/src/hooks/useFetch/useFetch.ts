import axios from "axios";
import { useState, useEffect } from "react";
//  interface
import { IDigiData } from "../../API/interface/IDigiData.interface";
import { IGetData } from "./interface/IGetData.interface";

export const useFetch = (url: string) => {
  const [state, setState] = useState<IGetData>({
    data: null,
    isLoading: true,
    errors : null
  })

  const getData = (AbortController: AbortController) => {
    axios.get<IDigiData[]>(url,{ signal: AbortController.signal })
    .then(response => {
        setState(prev => ({
          ...prev,
            data: response.data,
        }))
      })
      .catch(err => {
        setState(prev => ({
          ...prev,
          errors: err
        }))
        console.error(err)
      })
      .finally(() => {

          setState( prev => ({ 
            ...prev ,
            isLoading: false 
          })) 
        
        console.log('process finally')
      })
      
    }
    
  useEffect(() => {
    if (!url) return
    const abortController = new AbortController()
    getData(abortController)
    return () => abortController.abort()
  }, [url])

  return state
}
