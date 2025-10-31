# 🔪 **It's Friday 13**

Michael Myers has left a pattern on his calendar…

Every year he attacks on Halloween night (October 31st) or on any Friday the 13th.

**Your mission is to find all the terror nights of a specific year 🩸**

You will receive a year (for example 2025) and must return an array with all the dates in `'YYYY-MM-DD'` format where Michael Myers could attack.

- If the year is not valid, return an empty array.
- Return all dates in the year that are October 31st, and/or Friday the 13th.
- Dates must be sorted chronologically.
- The format must be exactly `'YYYY-MM-DD'` (with leading zeros if needed).

#### 📝 Examples

```ts
myersCalendar(2025);
// → ['2025-06-13', '2025-09-13', '2025-10-31']

myersCalendar(2026);
// → ['2026-02-13', '2026-03-13', '2026-10-31', '2026-11-13']

myersCalendar(2024);
// → ['2024-09-13', '2024-10-31', '2024-12-13']
```
