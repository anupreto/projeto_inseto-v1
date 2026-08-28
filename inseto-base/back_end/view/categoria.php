<?php 
include '../config/banco.php';

$verTudo = false;
$insetos = [];
$categorias = [];
$totalEspecies = 0;

$ordem = isset($_GET['ordem']) ? trim($_GET['ordem']) : '';

if (empty($ordem)) {
    $sqlCat = "SELECT ordem_insetos, COUNT(*) as total FROM insetos WHERE ordem_insetos IS NOT NULL AND ordem_insetos != '' GROUP BY ordem_insetos";
    $stmtCat = $pdo->query($sqlCat);
    $categorias = $stmtCat->fetchAll(PDO::FETCH_ASSOC);
} else {
    $verTudo = isset($_GET['ver']) && $_GET['ver'] === 'tudo';

    $sqlCount = "SELECT COUNT(*) FROM insetos WHERE ordem_insetos = :ordem";
    $stmtCount = $pdo->prepare($sqlCount);
    $stmtCount->execute(['ordem' => $ordem]);
    $totalEspecies = $stmtCount->fetchColumn();

    $sql = "SELECT * FROM insetos WHERE ordem_insetos = :ordem";
    if (!$verTudo) {
        $sql .= " LIMIT 5";
    }

    $stmt = $pdo->prepare($sql);
    $stmt->execute(['ordem' => $ordem]);
    $insetos = $stmt->fetchAll(PDO::FETCH_ASSOC);
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo empty($ordem) ? 'Categorias' : 'Categoria: ' . htmlspecialchars(ucwords($ordem)); ?> - Wiki Invertebrados</title>
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
            <a href="categoria.php" class="ativo">Categorias</a>
        </nav>
    </header>

    <div class="wiki-container">
        <main class="wiki-content">
            
            <?php if (empty($ordem)): ?>
                <section class="artigo-bloco">
                    <h2>Explorar por Categorias (Ordens)</h2>
                    <p>Selecione abaixo uma ordem de invertebrados para ver os principais destaques cadastrados:</p>
                </section>

                <section class="artigo-bloco">
                    <?php if (count($categorias) > 0): ?>
                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 15px;">
                            <?php foreach($categorias as $cat): ?>
                                <a href="categoria.php?ordem=<?php echo urlencode($cat['ordem_insetos']); ?>" style="text-decoration: none;">
                                    <div style="background-color: #21262d; padding: 20px; border-radius: 8px; border: 1px solid #30363d; transition: border-color 0.2s;">
                                        <h3 style="color: #58a6ff; margin-bottom: 8px; font-size: 1.1rem;"><?php echo htmlspecialchars(ucwords($cat['ordem_insetos'])); ?></h3>
                                        <p style="color: #8b949e; font-size: 0.85rem; margin: 0;"><?php echo $cat['total']; ?> espécie(s) cadastrada(s)</p>
                                    </div>
                                </a>
                            <?php endforeach; ?>
                        </div>
                    <?php else: ?>
                        <p style="color: #8b949e;">Nenhuma categoria encontrada no banco de dados.</p>
                    <?php endif; ?>
                </section>

            <?php else: ?>
                <section class="artigo-bloco">
                    <h2>Espécies da ordem: <?php echo htmlspecialchars(ucwords($ordem)); ?></h2>
                    <p>Atualmente temos <strong><?php echo $totalEspecies; ?></strong> espécies cadastradas nesta categoria. 
                    <?php echo $verTudo ? 'Exibindo todas as espécies:' : 'Entre elas, destacam-se:'; ?></p>
                </section>

                <section class="artigo-bloco">
                    <?php if (count($insetos) > 0): ?>
                        <ul style="list-style-type: none; padding: 0; display: flex; flex-direction: column; gap: 10px;">
                            <?php foreach($insetos as $row): ?>
                                <li style="background-color: #21262d; padding: 12px 15px; border-radius: 6px; border: 1px solid #30363d;">
                                    <a href="id.php?id=<?php echo $row['id_insetos']; ?>" style="color: #58a6ff; text-decoration: none; font-weight: 600;">
                                        <?php echo htmlspecialchars(ucwords($row['nome_insetos'])) ?>
                                    </a>
                                </li>
                            <?php endforeach; ?>
                        </ul>

                        <?php if (!$verTudo && $totalEspecies > 5): ?>
                            <div style="margin-top: 15px; text-align: center;">
                                <a href="categoria.php?ordem=<?php echo urlencode($ordem); ?>&ver=tudo" style="color: #58a6ff; text-decoration: none; font-weight: 600; display: inline-block; padding: 8px 12px; background: #161b22; border: 1px solid #30363d; border-radius: 6px;">
                                    Ver mais (<?php echo $totalEspecies - 5; ?>) 
                                </a>
                            </div>
                        <?php elseif ($verTudo): ?>
                            <div style="margin-top: 15px; text-align: center;">
                                <a href="categoria.php?ordem=<?php echo urlencode($ordem); ?>" style="color: #8b949e; text-decoration: none; font-size: 0.9rem;">
                                    &larr; Voltar
                                </a>
                            </div>
                        <?php endif; ?>

                    <?php else: ?>
                        <p style="color: #8b949e;">Nenhuma espécie cadastrada nesta categoria ainda.</p>
                    <?php endif; ?>
                </section>

                <div style="margin-top: 20px;">
                    <a href="categoria.php" style="color: #58a6ff; text-decoration: none; font-size: 0.9rem;">&larr; Voltar para todas as categorias</a>
                </div>
            <?php endif; ?>

        </main>

        <aside class="wiki-sidebar">
            <div class="sidebar-box">
                <h3>Navegação Rápida</h3>
                <ul>
                    <li><a href="index.php">&larr; Voltar para a Página Inicial</a></li>
                    <li><a href="categoria.php">Ver Categorias</a></li>
                </ul>
            </div>
        </aside>
    </div>
</body>
</html>