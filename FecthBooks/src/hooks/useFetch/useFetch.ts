import axios from "axios";
import { useState, useEffect } from "react";
//  interface
import { IDigiData } from "../../API/interface/IDigiData.interface";

interface IGetData  {
  data : IDigiData[] | null,
  isLoading : boolean,
  errors : null,
}

export const useFetch = (url: string) => {
  const [state, setState] = useState(<IGetData>{
    data: null,
    isLoading: true,
    errors : null
  })

  const getData = async () => {
    axios.get<IDigiData[]>(url)
    .then(response => {
        console.log(url);
        setState({
          data: response.data,
          isLoading: false,
          errors: null
        })
      })
      .catch(err => {
        setState({
          data: null,
          isLoading: false,
          errors: err
        })
        console.error(err)
      })
      .finally(() => console.log('process finally'))
      
    }
  useEffect(() => {
    if (!url) return
    getData()
  }, [ url ])

  return state
}

