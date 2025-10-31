# 🧩 **I want to play a game**

**Jigsaw:** _"Hello, I want to play a game…"_

You have a combination lock with 4 wheels. Each wheel shows a digit from 0 to 9. The lock currently shows a code, but you need to change it to another code.

"You can turn each wheel up (+1) or down (-1). The wheels are circular: after 9 comes 0, and before 0 is 9.

You must change the combination with the minimum number of moves. If you make one wrong move… you're dead.

Implement the function `changeLock(current, target)` with the input:

- `current`: Current code (4-digit string, e.g., `'0022'`)
- `target`: Target code (4-digit string, e.g., `'0044'`)

The expected output is the minimum number of moves needed to reach the target combination.

**Rules:**

- Each wheel can turn +1 or -1
- Wheels are circular: 9→0 and 0→9
- Each turn counts as 1 move
- The 4 wheels are independent

#### 📝 Examples

```ts
changeLock("0022", "0044");
// → 4
// Wheel 2: 2→4 (2 moves forward)
// Wheel 3: 2→4 (2 moves forward)
// Total: 2+2 = 4

changeLock("0000", "9999");
// → 4
// Each wheel: 0→9 (1 move backward is faster than 9 forward)
// Total: 1+1+1+1 = 4

changeLock("1234", "5678");
// → 16
// Wheel 0: 1→5 (4 moves)
// Wheel 1: 2→6 (4 moves)
// Wheel 2: 3→7 (4 moves)
// Wheel 3: 4→8 (4 moves)
// Total: 4+4+4+4 = 16

changeLock("0000", "0000");
// → 0
// We're already at the target code

changeLock("1357", "2468");
// → 4
// Wheel 0: 1→2 (1 move)
// Wheel 1: 3→4 (1 move)
// Wheel 2: 5→6 (1 move)
// Wheel 3: 7→8 (1 move)
// Total: 1+1+1+1 = 4
```

Remember… your life is on the line. Don't make a mistake!
