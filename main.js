// 1
//function mostrarUsuario(usuario){
//    const u = usuario || "Usuário não informado";
//
  //  console.log(u);
//}

//mostrarUsuario("Carlos");
//mostrarUsuario();


// 2
//function exibirPontuacao(pontos) {
//    const p = pontos || "Pontuação não disponível";
//    console.log(p);
//}

//exibirPontuacao(230);
//exibirPontuacao();


// 3
//function cargoFuncionario(nome){
 //   const cargo = nome && "Funcionário: " + nome;

   // console.log(cargo);
//}

//cargoFuncionario();
//cargoFuncionario("Mariana Silva");


// 4
//function tarefaAtual(tarefa){
//    const t = tarefa ?? "Nenhuma tarefa definida";

//    console.log(t);
//}

//tarefaAtual();
//tarefaAtual("Estudar JavaScript");


// 5
//function nivelEnergia(energia) {
//    const energiaFinal = energia ?? "Energia desconhecida";
//    console.log(energiaFinal);
//}

//nivelEnergia();
//nivelEnergia(0);
//nivelEnergia(80);

const nome = prompt("Qual é o seu nome?")
const sobrenome = prompt("Qual seu sobrenome?")
const idade = prompt("Qual sua idade?")
const altura = prompt("Qual sua altura? (em metros, ex: 1.75)")
const peso = prompt("Qual seu peso? (em kg)")

//calculo de imc
const imc = peso / (altura * altura)

const paragrafo = document.getElementById("paragrafo")
const sobrenomeP = document.getElementById("sobrenome")
const idadeP = document.getElementById("idade")
const alturaP = document.getElementById("altura")
const pesoP = document.getElementById("peso")
const imcP = document.getElementById("imc")

paragrafo.innerHTML = nome + " " + sobrenome
idadeP.innerHTML = "Idade: " + idade
alturaP.innerHTML = "Altura: " + altura + " m"
pesoP.innerHTML = "Peso: " + peso + " kg"
imcP.innerHTML = "IMC: " + imc

