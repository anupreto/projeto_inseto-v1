<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insetos</title>
    <link rel="stylesheet" href="../front_end/c.css">
</head>
<body>
    <header>
        <h1>Insetopédia!</h1>
        <nav>
            <a href="#inicio">Início</a>
            <a href="#insetos">Insetos</a>
            <a href="#curiosidades">Curiosidades</a>
        </nav>
    </header>

    <main id="inicio">
        <section class="principal">
            <div class="texto">
                <h2>Bem-vindo à Insetopédia! 🟢</h2>
                <p>Descubra informações, curiosidades e características de diferentes insetos reais do nosso banco de dados.</p>
                <button onclick="explorarInsetos()">🔎 Explorar Insetos</button>
            </div>
            <div class="imagem">
                <img src="https://tse1.explicit.bing.net/th/id/OIP.EN6th-31YvVgwB2q9CKGaQHaEO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Inseto na natureza">
            </div>
        </section>

        <section id="insetos">
            <h2>Conheça os insetos 🐛</h2>
            <div id="listaInsetos">
                <?php
                    include 'p.php';
                    $resultado = $pdo->query("SELECT * FROM insetos");
                    
                    while($row = $resultado->fetch(PDO::FETCH_ASSOC)) {
                        echo "<div class='card-inseto'>";
                        echo "<h3>🪲 " . $row['nome_insetos'] . "</h3>";
                        echo "<p><strong>Nome Científico:</strong> " . $row['nc_insetos'] . "</p>";
                        echo "<p><strong>Família:</strong> " . $row['familia_insetos'] . "</p>";
                        echo "<p><strong>Dieta:</strong> " . $row['dieta_insetos'] . "</p>";
                        
                        $temAsas = $row['tem_asas'] ? "Sim" : "Não";
                        echo "<p><strong>Tem asas?</strong> " . $temAsas . "</p>";
                        echo "</div>";
                    }
                ?>
            </div>
        </section>

        <section id="curiosidades">
            <h2>Curiosidades 💡</h2>
            <div id="listaCuriosidades"></div>
        </section>
    </main>
    
    <script src="../front_end/j.js"></script>
</body>
</html>

<!-- o endereço é http://localhost/inseto-base/back_end/index.php -->
