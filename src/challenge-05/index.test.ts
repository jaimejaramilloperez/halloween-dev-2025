import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { changeLock } from './index.ts';

describe('Challenge #05 - 🧩 I want to play a game', () => {
  it('Test #01 - Returns a number', () => {
    const result = changeLock('0022', '0044');
    assert.strictEqual(typeof result, 'number');
  });

  it('Test #02 - changeLock("0022", "0044")', () => {
    const result = changeLock('0022', '0044');
    assert.strictEqual(result, 4);
  });

  it('Test #02 - changeLock("0000", "9999")', () => {
    const result = changeLock('0000', '9999');
    assert.strictEqual(result, 4);
  });

  it('Test #03 - changeLock("1234", "5678")', () => {
    const result = changeLock('1234', '5678');
    assert.strictEqual(result, 16);
  });

  it('Test #04 - changeLock("0000", "0000")', () => {
    const result = changeLock('0000', '0000');
    assert.strictEqual(result, 0);
  });

  it('Test #05 - changeLock("1357", "2468")', () => {
    const result = changeLock('1357', '2468');
    assert.strictEqual(result, 4);
  });

  it('Test #06 - changeLock("1111", "1191")', () => {
    const result = changeLock('1111', '1191');
    assert.strictEqual(result, 2);
  });

  it('Test #07 - changeLock("0505", "5050")', () => {
    const result = changeLock('0505', '5050');
    assert.strictEqual(result, 20);
  });

  it('Test #08 - changeLock("9999", "0000")', () => {
    const result = changeLock('9999', '0000');
    assert.strictEqual(result, 4);
  });

  it('Test #09 - changeLock("0000", "5555")', () => {
    const result = changeLock('0000', '5555');
    assert.strictEqual(result, 20);
  });
});
