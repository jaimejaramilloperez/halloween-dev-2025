export function translatePossessed (message: string): string {
  if (!message || message.trim() === '') return '';

  const words = message.split(' ');
  const translatedWords = words.map(word => word.split('').reverse().join(''));

  return translatedWords.join(' ');
}
