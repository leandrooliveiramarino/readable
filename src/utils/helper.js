export const limitCharacters = (text, size = 30) =>
  text.length >= size
    ? `${text.substring(0, size).trim()}...`
    : text.trim();