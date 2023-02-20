//expresion regular que permite filtrar una plabra dentro de un string
const regex = /\b(Apple)+\b/g ;

const fruit = 'Apple, Banana, Kiwi, Apple, orange, etc';

for (const match of fruit.matchAll(regex)){//coincidencia match
    console.log(match); }