// Seleciona os elementos do HTML
const tituloFilme = document.getElementById("tituloFilme");
const generoFilme = document.getElementById("generoFilme");
const dataLancamento = document.getElementById("dataLancamento");
const imagemCapa = document.getElementById("imagemCapa");
const statusFilme = document.getElementById("statusFilme");
const avaliacaoFilme = document.getElementById("avaliacaoFilme");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnLimpar = document.getElementById("btnLimpar");

const biblioteca = document.querySelector(".biblioteca");

let contadorFilmes = 0;
const displayContador = document.getElementById('totalFilmes');
const toggleBtn = document.getElementById('theme-toggle');

// Função para limpar os campos
function limparCampos() {
    document.getElementById("tituloFilme").value = "";
    document.getElementById("generoFilme").value = "";
    document.getElementById("dataLancamento").value = "";
    document.getElementById("statusFilme").value = "";
    document.getElementById("avaliacaoFilme").value = "";
}


toggleBtn.addEventListener('click', () => {
  // Liga/desliga a classe no body
  document.body.classList.toggle('dark-mode');
});

// Adiciona filme ao clicar no botão
btnAdicionar.addEventListener("click", () => {
    const titulo = tituloFilme.value.trim();
    const genero = generoFilme.value.trim();
    const data = dataLancamento.value;
    const status = statusFilme.value.trim();
    const avaliacao = avaliacaoFilme.value.trim()
    contadorFilmes++;
    displayContador.textContent = contadorFilmes;;

   if (!titulo || !genero || !data || !avaliacao || !status === "") {
        alert("Preencha todos os campos obrigatórios!");
        return; // Para aqui se faltar algo
    }

    // Cria o elemento que vai representar o filme
    const filme = document.createElement("div");
    filme.classList.add("filme");

    // Cria os elementos com as informações
    const h3 = document.createElement("h3");
    h3.textContent = titulo;

    const pGenero = document.createElement("p");
    pGenero.textContent = `Gênero: ${genero}`;

    const pData = document.createElement("p");
    pData.textContent = `Lançamento: ${data}`;

    const pStatus = document.createElement("p");
    pStatus.textContent = `Status: ${status}`;

    const pAvaliacao = document.createElement("p");
    pAvaliacao.textContent = `Avaliação: ⭐ ${avaliacao}/5`;

    // Adiciona imagem, se houver
    if (imagemCapa.files.length > 0) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(imagemCapa.files[0]);
        img.alt = `Capa do filme ${titulo}`;
        img.width = 150;
        filme.appendChild(img);
    }

    // Adiciona as informações ao card do filme
    filme.appendChild(h3);
    filme.appendChild(pGenero);
    filme.appendChild(pData);
    filme.appendChild(pStatus);
    filme.appendChild(pAvaliacao);

    // botão de excluir
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir Filme";
    btnExcluir.classList.add("btn-excluir");

    btnExcluir.addEventListener("click", () => {
        filme.remove();
        contadorFilmes--; 
        displayContador.textContent = contadorFilmes; 
    });

    filme.appendChild(btnExcluir);
    biblioteca.appendChild(filme);
    limparCampos();
});
