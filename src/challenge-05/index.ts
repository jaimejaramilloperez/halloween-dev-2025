export function changeLock (current: string, target: string): number {
  if (current === target) return 0;

  let moves = 0;

  const result = target.split('').map(Number);
  const lock = current.split('').map(Number);

  for (let i = 0; i <= lock.length - 1; i++) {
    if (lock[i] === result[i]) continue;

    const forwardDistance = (lock[i] - result[i] + 10) % 10;
    const backwardDistance = (result[i] - lock[i] + 10) % 10;
    const delta = Math.min(forwardDistance, backwardDistance);

    moves += delta;
  }

  return moves;
}
