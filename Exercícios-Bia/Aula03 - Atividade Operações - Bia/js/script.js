//OPERADORES ARITMÉTICOS

//1 - SOMA
let primeiroNumero = 10;
let segundoNumero = 24;
console.log(primeiroNumero+segundoNumero);
console.log(primeiroNumero-segundoNumero);
console.log(primeiroNumero*segundoNumero);
console.log(primeiroNumero/segundoNumero);

//12 -SOBRA
let numero = 34;
console.log(numero%2);

//3 - AO QUADRADO
let area = 9;
console.log(area*area);

//3 - AO CUBO
let profundidade = 3;
console.log(profundidade*profundidade);

//4 - FAHRENHEIT
let celsius = 23;
let fr = ((celsius*(9/5)+32));
console.log(fr);

//5 - MÉDIA
let nota1 = 4;
let nota2 = 9.5;
let nota3 = 10;

let media = ((nota1+nota2+nota3)/3);
console.log(media.toFixed(2));


//6 - TROCO
let valorProduto = 46;
let valorPago = 50;
let troco = valorPago-valorProduto;
console.log(troco);

//OPERADORES DE COMPARAÇÃO

//7 - IGUAL OU DIFERENTE
let valor1 = 5;
let valor2 = "5";
console.log(valor2 == valor1);
console.log(valor1 === valor2);

//8 - MAIOR OU MENOR
let n1 = 15;
let n2 = 20;
let maioruMenor = n1 > n2 ? "Maior" : "Menor";
console.log(maioruMenor);

//9 - APROVADO OU REPROVADO
let mediaAluno = 7.5;
let resultado = mediaAluno >= 7 ? "Aprovado" : "Reprovado";
console.log(resultado);

//10 - VERIFICAÇÃO DE IDADE
let idade = 18;
let maiorIdade = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(maiorIdade);

//11 - COMPARAÇÃ DE STRINGS
let string1 = "Olá";
let string2 = "olá";
let comparacao = string1 === string2 ? "As strings são iguais" : "As strings são diferentes";
console.log(comparacao);

//12 - FAIXA DE PREÇO
let preco = 150;
let faixaDePreco = preco >= 0.1 && preco <= 100 ? "Barato" : "Caro";
console.log(faixaDePreco);

//OPERADORES LÓGICOS

//13 - E LÓGICO
let valor3 = 10;
let resultadoE = valor3 > 0 && valor3 %2 == 0 ? "Positivo e Par" : "Não é Positivo e/ou Par";
console.log(resultadoE);

//14 - OU LÓGICO
let string3 = "root";
let resultadoOu = string3 === "admin" || string3 === "root" ? "Login realizado" : "Login falhou";
console.log(resultadoOu);

//15 - NÃO LÓGICO
let logado = true;
let statusLogin = !logado ? "Usuário não logado" : "Usuário logado";
console.log(statusLogin);

//16 - VALIDAÇÃO DE FORMULÁRIO
let email = "bia@gmail.com";
let idadeUsuaio = 19;
let formularioValido = email !== "" && idadeUsuaio >= 18 ? "Formulário válido" : "Formulário inválido";
console.log(formularioValido);

//17 - DESCONTO ESPECIAL
let assinante = "true";
let valorCompra2 = 215;
let desconto = assinante === "true" || valorCompra2 > 200 ? "Desconto aplicado" : "Sem desconto";
console.log(desconto);

//18 - ACESSO RESTRITO
let idadeJogador = 18;
let contaAtiva = true;
let banido = false;
let acesso = idadeJogador >= 10 && contaAtiva && !banido ? "Acesso permitido" : "Acesso negado";
console.log(acesso);

//DESAFIOS COMBINADOS

//19 - PAR E DENTRO DO INTERVALO
let numer0 = 12;
let resultadoNumer0 = numer0 % 2 === 0 && numer0 >=1 && numer0 <=100 ? "Número é par e está dentro do intervalo" : "Número é ímpar ou está fora do intervalo";
console.log(resultadoNumer0);

//20 - CLASSIFICAÇÃO DE NOTA
let notaAluno = 5.9;
let classificacao = notaAluno < 5 ? "reprovado" : notaAluno >= 5 && notaAluno < 7 ? "recuperação" : notaAluno >= 7 && notaAluno < 9 ? "aprovado" : "Excelete";
console.log(classificacao);

//21 - CALCULADORA DE IMC
let peso = 70;
let altura = 1.70;
let imc = peso / (altura * altura);
let classificacaoIMC = imc < 18.5 ? "Abaixo do peso" : imc >= 18.5 && imc < 24.9 ? "Peso normal" : imc >= 24.9 && imc < 29.9 ? "Sobrepeso" : "Obesidade";
console.log(imc.toFixed(2));
console.log(classificacaoIMC);

//22 - JOGO DE ADIVINHAR O NÚMERO
let numeroSecreto = 7;
let chute = 5;
let resultadoChute = chute === numeroSecreto ? "Parabéns! Você acertou o número secreto!" : chute < numeroSecreto ? "Tente um número maior!" : "Tente um número menor!";
console.log(resultadoChute);

//Foi legal fazer issooo!!

function calculadora (x,b){
somar = x+b
console.log(somar)
}

calculadora(125,5)

function calcularIMC (p,a){
    calculo2 = p/(a*a)
    console.log(calculo2.toFixed(2))
}
 calcularIMC (54,1.64)
 calcularIMC (peso,altura)

let numberPeso = Number(prompt("Qual o seu Peso?"));
let numberAltura = Number(prompt("Qual a sua Altura?"));
let numberimc = numberPeso / (numberAltura * numberAltura);
console.log(numberimc.toFixed(2));
alert(numberimc.toFixed(2));
if (numberimc < 18.5){
    alert("Abaixo do peso")
} else if (numberimc >= 18.5){
    alert("Peso Normal")}
if (numberimc > 24.9){
    alert("Sobrepeso")
}else if (numberimc >29.9){
    alert("Obesidade")
    }
calcularIMC()


 let aluno = true
 if(aluno == true){
    console.log("Presença")
 }else{
    console.log("Falta")
 }

function situacaoAluno() {
    let nota4 = Number(prompt("informe a primeira nota"))
    let nota5 = Number(prompt("informe a segunda nota"))
    let nota6 = Number(prompt("informe a terceira nota"))
    let mediaTotal = ((nota4+nota5+nota6)/3);

    if (mediaTotal <6) {
    alert("Aluno Reprovado")
    } else if (mediaTotal >= 6 && mediaTotal <7) {
    alert("Aluno de Exame")
    } else{
    alert("Aluno Aprovado")
}}
 situacaoAluno()

 function clasifianota(){
    let nota10 =Number(prompt("Informe sua nota: "))
    if(nota10 >= 0 && nota10 <=10){
        if(nota10 >=9){
            alert("Excelente")
        }else if (nota10 >=7){
            alert("Aprovado")
        }else if (nota10 <7){
            alert("Recuperação")
        }else{
            alert("Reprovado")
        }
    }else{
        alert("Nota inválida")
    }
 }
clasifianota()