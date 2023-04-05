/**
 * atribuir valor a variável
 */
var curso = 'JavaScript';

/**
 * Concatenando 
 */
alert('melhor curso de ' + curso);

/**
 * Média
 */
var num1 = 20;
var num2 = 20;
var soma = num1 + num2;
var media = soma / 2;

/**
 * Recebendo valor com prompt
 */
var nome = prompt('Qual seu nome? ');
var sobrenome = prompt('Qual seu sobrenome? ');
//exibir no consolo os valores armazenados
console.log('Meu nome é: ' + nome + " " + sobrenome);
//escrevendo no html com js
document.write("<h1>Olá, meu nome é " + nome + " " + sobrenome);

/**
 *  Interpolando strings (template strings)
 * 
 *  A interpolação de strings é um recurso bem interessante, presente em diversas linguagens. No JavaScript, é uma alternativa mais prática para manipular string sem a necessidade de fazer concatenação, porque para textos maiores, concatenar pode ser um pouco trabalhoso.

    Usando as chamadas template strings ou templates literais, a pessoa desenvolvedora consegue ter uma flexibilidade maior no trabalho com strings, além de facilitar a escrita e leitura do código.

    Retomando o exemplo da mensagem de boas vindas, veja abaixo a utilização de template strings:
 */

var nomeNovo = 'B Plus Dev';
var saudacoes =`Seja bem-vindo a ${nomeNovo}`;
document.write("<br>");
document.write(saudacoes);

/**
 * Function
 */
var area = document.getElementById('area');

// function entrar(){
//     var carro = prompt("Qual carro? ");
//     area.innerHTML = `O carro é ${carro}`;
// }

function entrar(){
    var carro = prompt("Qual carro? ");

    if(carro === '' || carro === null){
        area.innerHTML = "Clique no botão para acessar!"
    }else{
        area.innerHTML = `O carro é ${carro} `;

        let sair = document.createElement("button");
        sair.innerText = "sair";
        sair.onclick = sairFull;
        area.appendChild(sair);
    }
}

function sairFull(){
    alert("Até logo mais");
    area.innerHTML = "Você saiu!";
}