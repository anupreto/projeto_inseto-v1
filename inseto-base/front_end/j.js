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
// CARREGAR INSETOS
// ========================================

function carregarInsetos() {

    fetch("../back_end/p.php")

        .then(function (resposta) {

            return resposta.json();

        })

        .then(function (dados) {

            insetos = dados;

            mostrarInicio();

            mostrarSidebar();

        })

        .catch(function (erro) {

            console.log("Erro ao carregar insetos:", erro);

            conteudo.innerHTML = `
                <section class="artigo-bloco">
                    <h2>Erro</h2>
                    <p>Não foi possível carregar os insetos.</p>
                </section>
            `;

        });

}


// ========================================
// PÁGINA INICIAL
// ========================================

function mostrarInicio() {

    conteudo.innerHTML = "";

    const bloco = document.createElement("section");

    bloco.classList.add("artigo-bloco");

    bloco.innerHTML = `
        <h2>Mundo dos Insetos</h2>

        <p>
            Bem-vindo ao nosso portal sobre insetos
            e invertebrados.
        </p>

        <p>
            Escolha uma categoria abaixo para conhecer
            diferentes tipos de insetos.
        </p>
    `;

    conteudo.appendChild(bloco);

    mostrarCategorias();

}


// ========================================
// MOSTRAR CATEGORIAS
// ========================================

function mostrarCategorias() {

    const bloco = document.createElement("section");

    bloco.classList.add("artigo-bloco");

    bloco.innerHTML = `
        <h2>Categorias</h2>

        <p>
            Veja os grupos de insetos cadastrados.
        </p>
    `;

    const grid = document.createElement("div");

    grid.classList.add("grid-categorias");

    const categorias = pegarCategorias();

    categorias.forEach(function (categoria) {

        const card = document.createElement("div");

        card.classList.add("card-categoria");

        const titulo = document.createElement("h3");

        titulo.textContent = categoria;

        const quantidade = document.createElement("p");

        const total = insetos.filter(function (inseto) {

            return inseto.categoria === categoria;

        }).length;

        quantidade.textContent =
            total + " inseto(s)";

        const link = document.createElement("a");

        link.href = "#";

        link.textContent = "Ver insetos";

        link.addEventListener("click", function (event) {

            event.preventDefault();

            mostrarCategoria(categoria);

        });

        card.appendChild(titulo);

        card.appendChild(quantidade);

        card.appendChild(link);

        grid.appendChild(card);

    });

    bloco.appendChild(grid);

    conteudo.appendChild(bloco);

}


// ========================================
// PEGAR CATEGORIAS
// ========================================

function pegarCategorias() {

    const categorias = [];

    insetos.forEach(function (inseto) {

        if (!categorias.includes(inseto.categoria)) {

            categorias.push(inseto.categoria);

        }

    });

    return categorias;

}


// ========================================
// MOSTRAR INSETOS DA CATEGORIA
// ========================================

function mostrarCategoria(categoria) {

    const antigo =
        document.querySelector(".resultado-categoria");

    if (antigo) {

        antigo.remove();

    }

    const bloco = document.createElement("section");

    bloco.classList.add("artigo-bloco");

    bloco.classList.add("resultado-categoria");

    const titulo = document.createElement("h2");

    titulo.textContent = categoria;

    const texto = document.createElement("p");

    texto.textContent =
        "Insetos dessa categoria:";

    const grid = document.createElement("div");

    grid.classList.add("grid-categorias");

    const encontrados = insetos.filter(function (inseto) {

        return inseto.categoria === categoria;

    });

    encontrados.forEach(function (inseto) {

        const card = criarCard(inseto);

        grid.appendChild(card);

    });

    bloco.appendChild(titulo);

    bloco.appendChild(texto);

    bloco.appendChild(grid);

    conteudo.appendChild(bloco);

    bloco.scrollIntoView({
        behavior: "smooth"
    });

}


// ========================================
// CRIAR CARD
// ========================================

function criarCard(inseto) {

    const card = document.createElement("div");

    card.classList.add("card-categoria");

    const titulo = document.createElement("h3");

    titulo.textContent = inseto.nome;

    const descricao = document.createElement("p");

    descricao.textContent =
        inseto.descricao;

    const link = document.createElement("a");

    link.href = "#";

    link.textContent = "Ver informações";

    link.addEventListener("click", function (event) {

        event.preventDefault();

        mostrarInseto(inseto);

    });

    card.appendChild(titulo);

    card.appendChild(descricao);

    card.appendChild(link);

    return card;

}


// ========================================
// MOSTRAR INFORMAÇÕES
// ========================================

function mostrarInseto(inseto) {

    const antigo =
        document.querySelector(".informacoes-inseto");

    if (antigo) {

        antigo.remove();

    }

    const bloco = document.createElement("section");

    bloco.classList.add("artigo-bloco");

    bloco.classList.add("informacoes-inseto");

    const titulo = document.createElement("h2");

    titulo.textContent = inseto.nome;

    const descricao = document.createElement("p");

    descricao.textContent =
        inseto.descricao;

    bloco.appendChild(titulo);

    bloco.appendChild(descricao);

    if (inseto.categoria) {

        const categoria = document.createElement("p");

        categoria.textContent =
            "Categoria: " + inseto.categoria;

        bloco.appendChild(categoria);

    }

    if (inseto.nome_cientifico) {

        const cientifico = document.createElement("p");

        cientifico.textContent =
            "Nome científico: " +
            inseto.nome_cientifico;

        bloco.appendChild(cientifico);

    }

    if (inseto.habitat) {

        const habitat = document.createElement("p");

        habitat.textContent =
            "Habitat: " +
            inseto.habitat;

        bloco.appendChild(habitat);

    }

    if (inseto.alimentacao) {

        const alimentacao = document.createElement("p");

        alimentacao.textContent =
            "Alimentação: " +
            inseto.alimentacao;

        bloco.appendChild(alimentacao);

    }

    if (inseto.curiosidade) {

        const curiosidade = document.createElement("p");

        curiosidade.textContent =
            "Curiosidade: " +
            inseto.curiosidade;

        bloco.appendChild(curiosidade);

    }

    conteudo.appendChild(bloco);

    bloco.scrollIntoView({
        behavior: "smooth"
    });

}


// ========================================
// SIDEBAR
// ========================================

function mostrarSidebar() {

    sidebar.innerHTML = "";

    mostrarCategoriasSidebar();

    mostrarInformacoesSidebar();

}


// ========================================
// CATEGORIAS DA SIDEBAR
// ========================================

function mostrarCategoriasSidebar() {

    const caixa = document.createElement("div");

    caixa.classList.add("sidebar-box");

    const titulo = document.createElement("h3");

    titulo.textContent = "Categorias";

    const lista = document.createElement("ul");

    const categorias = pegarCategorias();

    categorias.forEach(function (categoria) {

        const item = document.createElement("li");

        const link = document.createElement("a");

        link.href = "#";

        link.textContent = categoria;

        link.addEventListener("click", function (event) {

            event.preventDefault();

            mostrarCategoria(categoria);

        });

        item.appendChild(link);

        lista.appendChild(item);

    });

    caixa.appendChild(titulo);

    caixa.appendChild(lista);

    sidebar.appendChild(caixa);

}


// ========================================
// INFORMAÇÕES DA SIDEBAR
// ========================================

function mostrarInformacoesSidebar() {

    const caixa = document.createElement("div");

    caixa.classList.add("sidebar-box");

    const titulo = document.createElement("h3");

    titulo.textContent = "Informações";

    const total = document.createElement("p");

    total.textContent =
        "Insetos cadastrados: " +
        insetos.length;

    const categorias = document.createElement("p");

    categorias.textContent =
        "Categorias: " +
        pegarCategorias().length;

    caixa.appendChild(titulo);

    caixa.appendChild(total);

    caixa.appendChild(categorias);

    sidebar.appendChild(caixa);

}


// ========================================
// MENU
// ========================================

function configurarMenu() {

    if (!menu) {
        return;
    }

    const links = menu.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            links.forEach(function (item) {

                item.classList.remove("ativo");

            });

            link.classList.add("ativo");

        });

    });

}


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
