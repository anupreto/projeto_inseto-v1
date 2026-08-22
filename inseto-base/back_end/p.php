<?php
    $host = "127.0.0.1";
    $user = "root";
    $password = "";
    $name_db = "insetos_db";

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$name_db;charset=utf8", $user, $password);
        $pdo -> setAttribute(PDO:: ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);
        }

        catch(PDOException $e) {
            echo "Rapaz, parece que ocorreu um erro: " . $e -> getMessage();
        };
?>

<!-- o endereço é http://localhost/inseto-base/back_end/p.php -->
