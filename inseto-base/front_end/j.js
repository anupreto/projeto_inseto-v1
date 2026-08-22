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
});
