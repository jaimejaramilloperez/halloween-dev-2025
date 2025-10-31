# 👹 **La posesión del código**

Regan ha sido poseída y ahora habla en un lenguaje extraño 😱. El padre Karras ha descubierto que cuando Regan está poseída, **invierte completamente las palabras que dice**, pero mantiene el orden de las frases.

Tu misión es crear un programa que traduzca los mensajes poseídos de Regan al lenguaje humano normal.

Por ejemplo:

```ts
const message = "i yojne gnihctaw uoy";
translatePossessed(message); // "i enjoy watching you"
```

Los espacios entre palabras deben mantenerse:

```ts
const message = "siht si gnorw";
translatePossessed(message); // "this is wrong"
```

Si el mensaje está vacío o solo contiene espacios, devuelve una cadena vacía:

```ts
const message = "      ";
translatePossessed(message); // ""
```

Las palabras pueden contener mayúsculas y minúsculas, y deben mantenerse:

```ts
const message = "dooG secitcarP";
translatePossessed(message); // "Good Practices"
```
