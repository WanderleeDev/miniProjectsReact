interface IFormatterConfig {
  toReplace: string;
  replaceWith: string;
  hasReplaceAll: boolean;
}

export default function formatString(
  word: string,
  config: IFormatterConfig,
): string {
  const wordTrim = word.trim();
  const errorWord = "The word is required and should not be empty characters or 0 length";

  if (!wordTrim || wordTrim.length === 0) throw new Error(errorWord);

  return config.hasReplaceAll
    ? wordTrim.replaceAll(config.toReplace, config.replaceWith)
    : wordTrim.replace(config.toReplace, config.replaceWith);
}
