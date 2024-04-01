export async function fetchData<T>(url: string) {
  if (!URL.canParse(url)) throw new Error("Formato invalido de la url");

  try {
    const data = await fetch(url);

    if (!data.ok) throw new Error("Error al obtener los datos");
    return data.json() as Promise<T>;
  } catch (error) {
    error instanceof Error
      ? console.log(error.message)
      : console.log("Error desconocido");
  }
}
