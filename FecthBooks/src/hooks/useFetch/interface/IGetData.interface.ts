import { IDigiData } from "../../../API/interface/IDigiData.interface";

export interface IGetData  {
  data : IDigiData[] | null,
  isLoading : boolean,
  errors : null,
}