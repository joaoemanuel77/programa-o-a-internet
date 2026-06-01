// Trabalhando com toString()
// let num1 = 1
// let num2 = 2.5

// num1 = num1.toString()

// console.log(num1 + num2)

//Converter em binário
// let num1 = 1500
// console.log(num1.toString(2))

// Arredondar valor
// let num1 = 10.57987565556
// console.log(num1.toFixed(2))

//Se um número é inteiro
// let num1 = 10
// console.log(Number.isInteger(num1))

//Verificar se é NaN
// let num1 = 10
// let temp = num1 * 'Olá'
// console.log(Number.isNaN(temp))
//Not a Number (NaN)

//IEE 754-2008

// let num1 = 0.7
// const num2 = 0.1

// num1 = num1.toFixed(2)

// num1 = num1 + num2 // ficará 0.8
// num1 = num1 + num2 // ficará 0.9
// num1 = num1 + num2 // ficará 1.0

// console.log(Number.isInteger(num1))

// Utilizando o Math

// let num1 = 9.54578
// let num2 = Math.floor(num1)
// console.log(num2)

// let num1 = 9.54578
// let num2 = Math.ceil(num1)
// console.log(num2)

// let num1 = 9.24578
// let num2 = Math.round(num1)
// console.log(num2)

//console.log(Math.max(500, 400, 350, 1000, 250))
//console.log(Math.min(500, 400, 350, 1000, 250))

// Gerar numero aleatorio

// let numeroMax = 100
// let numeroMin = 50

// const aleatorio = Math.round(Math.random()* (numeroMax - numeroMin) + numeroMin)

// console.log(aleatorio)