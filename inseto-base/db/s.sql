CREATE DATABASE insetos_db;

USE insetos_db;

CREATE TABLE insetos (
    id_insetos INT AUTO_INCREMENT PRIMARY KEY,
    nome_insetos VARCHAR(50) NOT NULL,
    nc_insetos VARCHAR(50) NOT NULL,
    tdv_insetos INT NOT NULL,
    tamanho_insetos DECIMAL(10, 2) NOT NULL,
    familia_insetos VARCHAR(70) NOT NULL,
    dieta_insetos VARCHAR(50) NOT NULL,
    asas_insetos VARCHAR(10) NOT NULL,
);

CREATE TABLE habitats (
    id_habitats
)
