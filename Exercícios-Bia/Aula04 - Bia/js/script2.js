/**Atividade 1 - Decisão com if/else: Crie uma variável com idade e use if/else para decidir se é maior de idade ou não */
let idade = Number(prompt("Informe sua idade: "))

if(idade<18){
    alert("Menor de idade")
}else{
    alert("Maior de idade")
}

//Múltiplos casos com switch: Crie um switch que classifique um número de 1 a 3 como "Baixo", "Médio" ou "Alto"
let numero = Number(prompt("Informe um número de 1 a 3: "))

switch(numero){
    case 1:
        alert("Baixo")
        break
    case 2:
        alert("Médio")
        break
    case 3:
        alert("Alto")
        break
    default:
        alert("Número inválido")
}

//Ternário: Use operador ternário para verificar se um número é positivo ou negativo
let number = Number(prompt("Digite um número: "))

let imparPar = number % 2 == 0 ? "Número par" : "Número ímpar";
alert(imparPar)

//Lógica combinada: Use if com && para verificar se uma pessoa pode votar (idade >= 16 E nacionalidade brasileira)
let idade2 = Number(prompt("Qual a sua idade?"))
let nacionalidade = prompt("Você é brasileiro? Digite true para sim o false para não") ==="true";

if(idade2 >=16 && nacionalidade){
    alert("Pode votar")
}else{
    alert ("Não pode votar")
}