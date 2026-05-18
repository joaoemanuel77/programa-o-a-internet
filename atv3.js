const nome = prompt("Digite o seu nome: ")

const tamanhoNome = nome.length
const segundaLetra = nome.charAt(1)
const primeiraLetra = nome.charAt(0)
const nomeMaiusculo = nome.toUpperCase()
const nomeMinusculo = nome.toLowerCase()

document.body.innerHTML += `O seu nome é: ${nome} <br>`
document.body.innerHTML += `O seu nome tem ${tamanhoNome} letras <br>`
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra} <br>`
document.body.innerHTML += `A primeira letra do seu nome é: ${primeiraLetra} <br>`
document.body.innerHTML += `Seu nome em MAIUSCULO: ${nomeMaiusculo} <br>`
document.body.innerHTML += `Seu nome em minusculo: ${nomeMinusculo} <br>`