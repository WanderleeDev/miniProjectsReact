import { IReadFetchPromise, IConfigFetch, statusPromise } from "@/interfaces/IFetchData.interface";

function getSuspender<T>(promise: Promise<T>): IReadFetchPromise<T> | never {
  let statusPromise: statusPromise = 'pending';
  let errorResponse: string | null = null;
  let response: T;

  const suspender = promise.then(
    res => { 
      statusPromise = 'success'; 
      response = res; 
    },
    err => {
      statusPromise = 'error';

      if (err instanceof Error) {
        errorResponse = `${err.name} : ${err.message}`
      } else {
        errorResponse = `Something wrong - ${err}`
      }
    }
  );

  const read = (): T => {
    switch (statusPromise) {
      case 'pending':
        throw suspender;
      case 'error':
        throw new Error(errorResponse!);
      default:
        return response;
    }
  }

  return { read }
}

export function fetchData<T>({ url, params }: IConfigFetch) {
  let urlApi: string = url;
  const requestInit: RequestInit = {
    headers : {
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY ?? "",
      "content-type": "application/json",
    }
  }

  if (params) urlApi += new URLSearchParams(params).toString();
  
  const dataPromise: Promise<T> = fetch(urlApi, requestInit)
    .then(response => response.json())
    .then(data => data)

  return getSuspender<T>(dataPromise)
}
