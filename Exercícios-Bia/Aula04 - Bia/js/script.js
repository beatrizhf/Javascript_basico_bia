/**Crie uma variável com uma nota de 0 a 100. Use if/else para classificar: A (>= 90), B (>= 80), C (< 80). Exiba a classificação.
Dica: Use else if para verificar múltiplas condições.*/ 

let nota = Number(prompt("Informe uma nota: "))
if (nota>= 90){
    alert ("O conceito é A")
}else if(nota >= 80){
    alert ("O conceito é B")
}else{
    alert("O conceito é C")
}

/**Crie uma variável com número de 1 a 7. Use switch para exibir o nome do dia correspondente (1 = Domingo, 2 = Segunda...). Caso inválido, exiba "Dia inválido".
Dica: Use case para cada número e break para interromper. */

let numero = Number(prompt("Informe um número de 1 a 7: "))

switch (numero){
    case 1 : alert("Domingo")
        break;
    case 2 : alert("Segunda")
        break;
    case 3 : alert("Terça")
        break;
    case 4 : alert("Quarta")
        break;
    case 5 : alert("Quinta")
        break;
    case 6 : alert("Sexta")
        break;
    case 7 : alert("Sábado")
        break;
    default: alert("Dia inválido")
}

/**Instrução: Crie uma variável com uma temperatura. Use o operador ternário para exibir "Quente" se maior que 25, ou "Frio" caso contrário.
Dica: condicao ? valorSeVerdadeiro : valorSeFalso */

let temperatura = Number(prompt("Informe a temperatura: "))

let temp = temperatura > 25 ? "Quente" : "Frio";
alert(temp)

/**Instrução: Crie duas variáveis: maior de idade (boolean) e tem carteira (boolean). Use if com && para verificar se a pessoa pode dirigir (maior de idade E tem carteira).
Dica: && exige que TODAS as condições sejam verdadeiras. */

let maiorIdade = prompt("Você é de maior? Informe false para menor ou true se for maior de idade") === "true";
let carteira = prompt("Possui carteira de habilitação?") === "true";

if(maiorIdade && carteira){
    alert("Pode dirigir")
}else{
    alert ("Não pode dirigir")
}

/**Instrução: Crie uma variável com um número. Verifique se ele está entre 10 e 20 (inclusive). Exiba "Dentro" ou "Fora" do intervalo.
Dica: Use && para verificar duas condições ao mesmo tempo.*/

let numero = Number(prompt("Informe um número:"))

if (numero >=10 && numero <=20){
    alert("Dentro do Intervalo")
}else{
    alert("Fora do intervalo")
}

/**Instrução: Você tem um if/else que verifica cores. Reescreva-o usando switch. Cores: "vermelho" → "Pare", "amarelo" → "Atenção", "verde" → "Siga".
Dica: Cada case corresponde a uma cor.*/

let cor = prompt("Digite a cor do sinal:").toLowerCase()
switch(cor){
case "verde" : alert("Siga");
break;
case "amarelo" : alert("Atenção");
break;
case "vermelho" : alert("Pare");
break;
default: alert("Cor inválida");
}