//flat
const array = [1,2,3,4,5,6,6,[7,7,7,7,7,[17,17]]];
console.log(array.flat(3));

//flatmap
const array2 = [1,2,3,4,5,6];
console.log(array2.flatMap(v => [v, v*2]));//trasformar