export function searchPhone (phones: number[], target: number): number {
  let low = 0;
  let high = phones.length - 1;

  if (phones[low] === target) return low;
  if (phones[high] === target) return high;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (phones[mid] === target) {
      return mid;
    } else if (phones[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
