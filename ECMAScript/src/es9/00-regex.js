//valores dentro de una expresion regular.
//manejo de fechas para los caracteres año mes dia
const regex = /(\d{4})-(\d{2})-(\d{2})/
const matchers = regex.exec('2023-01-01');//expresion que vamos a tratar de validar
console.table(matchers);