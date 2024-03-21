export interface IConfigFetch {
  url: string
  params?: Record<string, string>
  requestInit?: RequestInit
}

export interface IReadFetchPromise<T> {
  read: () => T
}
export type statusPromise = 'pending'| 'success' | 'error';
