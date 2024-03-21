const useFilter = <T>(toFilter: T[], regex: string, fn: () => T[]): T[] => {
  const regExp = new RegExp(regex, 'ig');
  if (!toFilter || !toFilter.length) return [];
  return toFilter.filter(item => regExp.test(item!.toString()));
}
