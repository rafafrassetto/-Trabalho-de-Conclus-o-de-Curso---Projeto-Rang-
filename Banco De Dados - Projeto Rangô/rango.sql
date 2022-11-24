-- phpMyAdmin SQL Dump
-- version 3.4.9
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tempo de Geração: 21/11/2022 às 20h11min
-- Versão do Servidor: 8.0.29
-- Versão do PHP: 5.3.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de Dados: `rango`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cardapios`
--

CREATE TABLE IF NOT EXISTS `cardapios` (
  `Nome` varchar(255) DEFAULT NULL,
  `idComida` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `cardapios`
--

INSERT INTO `cardapios` (`Nome`, `idComida`, `createdAt`, `updatedAt`) VALUES
('Arroz', 1, '2022-10-31 16:32:21', '2022-10-31 16:32:21'),
('Macarrao', 2, '2022-10-31 16:38:21', '2022-10-31 16:38:21');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

CREATE TABLE IF NOT EXISTS `pedidos` (
  `nome` varchar(150) NOT NULL,
  `gramas` int NOT NULL,
  `createAt` datetime NOT NULL,
  `createUpdate` datetime NOT NULL,
  `idPedido` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`nome`, `gramas`, `createAt`, `createUpdate`, `idPedido`) VALUES
('arroz', 200, '2022-11-14 15:02:00', '2022-11-14 15:02:00', 1),
('feijao', 300, '2022-11-14 15:02:00', '2022-11-14 15:02:00', 2),
('macarrao', 100, '2022-11-14 15:02:00', '2022-11-14 15:02:00', 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `sequelizemeta`
--

CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Extraindo dados da tabela `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20221004180242-create-user.js'),
('20221031184037-create-pedidos.js'),
('20221031191031-create-cardapio.js');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `nome`, `email`, `senha`, `createdAt`, `updatedAt`) VALUES
(27, 'Iury', 'iuuuiry@gmail.com', '1234', '2022-11-21 18:20:23', '2022-11-21 18:20:23');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
