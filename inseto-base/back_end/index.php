<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>insetopédia</title>
    <link rel="stylesheet" href="../front_end/c.css">
</head>
<body>
    <h1>Bem-vindo à insetopédia</h1>
    <div class="cards">
        <?php
            include 'p.php';
            $resultado = $pdo->query("SELECT * FROM insetos");
            
            while($row = $resultado->fetch(PDO::FETCH_ASSOC)) {
                echo "<div class='card-inseto'>";
                echo "<h3>" . $row['nome_insetos'] . "</h3>";
                
                echo "<p><strong>Nome Científico:</strong> " . $row['nc_insetos'] . "</p>";
                echo "<p><strong>Ordem:</strong> " . $row['ordem_insetos'] . "</p>";
                echo "<p><strong>Família:</strong> " . $row['familia_insetos'] . "</p>";
                echo "<p><strong>Dieta:</strong> " . $row['dieta_insetos'] . "</p>";
                echo "<p><strong>Longevidade:</strong> " . $row['longevidade_insetos'] . "</p>";
                echo "<p><strong>Tamanho:</strong> " . $row['tamanho_insetos'] . "</p>";
                
                $temAsas = $row['tem_asas'] ? "Sim" : "Não";
                echo "<p><strong>Tem asas?</strong> " . $temAsas . "</p>";
                
                echo "</div>";
            }
        ?>
    </div>
</body>
</html>
