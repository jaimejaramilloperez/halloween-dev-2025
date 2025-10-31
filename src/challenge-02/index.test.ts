import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { countSheep } from './index.ts';

describe('Challenge #02 - 🐑 Count the sheep', () => {
  it('Test #01 - Returns a string', () => {
    const result = countSheep('sheepxsheepy');
    assert.strictEqual(typeof result, 'number');
  });

  it('Test #02 - countSheep("sheepxsheepy")', () => {
    const result = countSheep('sheepxsheepy');
    assert.strictEqual(result, 2);
  });

  it('Test #02 - countSheep("sshhheeeepppp")', () => {
    const result = countSheep('sshhheeeepppp');
    assert.strictEqual(result, 2);
  });

  it('Test #03 - countSheep("hola")', () => {
    const result = countSheep('hola');
    assert.strictEqual(result, 0);
  });

  it('Test #04 - countSheep("peesh")', () => {
    const result = countSheep('peesh');
    assert.strictEqual(result, 1);
  });

  it('Test #05 - countSheep("sheep")', () => {
    const result = countSheep('sheep');
    assert.strictEqual(result, 1);
  });

  it('Test #06 - countSheep("shep")', () => {
    const result = countSheep('shep');
    assert.strictEqual(result, 0);
  });

  it('Test #07 - countSheep("ssshhheeeppp")', () => {
    const result = countSheep('ssshhheeeppp');
    assert.strictEqual(result, 1);
  });
});
