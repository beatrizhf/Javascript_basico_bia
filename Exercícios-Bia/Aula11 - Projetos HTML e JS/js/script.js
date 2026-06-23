 function alterarTitulo() {
            document.getElementById("titulo").innerText = "Título alterado com JavaScript!";
        }
        function mostrarMensagem(){
            alert("Você clicou no botão!");
        }
        function mostrarNome(){
            let nome = document.getElementById("nome").value;
            document.getElementById("resultado").innerText = "Olá, " + nome + "!";
        }
        function verificarIdade() {
            let idade = Number(document.getElementById("idade").value);

            if (idade >= 18) {
                document.getElementById("resultadoIdade").innerText = "Você é maior de idade.";
            } else {
                document.getElementById("resultadoIdade").innerText = "Você é menor de idade.";
            }
        }
function trocarImagem() {
    document.getElementById("imagem").src = "img/ceu2.jpg";
}

function esconderTexto() {
    document.getElementById("texto").style.display = "none";
}

function mostrarTexto() {
    document.getElementById("texto").style.display = "block";
}

function criarParagrafo() {
    let novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = "Este parágrafo foi criado com JavaScript.";

    document.getElementById("area").appendChild(novoParagrafo);
}

function removerAviso() {
    document.getElementById("area").remove();
}

function calcularIMC() {
            let peso = Number(document.getElementById("peso").value);
            let altura = Number(document.getElementById("altura").value);

            let imc = peso / (altura * altura);

            document.getElementById("resultado").innerText = "Seu IMC é: " + imc.toFixed(2);
        }

        function adicionarTarefa() {
            let textoTarefa = document.getElementById("tarefa").value;

            let item = document.createElement("li");
            item.innerText = textoTarefa;

            document.getElementById("lista").appendChild(item);

            document.getElementById("tarefa").value = "";
        }

        function adicionarTarefa() {
            let textoTarefa = document.getElementById("tarefa").value;

            if (textoTarefa === "") {
                alert("Digite uma tarefa antes de adicionar.");
                return;
            }

            let item = document.createElement("li");
            item.innerText = textoTarefa + " ";

            let botaoExcluir = document.createElement("button");
            botaoExcluir.innerText = "x";

            botaoExcluir.onclick = function() {
                item.remove();
            };

            item.appendChild(botaoExcluir);
            document.getElementById("lista").appendChild(item);

            document.getElementById("tarefa").value = "";
        }