export function myersCalendar (year: number): string[] {
  if (!Number.isInteger(year) || year <= 0) return [];

  const terrorNights: string[] = [];

  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13);

    if (date.getDay() === 5) {
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      terrorNights.push(`${year}-${month}-13`);
    }
  }

  terrorNights.push(`${year}-10-31`);
  terrorNights.sort();

  return terrorNights;
}
