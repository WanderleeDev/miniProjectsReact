export default async function preload<T>(fetchFn: Promise<T>): Promise<void> {
  await fetchFn;
}
