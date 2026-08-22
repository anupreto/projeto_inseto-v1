console.log("Mundo dos Invertebrados iniciando!");

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
