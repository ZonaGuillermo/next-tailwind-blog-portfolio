---
title: 'Entendiendo el formato de color HSL'
date: '2022-12-18'
tags: ['css', 'color', 'hsl']
summary: 'HSL se refiere a Hue-Saturation-Lightness o dicho en español, matiz-saturación-luminosidad. A través de los valores de estos 3 conceptos podemos obtener cualquier color que se quiera de una forma más intuitiva que con el formato RGB.'
draft: false
---

# Entendiendo el formato de color HSL

`HSL` se refiere a **Hue-Saturation-Lightness**, o dicho en español, matiz-saturación-luminosidad. A través de los valores de estos 3 conceptos podemos obtener cualquier color que se quiera de una forma más intuitiva que con el formato RGB.

```css
background-color: hsl(30, 50%, 80%);
```

![Círculo cromático](https://miro.medium.com/v2/resize:fit:828/format:webp/1*dIyn9X82u-4lGO-7APyOKA.jpeg 'Círbulo cromático. Gracias a María Paulina por su artículo en Medium (ver en fuentes relacionadas)')

### **Matiz**

Para determinar el matiz usamos el **círculo cromático**. Por lo tanto su valor vendrá dado en grados. Cada 60º obtendrémos un matiz puro, por así decirlo, que son:

- 0º Rojo
- 60ª Amarillo
- 120ª Verde
- 180ª Cian
- 240ª Azul
- 300ª Magenta

### **Saturación**

Es la carga de matiz que tiene el color y se mide en %. Cuando hay una saturación del **100% se verá el matiz vivo**. Mientras en con el **0% se verá gris**.

### **Luminosidad**

Determina la oscuridad o luminosidad del matiz. Con un valor de **100% se verá blanco**, con un valor de **0% se verá negro**, mientras que con un valor de **50% se verá normal**

<br />

## RESUMIENDO

| (H) Matiz    | (S) Saturación  | (L) Luminosidad        |
| ------------ | --------------- | ---------------------- |
| 0º red       | 0% Gris         | 0% Oscuridad (negro)   |
| 60º yellow   | 100% Matiz vivo | 100% Claridad (blanco) |
| 120º green   |                 |                        |
| 180º cyan    |                 |                        |
| 240º blue    |                 |                        |
| 300º magenta |                 |                        |

<br />

```css
background-color: hsl(60, 50%, 80%);
```

<br />
<br />
<hr />

## Fuentes relacionadas

- [W3C CSS Color Module Level 3: HSL Color Values](https://www.w3.org/TR/css-color-3/#hsl-color)
- [MEDIUM Código y Color: “El reto de trabajar con colores luz.”](https://jemapau.medium.com/c%C3%B3digo-y-color-el-reto-de-trabajar-con-colores-luz-ac76f736fa3a)
