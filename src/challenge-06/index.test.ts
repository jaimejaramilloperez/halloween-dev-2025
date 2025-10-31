import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { surviveRoulette } from './index.ts';

describe('Challenge #06 - 🤡 The chaos', () => {
  it('Test #01 - Returns a number', () => {
    const result = surviveRoulette(0, 0);
    assert.strictEqual(typeof result, 'number');
  });

  it('Test #02 - surviveRoulette(4, 2)', () => {
    const result = surviveRoulette(4, 2);
    assert.strictEqual(result, 0);
  });

  it('Test #02 - surviveRoulette(5, 3)', () => {
    const result = surviveRoulette(5, 3);
    assert.strictEqual(result, 3);
  });

  it('Test #03 - surviveRoulette(6, 2)', () => {
    const result = surviveRoulette(6, 2);
    assert.strictEqual(result, 4);
  });

  it('Test #04 - surviveRoulette(1, 1)', () => {
    const result = surviveRoulette(1, 1);
    assert.strictEqual(result, 0);
  });

  it('Test #05 - surviveRoulette(2, 1)', () => {
    const result = surviveRoulette(2, 1);
    assert.strictEqual(result, 1);
  });

  it('Test #06 - surviveRoulette(3, 1)', () => {
    const result = surviveRoulette(3, 1);
    assert.strictEqual(result, 2);
  });

  it('Test #07 - surviveRoulette(7, 3)', () => {
    const result = surviveRoulette(7, 3);
    assert.strictEqual(result, 3);
  });

  it('Test #08 - surviveRoulette(5, 10)', () => {
    const result = surviveRoulette(5, 10);
    assert.strictEqual(result, 3);
  });

  it('Test #09 - surviveRoulette(10, 3)', () => {
    const result = surviveRoulette(10, 3);
    assert.strictEqual(result, 3);
  });
});
