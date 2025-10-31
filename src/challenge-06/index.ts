export function surviveRoulette (victims: number, count: number): number {
  if (victims === 0) return 0;

  const circle = Array.from({ length: victims }, (_, i) => i);
  let currentIndex = 0;

  while (circle.length > 1) {
    currentIndex = (currentIndex + count - 1) % circle.length;

    circle.splice(currentIndex, 1);

    if (currentIndex >= circle.length) {
      currentIndex = 0;
    }
  }

  return circle[0];
}
