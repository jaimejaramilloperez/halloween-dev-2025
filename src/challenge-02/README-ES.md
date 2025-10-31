# 🐑 **Cuenta las ovejas**

Es medianoche en **Elm Street** y necesitas dormir urgentemente. Intentas contar ovejas, pero las letras en tu mente están completamente **desordenadas por culpa de Freddy**.

Tienes una cadena de texto caótica con letras mezcladas. Tu único escape es contar cuántas veces puedes formar la palabra **"sheep"** (oveja en inglés) antes de que Freddy te atrape en la pesadilla.

**Tu misión:** Contar cuántas ovejas completas puedes formar con las letras disponibles.

Crea una función `countSheep(letters)` que:

- Reciba un `string` con letras desordenadas
- Cuente cuántas veces se puede formar la palabra **"sheep"**
- Devuelva el número de ovejas completas que puedes contar

**Importante:** Para formar "sheep" necesitas: `s`, `h`, `e`, `e`, `p` (la `'e'` aparece 2 veces)

#### 📝 Ejemplos

```ts
countSheep("sheepxsheepy");
// → 2 (puedes formar "sheep" dos veces)

countSheep("sshhheeeepppp");
// → 2 (s=2, h=3, e=4, p=4 → solo 2 "sheep" completas)

countSheep("hola");
// → 0 (no hay suficientes letras)

countSheep("peesh");
// → 1 (las letras están desordenadas pero están todas)
```

#### 🧠 Explicación

Para formar **"sheep"** necesitas:

- `s` → 1 vez
- `h` → 1 vez
- `e` → 2 veces ⚠️
- `p` → 1 vez

Si tienes `"sshhheeeepppp"`:

- `s` = 2 (puedes formar 2 palabras)
- `h` = 3 (puedes formar 3 palabras)
- `e` = 4 (puedes formar 4÷2 = **2 palabras**, porque necesitas 2 'e' por cada "sheep")
- `p` = 4 (puedes formar 4 palabras)

**El resultado es el mínimo:** `min(2, 3, 2, 4) = 2`
