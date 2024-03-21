export default async function fetchCat<T>(
  url: string,
  params?: Record<string, string>,
): Promise<T> {
  let urlApi: string = url;

  if (params) urlApi += new URLSearchParams(params).toString();

  const headers: RequestInit = {
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY ?? "",
      "content-type": "application/json",
    },
  };

  const dataPromise: T = await fetch(urlApi, headers)
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);

      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      return error instanceof Error
        ? { error: error.message }
        : { error: `Something wrong ${error}` };
    });

  return dataPromise;
}
