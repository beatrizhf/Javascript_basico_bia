//DE 0 Á 10
for (let i = 0; i < 11; i++){
    console.log(i);
}

//DE 0 Á 20 SOMENTE PARES
for (let o = 0; o <= 20; o++){
    if (o % 2 ==0) {
    console.log(o);
}}

//DE 5 Á 0
for (let u=5; u > 0; u--){
    console.log(u);
}
console.log("Lançamento!");

//TABUADA
let numero = 7;
for(let a = 1; a<=10; a++){
    console.log(numero + " x " + a + " = " + (numero * a));
}

//BATERIA
let bateria = 100;

while(bateria>0){
    console.log("Bateria: " + bateria + "%");
    bateria -= 20;
}

//SENHA
let senha= "";
while(senha !== "123"){
    senha = prompt("Digite sua senha: ");
}
alert("Acesso liberado!");

//ENERGIA
let energia = 100;
while(energia>0){
console.log("Energia: " + energia + "xp");
energia -= 10;
}

//TENTANDO JOGAR
let credito = 0;
do{
    console.log("Tentando jogar...");
}while(credito>0);

//MENU
let opcao;
do {
opcao = Number(prompt("Escolha 1. Pra jogar 2. Ver Ranking 3. Sair"))
switch (opcao){
case 1: alert("Jogar");
    break
case 2: alert("Ranking");
    break
case 3: alert("Sair");
    break
default: alert("Opção inválida")
}}
while(opcao !== 3);

//PLAYLIST
let playlist = [
    "Panic at the Disco",
    "My Chemical Romance",
    "System of a Down",
    "BMTH",
    "Black Veil Brides",
    "Alexandria",
    "Evanecense",
    "Linkin Park",
];
for(let m = 0; m < playlist.length; m++){
    console.log(playlist[7]);
}



