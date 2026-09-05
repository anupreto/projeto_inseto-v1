// ========================================
// PROJETO INSETOS
// JavaScript - Front-end
// ========================================


// Quando a página carregar
document.addEventListener("DOMContentLoaded", function () {

    carregarInsetos();

    configurarMenu();

});


// ========================================
// VARIÁVEIS
// ========================================

let insetos = [];


// Elementos do HTML
const conteudo = document.querySelector(".wiki-content");
const sidebar = document.querySelector(".wiki-sidebar");
const menu = document.querySelector(".topo-nav");

// ========================================
// PESQUISA
// ========================================

function pesquisarInsetos(texto) {

    texto = texto.toLowerCase();

    const resultados = insetos.filter(function (inseto) {

        return (
            inseto.nome
                .toLowerCase()
                .includes(texto)

            ||

            inseto.categoria
                .toLowerCase()
                .includes(texto)

            ||

            inseto.descricao
                .toLowerCase()
                .includes(texto)
        );

    });

    mostrarPesquisa(resultados, texto);

}


// ========================================
// MOSTRAR PESQUISA
// ========================================

function mostrarPesquisa(resultados, texto) {

    const antigo =
        document.querySelector(".resultado-pesquisa");

    if (antigo) {

        antigo.remove();

    }

    const bloco = document.createElement("section");

    bloco.classList.add("artigo-bloco");

    bloco.classList.add("resultado-pesquisa");

    const titulo = document.createElement("h2");

    titulo.textContent = "Pesquisa";

    const textoPesquisa = document.createElement("p");

    textoPesquisa.textContent =
        'Resultados para: "' + texto + '"';

    const grid = document.createElement("div");

    grid.classList.add("grid-categorias");

    if (resultados.length === 0) {

        const card = document.createElement("div");

        card.classList.add("card-categoria");

        const tituloCard = document.createElement("h3");

        tituloCard.textContent =
            "Nenhum resultado";

        const textoCard = document.createElement("p");

        textoCard.textContent =
            "Nenhum inseto foi encontrado.";

        card.appendChild(tituloCard);

        card.appendChild(textoCard);

        grid.appendChild(card);

    }

    else {

        resultados.forEach(function (inseto) {

            grid.appendChild(
                criarCard(inseto)
            );

        });

    }

    bloco.appendChild(titulo);

    bloco.appendChild(textoPesquisa);

    bloco.appendChild(grid);

    conteudo.appendChild(bloco);

}


// ========================================
// DISPONIBILIZAR PESQUISA
// ========================================

window.pesquisarInsetos = pesquisarInsetos;


// tema-escuro 
// logica animação logo
