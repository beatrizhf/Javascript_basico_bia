//Lista de Exercícios - Estruturas Condicionais/

/*1. Maior entre dois números. Faça um programa que peça dois números e imprima o maior deles.
let numero1 = Number(prompt("Digite o primeiro número: "))
let numero2 = Number(prompt("Digite o segundo número: "))

if(numero1 > numero2){
    alert(numero1)
}else{
    alert(numero2)
}

2. Número positivo ou negativo. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
let numeroPar = Number(prompt("Digite um número aqui: "))

let ImparPar = numeroPar%2 === 0 ? "Número Par" : "Número Ímpar";
alert(ImparPar)

3. Identificação de sexo. Faça um programa que verifique se uma letra digitada é **"F"** ou **"M"**.
let femMasc = prompt("Digite F para feminino ou M para Masculino")
switch(femMasc){
    case "F": alert("Feminino")
    break
    case "M": alert("Maculino")
    break
    default: alert("Sexo inválido")
}

4. Vogal ou consoante. Faça um programa que verifique se uma letra digitada é vogal ou consoante. 
let letra = prompt("Digite uma letra:")
let vogCons = letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" ? "Vogal" : "Consoante";
alert(vogCons)

 Faça um programa para a leitura de duas notas parciais de um aluno.
Exiba:
- **Aprovado**, se a média for maior ou igual a 7;
- **Aprovado com Distinção**, se a média for igual a 10;
- **Reprovado**, se a média for menor que 7.

let nota1 = Number(prompt("Digite a primeira nota: "))
let nota2 = Number(prompt("Digite a segunda nota: "))       
let media = (nota1 + nota2) / 2
if (media >= 7 && media < 10){
    alert("Aprovado")
}else if (media === 10){
    alert("Aprovado com Distinção")
}
else{
    alert("Reprovado")
}

6. Maior de três números
Faça um programa que leia três números e mostre o maior deles.
let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))
let num3 = Number(prompt("Digite o terceiro número: "))
let maior = num1 > num2 && num1 > num3 ? num1 : num2 > num1 && num2 > num3 ? num2 : num3;
alert("O maior número é: " + maior)


## 7. Maior e menor de três números
Faça um programa que leia três números e mostre o maior e o menor deles. */

let numeroA = Number(prompt("Digite o primeiro número: "))
let numeroB = Number(prompt("Digite o segundo número: "))
let numeroC = Number(prompt("Digite o terceiro número: "))  
let maiorNum5 = numeroA > numeroB && numeroA > numeroC ? numeroA : numeroB > numeroA && numeroB > numeroC ? numeroB : numeroC;
let menorNum5 = numeroA < numeroB && numeroA < numeroC ? numeroA : numeroB < numeroA && numeroB < numeroC ? numeroB : numeroC;
alert("O maior número é: " + maiorNum5 + " e o menor número é: " + menorNum5)


/**## 8. Produto mais barato
Faça um programa que pergunte o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é sempre pelo mais barato. */
let preco1 = Number(prompt("Digite o preço do primeiro produto: "))
let preco2 = Number(prompt("Digite o preço do segundo produto: "))
let preco3 = Number(prompt("Digite o preço do terceiro produto: "))
let maisBarato = preco1 < preco2 && preco1 < preco3 ? "O primeiro produto é o mais barato" : preco2 < preco1 && preco2 < preco3 ? "O segundo produto é o mais barato" : "O terceiro produto é o mais barato";
alert(maisBarato)


/**## 9. Ordem decrescente
Faça um programa que leia três números e mostre-os em ordem decrescente. */
let valor1 = Number(prompt("Digite o primeiro número: "))
let valor2 = Number(prompt("Digite o segundo número: "))
let valor3 = Number(prompt("Digite o terceiro número: "))
let ordemDecrescente = valor1 > valor2 && valor1 > valor3 ? valor1 + ", " + (valor2 > valor3 ? valor2 + ", " + valor3 : valor3 + ", " + valor2) : valor2 > valor1 && valor2 > valor3 ? valor2 + ", " + (valor1 > valor3 ? valor1 + ", " + valor3 : valor3 + ", " + valor1) : valor3 + ", " + (valor1 > valor2 ? valor1 + ", " + valor2 : valor2 + ", " + valor1);
alert("Os números em ordem decrescente são: " + ordemDecrescente)


/**10. Turno de estudo
Faça um programa que pergunte em que turno você estuda.

Digite:

- M → Matutino
- V → Vespertino
- N → Noturno

Exiba:

- "Bom dia!"
- "Boa tarde!"
- "Boa noite!"
- "Valor inválido" */

let turno = prompt("Digite M para Matutino, V para Vespertino ou N para Noturno: ")
if (turno === "M"){
    alert("Bom dia!")
}else if (turno === "V"){
    alert("Boa tarde!")
}else if (turno === "N"){
    alert("Boa noite!")
}else{
    alert("Valor inválido")
}   


/**11. Reajuste salarial
As organizações CSM resolveram dar um aumento de salário aos seus colaboradores.

Faça um programa que receba o salário de um colaborador e calcule o reajuste conforme a tabela:

| Faixa Salarial | Percentual |
|---------------|------------|
| Até R$ 280,00 | 20% |
| De R$ 280,01 até R$ 700,00 | 15% |
| De R$ 700,01 até R$ 1.500,00 | 10% |
| Acima de R$ 1.500,00 | 5% |

Após o reajuste, informe:

- Salário antes do reajuste;
- Percentual aplicado;
- Valor do aumento;
- Novo salário.
 */

let salario = Number(prompt("Digite o salário do colaborador: "))   
let percentual = salario <= 280 ? 20 : salario > 280 && salario <= 700 ? 15 : salario > 700 && salario <= 1500 ? 10 : 5;
let valorAumento = salario * (percentual / 100);
let novoSalario = salario + valorAumento;
alert("Salário antes do reajuste: R$ " + salario.toFixed(2) + "\nPercentual aplicado: " + percentual + "%\nValor do aumento: R$ " + valorAumento.toFixed(2) + "\nNovo salário: R$ " + novoSalario.toFixed(2))


/**12. Folha de pagamento
Faça um programa para cálculo de folha de pagamento.

O programa deverá pedir:

- Valor da hora trabalhada;
- Quantidade de horas trabalhadas no mês. 

Desconto do IR

| Salário Bruto | IR |
|--------------|----|
| Até R$ 900,00 | Isento |
| Até R$ 1.500,00 | 5% |
| Até R$ 2.500,00 | 10% |
| Acima de R$ 2.500,00 | 20% |

Considere:

- INSS: 10%
- Sindicato: 3%
- FGTS: 11% (não é descontado)

Exemplo de saída:

```text
Salário Bruto (5 * 220)     : R$ 1100,00
(-) IR (5%)                : R$   55,00
(-) INSS (10%)             : R$  110,00
FGTS (11%)                 : R$  121,00
Total de descontos         : R$  165,00
Salário Líquido            : R$  935,00
```
*/
let valorHora = Number(prompt("Digite o valor da hora trabalhada: "))
let horasTrabalhadas = Number(prompt("Digite a quantidade de horas trabalhadas no mês: "))
let salarioBruto = valorHora * horasTrabalhadas;
let descontoIR = salarioBruto <= 900 ? 0 : salarioBruto > 900 && salarioBruto <= 1500 ? salarioBruto * 0.05 : salarioBruto > 1500 && salarioBruto <= 2500 ? salarioBruto * 0.10 : salarioBruto * 0.20;
let descontoINSS = salarioBruto * 0.10;
let descontoSindicato = salarioBruto * 0.03;
let fgts = salarioBruto * 0.11;
let totalDescontos = descontoIR + descontoINSS + descontoSindicato;
let salarioLiquido = salarioBruto - totalDescontos;
alert("Salário Bruto: R$ " + salarioBruto.toFixed(2) + "\n(-) IR: R$ " + descontoIR.toFixed(2) + "\n(-) INSS: R$ " + descontoINSS.toFixed(2) + "\n(-) Sindicato: R$ " + descontoSindicato.toFixed(2) + "\nFGTS: R$ " + fgts.toFixed(2) + "\nTotal de descontos: R$ " + totalDescontos.toFixed(2) + "\nSalário Líquido: R$ " + salarioLiquido.toFixed(2))


/**13. Dia da semana
Faça um programa que leia um número e exiba o dia correspondente da semana.

| Número | Dia |
|---------|-----|
| 1 | Domingo |
| 2 | Segunda |
| 3 | Terça |
| 4 | Quarta |
| 5 | Quinta |
| 6 | Sexta |
| 7 | Sábado |

Caso seja digitado outro valor, exiba:

```text
Valor inválido
``` */
let diaSemana = Number(prompt("Digite um número de 1 a 7 para saber o dia da semana: "))
let dia = diaSemana === 1 ? "Domingo" : diaSemana === 2 ? "Segunda" : diaSemana === 3 ? "Terça" : diaSemana === 4 ? "Quarta" : diaSemana === 5 ? "Quinta" : diaSemana === 6 ? "Sexta" : diaSemana === 7 ? "Sábado" : "Valor inválido";
alert(dia)


/**14. Conceito por média
Faça um programa que leia duas notas parciais e calcule a média.

| Média | Conceito |
|---------|----------|
| 9,0 a 10,0 | A |
| 7,5 a 9,0 | B |
| 6,0 a 7,5 | C |
| 4,0 a 6,0 | D |
| 0 a 4,0 | E |

Exiba:

- Notas;
- Média;
- Conceito;
- Situação.

Situação:

- A, B ou C → APROVADO
- D ou E → REPROVADO */
let nota7 = Number(prompt("Digite a primeira nota: "))
let nota8 = Number(prompt("Digite a segunda nota: "))
let media10 = (nota7 + nota8) / 2
let conceito = media10 >= 9 && media10 <= 10 ? "A" : media10 >= 7.5 && media10 < 9 ? "B" : media10 >= 6 && media10 < 7.5 ? "C" : media10 >= 4 && media10 < 6 ? "D" : "E";
let situacao = conceito === "A" || conceito === "B" || conceito === "C" ? "APROVADO" : "REPROVADO";
alert("Notas: " + nota7 + ", " + nota8 + "\nMédia: " + media10.toFixed(2) + "\nConceito: " + conceito + "\nSituação: " + situacao)

/**15. Tipos de triângulo
Faça um programa que peça os três lados de um triângulo.

Verifique se os lados podem formar um triângulo.

Se formarem, informe se é:

- Equilátero → três lados iguais;
- Isósceles → dois lados iguais;
- Escaleno → três lados diferentes. */
let lado1 = Number(prompt("Digite o primeiro lado do triângulo: "))
let lado2 = Number(prompt("Digite o segundo lado do triângulo: "))
let lado3 = Number(prompt("Digite o terceiro lado do triângulo: "))
if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2){
    let tipoTriangulo = lado1 === lado2 && lado2 === lado3 ? "Equilátero" : lado1 === lado2 || lado1 === lado3 || lado2 === lado3 ? "Isósceles" : "Escaleno";
    alert("Os lados formam um triângulo do tipo: " + tipoTriangulo)
}else{
    alert("Os lados não formam um triângulo")
}


/**16. Equação do segundo grau
Faça um programa que calcule as raízes da equação:

```text
ax² + bx + c = 0
```

Regras:

- Se `a = 0`, a equação não é de segundo grau.
- Se `Δ < 0`, não possui raízes reais.
- Se `Δ = 0`, possui apenas uma raiz real.
- Se `Δ > 0`, possui duas raízes reais.
 */
let a = Number(prompt("Digite o valor de a: "))
let b = Number(prompt("Digite o valor de b: "))
let c = Number(prompt("Digite o valor de c: "))
if (a === 0){
    alert("A equação não é de segundo grau")
}else{  
    let delta = b**2 - 4*a*c;
    if (delta < 0){
        alert("A equação não possui raízes reais")
    }else if (delta === 0){
        let raiz = -b / (2*a);
        alert("A equação possui apenas uma raiz real: " + raiz.toFixed(2))
    }else{
        let raiz1 = (-b + Math.sqrt(delta)) / (2*a);
        let raiz2 = (-b - Math.sqrt(delta)) / (2*a);
        alert("A equação possui duas raízes reais: " + raiz1.toFixed(2) + " e " + raiz2.toFixed(2))
    }
}

/**17. Ano bissexto
Faça um programa que leia um ano e informe se ele é ou não bissexto. */
let ano1 = Number(prompt("Digite um ano: "))
let bissexto = (ano1 % 4 === 0 && ano % 100 !== 0) || (ano1 % 400 === 0) ? "Bissexto" : "Não é bissexto";
alert("O ano " + ano1 + " é: " + bissexto)


/**18. Par ou ímpar
Faça um programa que leia um número inteiro e determine se ele é par ou ímpar.


> Dica: utilize o operador módulo `%`. */
let numeroParImpar = Number(prompt("Digite um número inteiro: "))
let parImpar2 = numeroParImpar % 2 === 0 ? "Par" : "Ímpar";
alert("O número é: " + parImpar2)

/**19. Características de um número
Faça um programa que leia um número e pergunte qual operação deseja realizar.

O resultado deve indicar se o número é:

- Par ou ímpar;
- Positivo ou negativo. */
let numeroo = Number(prompt("Digite um número: "))
let parImpar = numeroo % 2 === 0 ? "Par" : "Ímpar";
let posNeg = numeroo >= 0 ? "Positivo" : "Negativo";
alert("O número é: " + parImpar + " e " + posNeg)


/**20. Investigação criminal
Faça um programa que faça as seguintes perguntas:

1. Telefonou para a vítima?
2. Esteve no local do crime?
3. Mora perto da vítima?
4. Devia para a vítima?
5. Já trabalhou com a vítima?

Classificação:

| Respostas positivas | Classificação |
|---------------------|--------------|
| 2 | Suspeita |
| 3 ou 4 | Cúmplice |
| 5 | Assassino |
| Caso contrário | Inocente |
 */
let resposta1 = prompt("Telefonou para a vítima? (Sim/Não)")
let resposta2 = prompt("Esteve no local do crime? (Sim/Não)")
let resposta3 = prompt("Mora perto da vítima? (Sim/Não)")
let resposta4 = prompt("Devia para a vítima? (Sim/Não)")
let resposta5 = prompt("Já trabalhou com a vítima? (Sim/Não)")
let respostasPositivas = [resposta1, resposta2, resposta3, resposta4, resposta5].filter(resposta => resposta.toLowerCase() === "sim").length;
let classificacao = respostasPositivas === 2 ? "Suspeita" : respostasPositivas === 3 || respostasPositivas === 4 ? "Cúmplice" : respostasPositivas === 5 ? "Assassino" : "Inocente";
alert("Classificação: " + classificacao)    

/**21. Maior e menor entre dois números
Faça um programa que peça dois números ao usuário e mostre qual o maior e qual o menor. */
let numA = Number(prompt("Digite o primeiro número: "))
let numB = Number(prompt("Digite o segundo número: "))
let maiorNum = numA > numB ? numA : numB;
let menorNum = numA < numB ? numA : numB;
alert("O maior número é: " + maiorNum + " e o menor número é: " + menorNum)

/**22. Maior e menor entre três inteiros
Faça um programa que receba três números inteiros e informe qual deles é o maior e qual é o menor. */
let numero11 = Number(prompt("Digite o primeiro número: "))
let numero22 = Number(prompt("Digite o segundo número: "))
let numero33 = Number(prompt("Digite o terceiro número: "))
let maiorNum2 = numero11 > numero22 && numero11 > numero33 ? numero11 : numero22 > numero11 && numero22 > numero33 ? numero22 : numero33;
let menorNum2 = numero11 < numero22 && numero11 < numero33 ? numero11 : numero22 < numero11 && numero22 < numero33 ?numero22 :numero33;
alert("O maior número é: " + maiorNum2 + " e o menor número é: " + menorNum2) 


/**23. Par ou ímpar em C
Escreva um programa em C que receba um número inteiro e diga se ele é par ou ímpar.
> Dica: utilize o operador `%`.*/
let numeroCC = Number(prompt("Digite um número inteiro: "))
let parImparC = numeroCC % 2 === 0 ? "Par" : "Ímpar";
alert("O número é: " + parImparC)


/**24. Circunferência
Escreva um programa que pergunte o raio de uma circunferência e mostre:

- Diâmetro;
- Comprimento;
- Área. */
let raio1 = Number(prompt("Digite o raio da circunferência: "))
let diametro1 = 2 * raio1;
let comprimento1 = 2 * Math.PI * raio1;
let area = Math.PI * raio1**2;
alert("Diâmetro: " + diametro1.toFixed(2) + "\nComprimento: " + comprimento1.toFixed(2) + "\nÁrea: " + area.toFixed(2))   


/**25. Doação de sangue
Para doar sangue é necessário ter entre 18 e 67 anos.

Faça um programa que pergunte a idade de uma pessoa e informe se ela pode doar sangue.

> Utilize os operadores lógicos `&&` e `||`. */
let idade100 = Number(prompt("Digite a sua idade: "))
let podeDoar = idade100 >= 18 && idade100 <= 67 ? "Você pode doar sangue" : "Você não pode doar sangue";
alert(podeDoar)


/**26. Validação de data
Escreva um programa que pergunte:

- Dia;
- Mês;
- Ano.

Informe se a data é válida ou não.

Caso não seja válida, informe o motivo.

### Considere

- Todos os meses possuem 31 dias;
- O ano atual é 2013. */
let diaData = Number(prompt("Digite o dia: "))
let mes = Number(prompt("Digite o mês: "))
let anoo = Number(prompt("Digite o ano: "))
let dataValida = diaData >= 1 && diaData <= 31 && mes >= 1 && mes <= 12 && anoo === 2013 ? "Data válida" : "Data inválida";
alert(dataValida)   

/**27. Troca de valores
Crie um programa que:

1. Leia um número e armazene em `x`;
2. Leia outro número e armazene em `y`;
3. Mostre os valores;
4. Troque os valores entre as variáveis;
5. Mostre os valores após a troca.

Exemplo:

```text
Antes:
x = 10
y = 20

Depois:
x = 20
y = 10
``` */
let xx = Number(prompt("Digite o valor de x: "))
let yy = Number(prompt("Digite o valor de y: "))
alert("Antes:\nx = " + xx + "\ny = " + yy)
let temp = xx;
xx = yy;
yy = temp;
alert("Depois:\nx = " + xx + "\ny = " + yy)