export function countSheep (letters: string): number {
  if (!letters || letters.trim() === '') return 0;

  const characters = letters.split('');

  const sheepLetters: Record<'s' | 'h' | 'e' | 'p', number> = {
    s: 0,
    h: 0,
    e: 0,
    p: 0,
  };

  for (const character of characters) {
    if (character === 's') sheepLetters.s++;
    if (character === 'h') sheepLetters.h++;
    if (character === 'e') sheepLetters.e++;
    if (character === 'p') sheepLetters.p++;
  }

  const count = Math.min(
    sheepLetters.s,
    sheepLetters.h,
    Math.floor(sheepLetters.e / 2),
    sheepLetters.p
  );

  return count;
}
