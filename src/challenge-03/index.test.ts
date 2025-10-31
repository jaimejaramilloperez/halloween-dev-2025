import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { myersCalendar } from './index.ts';

describe('Challenge #03 - 🔪 It\'s Friday 13', () => {
  it('Test #01 - Returns an array', () => {
    const result = myersCalendar(2025);
    assert.strictEqual(result.constructor.name, 'Array');
  });

  it('Test #02 - The format is YYYY-MM-DD', () => {
    const result = myersCalendar(2025);
    const regExp = /^\d{4}-\d{2}-\d{2}$/;

    for (const date of result) {
      assert.strictEqual(typeof date, 'string');
      assert.match(date, regExp, `date ${date} does not match YYYY-MM-DD`);
    }
  });

  it('Test #03 - myersCalendar(2025)', () => {
    const result = myersCalendar(2025);
    assert.deepStrictEqual(result, ['2025-06-13', '2025-10-31']);
  });

  it('Test #04 - myersCalendar(2026)', () => {
    const result = myersCalendar(2026);
    assert.deepStrictEqual(result, ['2026-02-13', '2026-03-13', '2026-10-31', '2026-11-13']);
  });

  it('Test #05 - myersCalendar(2024)', () => {
    const result = myersCalendar(2024);
    assert.deepStrictEqual(result, ['2024-09-13', '2024-10-31', '2024-12-13']);
  });

  it('Test #06 - myersCalendar(0)', () => {
    const result = myersCalendar(0);
    assert.deepStrictEqual(result, []);
  });

  it('Test #07 - myersCalendar(-1)', () => {
    const result = myersCalendar(-1);
    assert.deepStrictEqual(result, []);
  });

  it('Test #08 - myersCalendar(NaN)', () => {
    const result = myersCalendar(NaN);
    assert.deepStrictEqual(result, []);
  });

  it('Test #09 - myersCalendar("aaa")', () => {
    const result = myersCalendar('aaa' as unknown as number);
    assert.deepStrictEqual(result, []);
  });
});
