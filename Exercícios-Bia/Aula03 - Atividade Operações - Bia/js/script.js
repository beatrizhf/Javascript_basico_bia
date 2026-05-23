//OPERADORES ARITMÉTICOS

//1 - SOMA
let primeiroNumero = 10;
let segundoNumero = 24;
console.log(primeiroNumero+segundoNumero);

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
//ou
console.log((celsius*(9/5)+32));

//5 - MÉDIA
let nota1 = 8;
let nota2 = 9.20;
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
