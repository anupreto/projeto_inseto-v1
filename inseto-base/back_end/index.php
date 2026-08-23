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
            <h2 class="conheca">Conheça os insetos 🐛</h2>
            <div id="listaInsetos">
                <?php
                    include 'banco.php';
                    $sel_ordem = "SELECT ordem_insetos, COUNT(*) as total FROM insetos GROUP BY ordem_insetos";
                    $start = $pdo->query($sel_ordem);
                    $categorias = $start->fetchAll(PDO :: FETCH_ASSOC);
                    ?>

                    <div class="container-categorias">
                        
                        <div class="grid-cards">
                            <?php foreach($categorias as $cat):?>
                            <div class="card-ordem">
                                <a href="categoria.php?ordem=<?php echo urlencode($cat['ordem_insetos']);?>">
                                    <h3><?php echo ucwords($cat['ordem_insetos']);?></h3>
                                    <p><?php echo $cat['total'];?> espécies cadastradas</p>
                                </a>
                            </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
    </main>
    
    <script src="../front_end/j.js"></script>
</body>
</html>