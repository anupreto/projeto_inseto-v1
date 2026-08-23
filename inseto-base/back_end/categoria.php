<?php 
include 'banco.php';
$ordem = isset($_GET['ordem']) ? $_GET['ordem'] : '';
$sql = "SELECT * FROM insetos WHERE ordem_insetos = :ordem";
$stmt = $pdo->prepare($sql);
$stmt->execute(['ordem' => $ordem]);
$insetos = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Categoria: <?php echo htmlspecialchars($ordem); ?></title>
</head>
<body>
    <a href="index.php">← Voltar para a Página Inicial</a>

    <h1>Espécies da ordem: <?php echo htmlspecialchars(ucwords($ordem)); ?></h1>
    
    <p>Atualmente temos <?php echo count($insetos); ?> espécies cadastradas nesta categoria. Entre elas, destacam-se:</p>

    <ul>
        <?php foreach($insetos as $row): ?>
            <li>
                <a href="id.php?id=<?php echo $row['id_insetos']; ?>">
                    <?php echo ucwords($row['nome_insetos']); ?>
                </a>
            </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>