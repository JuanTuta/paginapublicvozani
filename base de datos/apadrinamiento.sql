-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-11-2022 a las 00:50:30
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `apadrinamiento`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apadrinados`
--

CREATE TABLE `apadrinados` (
  `id` int(30) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `celular` bigint(40) NOT NULL,
  `cedula` int(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `cuota` int(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `apadrinados`
--

INSERT INTO `apadrinados` (`id`, `nombre`, `celular`, `cedula`, `email`, `cuota`) VALUES
(8, 'juan', 3204680133, 1020844100, 'robiñono@hotmail.com', 500),
(9, 'daniel', 3204680124, 1020844200, 'robiñono2@hotmail.com', 600),
(35, 'Andres', 3205620123, 102085533, 'andres@hotmail.com', 200),
(37, 'Andres', 3206451, 1025841, 'Andres@hotmail.com', 200);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pergat`
--

CREATE TABLE `pergat` (
  `id` int(40) NOT NULL,
  `imagen` varchar(40) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `raza` varchar(40) NOT NULL,
  `sexo` varchar(40) NOT NULL,
  `años` int(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pergat`
--

INSERT INTO `pergat` (`id`, `imagen`, `nombre`, `raza`, `sexo`, `años`) VALUES
(5, 'Tato.png', 'tato', 'gato', 'masculino', 4),
(6, 'Yayita.png', 'yayita', 'perro', 'femenino', 1),
(14, 'Ronita.png', 'Ronita', 'perro', 'Masculino', 2),
(15, 'Capi.png', 'capi', 'perro', 'femenino', 3),
(16, 'Milu.png', 'milu', 'perro', 'masculino', 5),
(17, 'Lola.png', '', '', '', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `apadrinados`
--
ALTER TABLE `apadrinados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pergat`
--
ALTER TABLE `pergat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `apadrinados`
--
ALTER TABLE `apadrinados`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `pergat`
--
ALTER TABLE `pergat`
  MODIFY `id` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
