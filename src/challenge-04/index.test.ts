import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { searchPhone } from './index.ts';

describe('Challenge #04 - 🔪 Which is your favorite algorithm?', () => {
  it('Test #01 - Returns a number', () => {
    const result = searchPhone([1001, 1002, 1005, 1008, 1010, 1015, 1020], 1008);
    assert.strictEqual(typeof result, 'number');
  });

  it('Test #02 - searchPhone([1001, 1002, 1005, 1008, 1010, 1015, 1020], 1008)', () => {
    const result = searchPhone([1001, 1002, 1005, 1008, 1010, 1015, 1020], 1008);
    assert.strictEqual(result, 3);
  });

  it('Test #02 - searchPhone([1001, 1002, 1005, 1008, 1010, 1015, 1020], 1001)', () => {
    const result = searchPhone([1001, 1002, 1005, 1008, 1010, 1015, 1020], 1001);
    assert.strictEqual(result, 0);
  });

  it('Test #03 - searchPhone([1001, 1002, 1005, 1008, 1010, 1015, 1020], 1020)', () => {
    const result = searchPhone([1001, 1002, 1005, 1008, 1010, 1015, 1020], 1020);
    assert.strictEqual(result, 6);
  });

  it('Test #04 - searchPhone([1001, 1002, 1005, 1008, 1010, 1015, 1020], 9999)', () => {
    const result = searchPhone([1001, 1002, 1005, 1008, 1010, 1015, 1020], 9999);
    assert.strictEqual(result, -1);
  });

  it('Test #05 - searchPhone([1001], 1001)', () => {
    const result = searchPhone([1001], 1001);
    assert.strictEqual(result, 0);
  });

  it('Test #06 - searchPhone([1001], 9999)', () => {
    const result = searchPhone([1001], 9999);
    assert.strictEqual(result, -1);
  });

  it('Test #07 - searchPhone([], 1001)', () => {
    const result = searchPhone([], 1001);
    assert.strictEqual(result, -1);
  });

  it('Test #08 - searchPhone([1005, 1010, 1015, 1020], 1000)', () => {
    const result = searchPhone([1005, 1010, 1015, 1020], 1000);
    assert.strictEqual(result, -1);
  });

  it('Test #09 - searchPhone([1001, 1002, 1005, 1008], 2000)', () => {
    const result = searchPhone([1001, 1002, 1005, 1008], 2000);
    assert.strictEqual(result, -1);
  });
});
