<?php
$grupo = isset($_GET['grupo']) ? $_GET['grupo'] : '';

$conteudos = [
    'aracnideos' => [
        'titulo' => 'Aracnídeos',
        'descricao' => 'Aranhas, escorpiões, ácaros e carrapatos. Oito patas e predadores natos.',
        'texto' => 'Os aracnídeos formam uma classe de artrópodes que inclui aranhas, escorpiões, ácaros e carrapatos. Eles se diferenciam dos insetos por não possuírem asas ou antenas, além de apresentarem o corpo dividido em cefalotórax e abdome, acompanhado por quatro pares de patas locomotores.'
    ],
    'insetos' => [
        'titulo' => 'Insetos',
        'descricao' => 'A classe mais numerosa da Terra. Corpo dividido em três partes e asas.',
        'texto' => 'Os insetos representam o grupo com maior diversidade de espécies no planeta. Possuem o corpo dividido em cabeça, tórax e abdome, três pares de patas e, na grande maioria das vezes, asas que permitiram a colonização de quase todos os habitats terrestres.'
    ],
    'crustaceos' => [
        'titulo' => 'Crustáceos',
        'descricao' => 'Caranguejos, camarões e lagostas. Exclusivamente aquáticos em sua maioria.',
        'texto' => 'A maioria dos crustáceos vive em ambientes aquáticos, sejam marinhos ou de água doce. O grupo inclui caranguejos, camarões, lagostas e cracas. Possuem respiração branquial e um exoesqueleto rígido rico em carbonato de cálcio.'
    ],
    'moluscos' => [
        'titulo' => 'Moluscos',
        'descricao' => 'Polvos, lulas e caramujos. Corpos moles e alta inteligência evolutiva.',
        'texto' => 'Os moluscos possuem corpo mole, muitas vezes protegido por uma concha calcária secretada pelo manto. O filo abrange desde animais sésseis e filtradores, como os mexilhões, até predadores altamente complexos e inteligentes, como polvos e lulas.'
    ],
    'cnidarios' => [
        'titulo' => 'Cnidários',
        'descricao' => 'Águas-vivas, corais e anêmonas. Mestres gelatinosos dos oceanos.',
        'texto' => 'Os cnidários são animais aquáticos caracterizados pela presença de cnidócitos, células urticantes usadas para defesa e captura de presas. Apresentam duas formas corporais principais ao longo de seu ciclo: o pólipo (fixo) e a medusa (livre-natante).'
    ],
    'equinodermos' => [
        'titulo' => 'Equinodermos',
        'descricao' => 'Estrelas-do-mar e ouriços. Simetria radial e vida marinha fascinante.',
        'texto' => 'Exclusivamente marinhos, os equinodermos possuem um esqueleto interno calcário formado por espículos e um sistema vascular aquífero exclusivo, que movimenta seus pés ambulacrários para locomoção e fixação.'
    ]
];

if (array_key_exists($grupo, $conteudos)) {
    $info = $conteudos[$grupo];
} else {
    $info = [
        'titulo' => 'Categoria não encontrada',
        'descricao' => '',
        'texto' => 'O grupo selecionado não existe ou o link está incorreto.'
    ];
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
    <style>
     * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #0d1117;
    color: #c9d1d9;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    padding: 40px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

main {
    background-color: #161b22;
    border: 1px solid #30363d;
    padding: 30px 40px;
    border-radius: 8px;
    max-width: 700px;
    width: 100%;
}

h1 {
    color: #58a6ff;
    font-size: 1.8rem;
    margin-bottom: 15px;
    border-bottom: 1px solid #21262d;
    padding-bottom: 10px;
}

p {
    margin-bottom: 15px;
    color: #b1bac4;
}

hr {
    border: none;
    height: 1px;
    background-color: #30363d;
    margin: 20px 0;
}

a {
    display: inline-block;
    margin-top: 15px;
    color: #58a6ff;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s;
}

a:hover {
    text-decoration: underline;
}
    </style>
<head>
    <meta charset="UTF-8">
    <title><?php echo $info['titulo']; ?></title>
</head>
<body>
    <main>
        <h1><?php echo $info['titulo']; ?></h1>
        <p><strong><?php echo $info['descricao']; ?></strong></p>
        <hr>
        <p><?php echo $info['texto']; ?></p>
        <br>
        <a href="index.php">&larr; Voltar para a página inicial</a>
    </main>
</body>
</html>