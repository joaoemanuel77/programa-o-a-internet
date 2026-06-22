//Vocês deverão criar uma função para verificar a entrada de um usuário. Se ele tiver idade maior ou igual a 18 anos ele pode entrar. Se ele tiver entre 16 a 18 ele poderá entrar desde que esteja acompanhado. Se for menor de 16 não poderá entrar de forma alguma.

function verificarEntrada(idade, acompanhado){
    if(idade >= 18){
        return 'Pode entrar, Seja Bem-vindo!'
    } else if(idade >= 16 && idade < 18){
        if(acompanhado){
            return 'Pode entrar! Voce está acompanhado'
        } else {
            return 'Não pode entrar, precisa estar acompanhado'
        }
    } else {
        return 'Não pode entrar'
    }
}

console.log(verificarEntrada(17,'Sim'))