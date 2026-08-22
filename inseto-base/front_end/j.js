console.log("Mundo dos Invertebrados iniciando!");

function explorarInsetos() {
    document.getElementById("insetos").scrollIntoView({ behavior: "smooth" });
}

const curiosidades = [
    {
        titulo: "Super Força",
        descricao: "As formigas conseguem carregar até 50 vezes o seu próprio peso corporal.",
        emoji: "💪"
    },
    {
        titulo: "Paladar nos Pés",
        descricao: "As borboletas sentem o gosto das coisas pousando sobre elas, usando os próprios pés!",
        emoji: "🦶"
    },
    {
        titulo: "A Dança das Abelhas",
        descricao: "As abelhas se comunicam e indicam onde há pólen fazendo uma dança geométrica no ar.",
        emoji: "🧭"
    }
];

const listaCuriosidades = document.getElementById("listaCuriosidades");

curiosidades.forEach(function(item) {
    listaCuriosidades.innerHTML += `
    <div class="card-inseto">
        <h3>${item.emoji} ${item.titulo}</h3>
        <p>${item.descricao}</p>
    </div>
    `;
});console.log("Mundo dos Invertebrados iniciando!");

let nomeProjeto = "Mundo dos Invertebrados";

console.log(nomeProjeto);

function explorarInsetos() {
    document.getElementById("insetos").scrollIntoView({
        behavior: "smooth"
    });
}

const insetos = [
   {
        nome: "Borboleta",
        descricao: "Inseto conhecido pelas suas asas coloridas.",
        emoji: "🦋"
    },
    {
        nome: "Abelha",
        descricao: "Inseto importante para a polinização das plantas.",
        emoji: "🐝"
    },
    {
        nome: "Formiga",
        descricao: "Inseto social que vive em colônias organizadas.",
        emoji: "🐜"
    },
    {
        nome: "Besouro",
        descricao: "Um dos grupos de insetos com maior diversidade de espécies.",
        emoji: "🪲"
    },
    {
        nome: "Joaninha",
        descricao: "Pequeno besouro conhecido por suas cores chamativas e pintinhas.",
        emoji: "🐞"
    },
    {
        nome: "Louva-a-deus",
        descricao: "Predador ágil conhecido por suas patas dianteiras postas em posição de prece.",
        emoji: "🦗"
    }
];

const listaInsetos = document.getElementById("listaInsetos");

insetos.forEach(function(inseto) {
    listaInsetos.innerHTML += `
    <div class="card-inseto">
        <h3>${inseto.emoji} ${inseto.nome}</h3>
        <p>${inseto.descricao}</p>
    </div>
    `;

});

const curiosidades = [
    {
        titulo: "Super Força",
        descricao: "As formigas conseguem carregar até 50 vezes o seu próprio peso corporal.",
        emoji: "💪"
    },
    {
        titulo: "Paladar nos Pés",
        descricao: "As borboletas sentem o gosto das coisas pousando sobre elas, usando os próprios pés!",
        emoji: "🦶"
    },
    {
        titulo: "A Dança das Abelhas",
        descricao: "As abelhas se comunicam e indicam onde há pólen fazendo uma dança geométrica no ar.",
        emoji: "🧭"
    }
];

const listaCuriosidades = document.getElementById("listaCuriosidades");

curiosidades.forEach(function(item) {
    listaCuriosidades.innerHTML += `
    <div class="card-inseto">
        <h3>${item.emoji} ${item.titulo}</h3>
        <p>${item.descricao}</p>
    </div>
    `;
}); 
