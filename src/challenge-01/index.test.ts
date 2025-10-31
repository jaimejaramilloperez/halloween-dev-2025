import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { translatePossessed } from './index.ts';

describe('Challenge #01 - 👹 Code possession', () => {
  it('Test #01 - Returns a string', () => {
    const result = translatePossessed('i yojne gnihctaw uoy');
    assert.strictEqual(typeof result, 'string');
  });

  it('Test #02 - translatePossessed("i yojne gnihctaw uoy")', () => {
    const result = translatePossessed('i yojne gnihctaw uoy');
    assert.strictEqual(result, 'i enjoy watching you');
  });

  it('Test #02 - translatePossessed("i yojne gnihctaw uoy")', () => {
    const result = translatePossessed('i yojne gnihctaw uoy');
    assert.strictEqual(result, 'i enjoy watching you');
  });

  it('Test #03 - translatePossessed("siht si gnorw")', () => {
    const result = translatePossessed('siht si gnorw');
    assert.strictEqual(result, 'this is wrong');
  });

  it('Test #04 - translatePossessed("      ")', () => {
    const result = translatePossessed('      ');
    assert.strictEqual(result, '');
  });

  it('Test #05 - translatePossessed("dooG secitcarP")', () => {
    const result = translatePossessed('dooG secitcarP');
    assert.strictEqual(result, 'Good Practices');
  });

  it('Test #06 - translatePossessed("")', () => {
    const result = translatePossessed('');
    assert.strictEqual(result, '');
  });

  it('Test #07 - translatePossessed("dlrow   olleh")', () => {
    const result = translatePossessed('dlrow   olleh');
    assert.strictEqual(result, 'world   hello');
  });

  it('Test #08 - translatePossessed("  dlrow eht  ")', () => {
    const result = translatePossessed('  dlrow eht  ');
    assert.strictEqual(result, '  world the  ');
  });

  it('Test #09 - translatePossessed(",olleH !dlrow")', () => {
    const result = translatePossessed(',olleH !dlrow');
    assert.strictEqual(result, 'Hello, world!');
  });

  it('Test #10 - translatePossessed(",olleH .dlrow")', () => {
    const result = translatePossessed(',olleH .dlrow');
    assert.strictEqual(result, 'Hello, world.');
  });

  it('Test #11 - translatePossessed("olleH ):")', () => {
    const result = translatePossessed('olleH ):');
    assert.strictEqual(result, 'Hello :)');
  });
});
