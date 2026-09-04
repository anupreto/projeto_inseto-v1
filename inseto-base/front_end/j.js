// fazer inte// ==========================================
// PROJETO INSETOS
// j.js
// ==========================================

// Dados iniciais dos insetos
const insetos = [
    {
        nome: "Borboleta",
        categoria: "Lepidópteros",
        descricao: "Inseto conhecido por suas asas coloridas e pela metamorfose.",
        curiosidade: "As borboletas utilizam as antenas para sentir odores."
    },

    {
        nome: "Abelha",
        categoria: "Himenópteros",
        descricao: "Inseto polinizador que vive em colônias.",
        curiosidade: "As abelhas são importantes para a polinização."
    },

    {
        nome: "Formiga",
        categoria: "Himenópteros",
        descricao: "Inseto social que vive em colônias organizadas.",
        curiosidade: "As formigas conseguem trabalhar em grupo para encontrar alimento."
    },

    {
        nome: "Joaninha",
        categoria: "Coleópteros",
        descricao: "Pequeno besouro geralmente vermelho com manchas.",
        curiosidade: "Joaninhas ajudam no controle de pulgões."
    },

    {
        nome: "Besouro",
        categoria: "Coleópteros",
        descricao: "Grupo de insetos extremamente diversificado.",
        curiosidade: "Existem milhares de espécies de besouros."
    },

    {
        nome: "Gafanhoto",
        categoria: "Ortópteros",
        descricao: "Inseto conhecido pelas grandes pernas traseiras.",
        curiosidade: "Gafanhotos conseguem saltar grandes distâncias."
    },

    {
        nome: "Grilo",
        categoria: "Ortópteros",
        descricao: "Inseto conhecido pelo som produzido pelos machos.",
        curiosidade: "O som do grilo é produzido pelo atrito das asas."
    },

    {
        nome: "Libélula",
        categoria: "Odonatos",
        descricao: "Inseto encontrado principalmente próximo de rios e lagos.",
        curiosidade: "As libélulas possuem uma excelente visão."
    }
];


// ==========================================
// ELEMENTOS
// ==========================================

const conteudo = document.querySelector(".wiki-content");
const sidebar = document.querySelector(".wiki-sidebar");
const navegacao = document.querySelector(".topo-nav");


// ==========================================
// INICIALIZAÇÃO
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    carregarPagina();
    carregarSidebar();
    configurarNavegacao();

});


// ==========================================
// CARREGAR PÁGINA
// ==========================================

function carregarPagina() {

    if (!conteudo) {
        console.error("Elemento .wiki-content não encontrado.");
        return;
    }

    conteudo.innerHTML = "";

    criarIntroducao();
    criarCategorias();

}


// ==========================================
// INTRODUÇÃO
// ==========================================

function criarIntroducao() {

    const bloco = document.createElement("section");

    bloco.classList.add("artigo-bloco");

    bloco.innerHTML = `
        <h2>Mundo dos Insetos</h2>

        <p>
            Bem-vindo ao portal de informações sobre insetos.
            Aqui você poderá conhecer diferentes espécies,
            categorias e curiosidades.
        </p>

        <p>
            Escolha uma categoria abaixo para começar a explorar.
        </p>
    `;

    conteudo.appendChild(bloco);

}


// ==========================================
// CATEGORIAS
// ==========================================

function criarCategorias() {

    const bloco = document.createElement("section");

    bloco.classList.add("artigo-bloco");

    bloco.innerHTML = `
        <h2>Categorias</h2>

        <p>
            Encontre informações sobre diferentes grupos de insetos.
        </p>
    `;

    const grid = document.createElement("div");

    grid.classList.add("grid-categorias");

    const categorias = obterCategorias();

    categorias.forEach(categoria => {

        const quantidade = insetos.filter(
            inseto => inseto.categoria === categoria
        ).length;

        const card = document.createElement("div");

        card.classList.add("card-categoria");

        card.innerHTML = `
            <h3>${categoria}</h3>

            <p>
                ${quantidade} inseto(s) cadastrado(s).
            </p>

            <a href="#">
                Ver insetos
            </a>
        `;

        const link = card.querySelector("a");

        link.addEventListener("click", event => {

            event.preventDefault();

            mostrarCategoria(categoria);

        });

        grid.appendChild(card);

    });

    bloco.appendChild(grid);

    conteudo.appendChild(bloco);

}


// ==========================================
// OBTER CATEGORIAS
// ==========================================

function obterCategorias() {

    return [...new Set(
        insetos.map(inseto => inseto.categoria)
    )];

}


// ==========================================
// MOSTRAR CATEGORIA
// ==========================================

function mostrarCategoria(categoria) {

    const antigo = document.querySelector("#resultado-categoria");

    if (antigo) {
        antigo.remove();
    }

    const encontrados = insetos.filter(
        inseto => inseto.categoria === categoria
    );

    const bloco = document.createElement("section");

    bloco.classList.add("artigo-bloco");

    bloco.id = "resultado-categoria";

    bloco.innerHTML = `
        <h2>${categoria}</h2>

        <p>
            Insetos pertencentes a esta categoria:
        </p>
    `;

    const grid = document.createElement("div");

    grid.classList.add("grid-categorias");

    encontrados.forEach(inseto => {

        criarCardInseto(grid, inseto);

    });

    bloco.appendChild(grid);

    conteudo.appendChild(bloco);

    bloco.scrollIntoView({
        behavior: "smooth"
    });

}


// ==========================================
// CRIAR CARD DO INSETO
// ==========================================

function criarCardInseto(container, inseto) {

    const card = document.createElement("div");

    card.classList.add("card-categoria");

    const titulo = document.createElement("h3");

    titulo.textContent = inseto.nome;

    const descricao = document.createElement("p");

    descricao.textContent = inseto.descricao;

    const link = document.createElement("a");

    link.href = "#";

    link.textContent = "Ver curiosidade";

    link.addEventListener("click", event => {

        event.preventDefault();

        mostrarCuriosidade(inseto);

    });

    card.appendChild(titulo);
    card.appendChild(descricao);
    card.appendChild(link);

    container.appendChild(card);

}


// ==========================================
// CURIOSIDADE
// ==========================================

function mostrarCuriosidade(inseto) {

    const antiga = document.querySelector("#curiosidade-inseto");

    if (antiga) {
        antiga.remove();
    }

    const bloco = document.createElement("section");

    bloco.classList.add("artigo-bloco");

    bloco.id = "curiosidade-inseto";

    bloco.innerHTML = `
        <h2>Curiosidade sobre ${inseto.nome}</h2>

        <p>
            ${inseto.curiosidade}
        </p>

        <p>
            Categoria: ${inseto.categoria}
        </p>
    `;

    conteudo.appendChild(bloco);

    bloco.scrollIntoView({
        behavior: "smooth"
    });

}


// ==========================================
// SIDEBAR
// ==========================================

function carregarSidebar() {

    if (!sidebar) {
        return;
    }

    sidebar.innerHTML = "";

    criarSidebarCategorias();
    criarSidebarInformacoes();

}


// ==========================================
// SIDEBAR - CATEGORIAS
// ==========================================

function criarSidebarCategorias() {

    const caixa = document.createElement("div");

    caixa.classList.add("sidebar-box");

    const titulo = document.createElement("h3");

    titulo.textContent = "Categorias";

    const lista = document.createElement("ul");

    obterCategorias().forEach(categoria => {

        const item = document.createElement("li");

        const link = document.createElement("a");

        link.href = "#";

        link.textContent = categoria;

        link.addEventListener("click", event => {

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


// ==========================================
// SIDEBAR - INFORMAÇÕES
// ==========================================

function criarSidebarInformacoes() {

    const caixa = document.createElement("div");

    caixa.classList.add("sidebar-box");

    const titulo = document.createElement("h3");

    titulo.textContent = "Informações";

    const total = document.createElement("p");

    total.textContent =
        `Total de insetos: ${insetos.length}`;

    const categorias = document.createElement("p");

    categorias.textContent =
        `Total de categorias: ${obterCategorias().length}`;

    caixa.appendChild(titulo);
    caixa.appendChild(total);
    caixa.appendChild(categorias);

    sidebar.appendChild(caixa);

}


// ==========================================
// NAVEGAÇÃO
// ==========================================

function configurarNavegacao() {

    if (!navegacao) {
        return;
    }

    const links = navegacao.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", event => {

            const destino = link.getAttribute("href");

            if (!destino || destino === "#") {
                event.preventDefault();
            }

            links.forEach(item => {
                item.classList.remove("ativo");
            });

            link.classList.add("ativo");

        });

    });

}


// ==========================================
// PESQUISA
// ==========================================

function pesquisarInsetos(termo) {

    termo = termo.toLowerCase().trim();

    const antigo = document.querySelector("#resultado-pesquisa");

    if (antigo) {
        antigo.remove();
    }

    if (termo === "") {
        carregarPagina();
        return;
    }

    const resultados = insetos.filter(inseto => {

        return (
            inseto.nome.toLowerCase().includes(termo) ||
            inseto.categoria.toLowerCase().includes(termo) ||
            inseto.descricao.toLowerCase().includes(termo)
        );

    });

    mostrarResultadosPesquisa(resultados, termo);

}


// ==========================================
// RESULTADOS DA PESQUISA
// ==========================================

function mostrarResultadosPesquisa(resultados, termo) {

    const bloco = document.createElement("section");

    bloco.classList.add("artigo-bloco");

    bloco.id = "resultado-pesquisa";

    const titulo = document.createElement("h2");

    titulo.textContent = "Resultado da pesquisa";

    bloco.appendChild(titulo);

    const texto = document.createElement("p");

    texto.textContent = `Pesquisa por: ${termo}`;

    bloco.appendChild(texto);

    const grid = document.createElement("div");

    grid.classList.add("grid-categorias");

    if (resultados.length === 0) {

        const card = document.createElement("div");

        card.classList.add("card-categoria");

        card.innerHTML = `
            <h3>Nenhum resultado</h3>
            <p>
                Nenhum inseto foi encontrado.
            </p>
        `;

        grid.appendChild(card);

    } else {

        resultados.forEach(inseto => {

            criarCardInseto(grid, inseto);

        });

    }

    bloco.appendChild(grid);

    conteudo.appendChild(bloco);

    bloco.scrollIntoView({
        behavior: "smooth"
    });

}


// ==========================================
// DISPONIBILIZAR PESQUISA
// ==========================================

window.pesquisarInsetos = pesquisarInsetos;rface
