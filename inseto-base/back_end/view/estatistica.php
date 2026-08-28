<?php
include '../config/banco.php';

// 1. Conta o total geral de espécies cadastradas no banco
$sqlTotal = "SELECT COUNT(*) as total FROM insetos";
$totalInsetos = $pdo->query($sqlTotal)->fetch(PDO::FETCH_ASSOC)['total'];

// 2. Conta quantos insetos existem em cada ordem (Besouro, Louva Deus, Cupim)
$sqlOrdens = "SELECT ordem_insetos, COUNT(*) as quantidade FROM insetos GROUP BY ordem_insetos";
$estatisticasOrdens = $pdo->query($sqlOrdens)->fetchAll(PDO::FETCH_ASSOC);

// 3. Busca os Destaques e as Últimas Edições (como já montamos antes)
$destaques = $pdo->query("SELECT * FROM insetos WHERE destaque = 1 LIMIT 6")->fetchAll(PDO::FETCH_ASSOC);
$ultimas = $pdo->query("SELECT * FROM insetos ORDER BY id_insetos DESC LIMIT 5")->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wiki Invertebrados - Início</title>
    <link rel="stylesheet" href="../../front_end/c.css">
</head>
<body>

    <!-- Cabeçalho -->
    <header class="wiki-header" style="display: flex; justify-content: space-between; align-items: center; padding: 20px 40px; background-color: #161b22; border-bottom: 1px solid #30363d;">
        <div class="logo-area">
            <h1 style="color: #58a6ff; font-size: 1.5rem; margin: 0;">Wiki Invertebrados</h1>
            <p style="color: #8b949e; margin: 5px 0 0 0; font-size: 0.9rem;">Enciclopédia digital de invertebrados</p>
        </div>
        <nav class="topo-nav" style="display: flex; gap: 20px;">
            <a href="index.php" class="ativo" style="color: #58a6ff; text-decoration: none; font-weight: 600;">Início</a>
            <a href="categoria.php" style="color: #8b949e; text-decoration: none; font-weight: 600;">Categorias</a>
        </nav>
    </header>

    <main class="wiki-container" style="max-width: 1000px; margin: 30px auto; padding: 0 20px; display: flex; flex-direction: column; gap: 25px;">
        
        <!-- SEÇÃO DE ESTATÍSTICAS DO BANCO -->
        <section class="artigo-bloco" style="background-color: #161b22; padding: 20px; border-radius: 8px; border: 1px solid #30363d;">
            <h2 style="color: #58a6ff; margin-bottom: 10px;">Estatísticas da Enciclopédia</h2>
            <p style="color: #8b949e; margin-bottom: 20px;">Panorama geral dos dados armazenados no banco:</p>

            <!-- Cards de Métricas -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                
                <!-- Card Total -->
                <div style="background-color: #21262d; padding: 15px; border-radius: 6px; border: 1px solid #30363d; text-align: center;">
                    <span style="color: #8b949e; font-size: 0.85rem; text-transform: uppercase;">Total de Espécies</span>
                    <h3 style="color: #58a6ff; font-size: 2rem; margin: 5px 0 0 0;"><?php echo $totalInsetos; ?></h3>
                </div>

                <!-- Cards por Ordem Dinâmicos -->
                <?php foreach ($estatisticasOrdens as $ordem): ?>
                    <div style="background-color: #21262d; padding: 15px; border-radius: 6px; border: 1px solid #30363d; text-align: center;">
                        <span style="color: #8b949e; font-size: 0.85rem; text-transform: uppercase;"><?php echo htmlspecialchars($ordem['ordem_insetos']); ?></span>
                        <h3 style="color: #58a6ff; font-size: 2rem; margin: 5px 0 0 0;"><?php echo $ordem['quantidade']; ?></h3>
                    </div>
                <?php endforeach; ?>

            </div>
        </section>
    </main>

</body>
</html>