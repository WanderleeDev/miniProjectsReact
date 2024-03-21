import { useState, useEffect } from "react";

const useFetch = (url: string, param?: Record<string, string>) =>  {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [controller, setController]  = useState<null| AbortController>(null);
  const queryParams = new URLSearchParams({ ...param })
  const URL = `${url}/breeds?${queryParams.toString()}`

  function handleAbortRequest(): void {
    controller?.abort()
    setError("Request cancelled")
  }
  
  function getData(): void {
    const abortController = new AbortController();
    const requestInit: RequestInit = {
      method: 'GET',
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? '',
        'content-type': 'application/json' 
      },
      signal: abortController.signal,
    };

    setController(abortController);
    fetch(URL, requestInit)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json()
      })
      .then(data => setData(data))
      .catch(error => {
        (error instanceof Error) 
          ? setError(error.message) 
          : setError('Something went wrong')
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getData()

    return () => handleAbortRequest()
  })

  return { data, loading, error, handleAbortRequest }
}

export default useFetch;
