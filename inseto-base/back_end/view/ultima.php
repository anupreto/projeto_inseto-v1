<?php
include '../config/banco.php';

$ultimas = "SELECT * FROM insetos ORDER BY id_insetos DESC LIMIT 5";
$stmtUltimas = $pdo->query($ultimas);
$edicaoUltima = $stmtUltimas->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wiki Invertebrados - Últimas Edições</title>
    <link rel="stylesheet" href="../../front_end/c.css">
</head>
<body>

    <header class="wiki-header">
        <div class="logo-area">
            <h1>Wiki Invertebrados</h1>
            <p>Enciclopédia digital de invertebrados</p>
        </div>
        <nav class="topo-nav">
            <a href="index.php">Início</a>
            <a href="categoria.php">Categorias</a>
        </nav>
    </header>

    <main class="wiki-container">
        
        <section class="artigo-bloco">
            <h2>Últimas Edições</h2>
            <p>Espécies que acabaram de entrar para a nossa enciclopédia:</p>

            <?php if (count($edicaoUltima) > 0): ?>
                <ul style="list-style: none; padding: 0; margin-top: 15px; display: flex; flex-direction: column; gap: 8px;">
                    <?php foreach ($edicaoUltima as $item): ?>
                        <li style="background-color: #21262d; padding: 12px 16px; border-radius: 6px; border: 1px solid #30363d; display: flex; justify-content: space-between; align-items: center;">
                            <a href="id.php?id=<?php echo $item['id_insetos']; ?>" style="color: #58a6ff; text-decoration: none; font-weight: 600;">
                                <?php echo htmlspecialchars(ucwords($item['nome_insetos'])); ?>
                            </a>

                            <span style="font-size: 0.75rem; background: #30363d; color: #8b949e; padding: 3px 8px; border-radius: 4px;">
                                <?php echo htmlspecialchars($item['ordem_insetos']); ?>
                            </span>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php else: ?>
                <p style="color: #8b949e;">Nenhuma edição recente encontrada.</p>
            <?php endif; ?>
        </section>

    </main>

</body>
</html>