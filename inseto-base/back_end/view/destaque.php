<?php 
include '../config/banco.php';

$sqlDestaques = "SELECT * FROM insetos WHERE destaque = 1 LIMIT 6";
$stmtDestaques = $pdo->query($sqlDestaques);
$destaques = $stmtDestaques->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Início - Wiki Invertebrados</title>
    <link rel="stylesheet" href="../../front_end/c.css">
</head>
<body>
    <header class="wiki-header">
        <div class="logo-area">
            <h1>Wiki Invertebrados</h1>
            <p>Enciclopédia digital de invertebrados</p>
        </div>
        <nav class="topo-nav">
            <a href="index.php" class="ativo">Início</a>
            <a href="categoria.php">Categorias</a>
        </nav>
    </header>

    <div class="wiki-container">
        <main class="wiki-content">
            
            <section class="artigo-bloco">
                <h2>Artigos em Destaque</h2>
                <p>Conheça as espécies mais fascinantes e curiosas selecionadas para a nossa vitrine.</p>

                <?php if (count($destaques) > 0): ?>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 15px; margin-top: 15px;">
                        <?php foreach ($destaques as $item): ?>
                            <div style="background-color: #21262d; padding: 20px; border-radius: 8px; border: 1px solid #30363d; display: flex; flex-direction: column; justify-content: space-between;">
                                <div>
                                    <!-- Tag da Ordem -->
                                    <span style="font-size: 0.75rem; background: #30363d; color: #58a6ff; padding: 3px 8px; border-radius: 4px; text-transform: uppercase; font-weight: 600;">
                                        <?php echo htmlspecialchars($item['ordem_insetos']); ?>
                                    </span>
                                    
                                    <!-- Nome Comum -->
                                    <h3 style="color: #58a6ff; margin: 10px 0 5px 0; font-size: 1.1rem;">
                                        <?php echo htmlspecialchars(ucwords($item['nome_insetos'])); ?>
                                    </h3>
                                    
                                    <!-- Nome Científico -->
                                    <p style="color: #8b949e; font-style: italic; font-size: 0.85rem; margin-bottom: 10px;">
                                        <?php echo htmlspecialchars($item['nc_insetos']); ?>
                                    </p>
                                    
                                    <!-- Resumo da Curiosidade (cortado para não esticar o card) -->
                                    <p style="color: #c9d1d9; font-size: 0.9rem; line-height: 1.4; margin-bottom: 15px;">
                                        <?php 
                                            $curiosidade = $item['curisidade'];
                                            echo htmlspecialchars(strlen($curiosidade) > 90 ? substr($curiosidade, 0, 90) . '...' : $curiosidade); 
                                        ?>
                                    </p>
                                </div>
                                
                                <!-- Link para a página de detalhes -->
                                <a href="id.php?id=<?php echo $item['id_insetos']; ?>" style="color: #58a6ff; text-decoration: none; font-weight: 600; font-size: 0.9rem; align-self: flex-start;">
                                    Ver detalhes &rarr;
                                </a>
                            </div>
                        <?php endforeach; ?>
                    </div>
                <?php else: ?>
                    <p style="color: #8b949e; margin-top: 10px;">Nenhum artigo em destaque no momento.</p>
                <?php endif; ?>
            </section>

        </main>

        <aside class="wiki-sidebar">
            <div class="sidebar-box">
                <h3>Navegação Rápida</h3>
                <ul>
                    <li><a href="categoria.php">Explorar Categorias</a></li>
                </ul>
            </div>
        </aside>
    </div>
</body>
</html>