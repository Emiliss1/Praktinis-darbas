-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 27, 2024 at 05:55 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eventapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `renginiai`
--

CREATE TABLE `renginiai` (
  `eventid` int(11) NOT NULL,
  `author` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `time` varchar(50) NOT NULL,
  `place` varchar(50) NOT NULL,
  `image` varchar(500) NOT NULL,
  `description` varchar(255) NOT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `renginiai`
--

INSERT INTO `renginiai` (`eventid`, `author`, `title`, `category`, `time`, `place`, `image`, `description`, `verified`) VALUES
(67, 'Emilis', 'Geras renginys', 'Svarbus', '1656489849 valanda', 'Kosmose', 'https://24.media.tumblr.com/b5f205c735d6d314c3a069b29154833e/tumblr_mrw0bxyBWB1s9a6uco1_400.gif', 'Kaina 9999999999Eur', 1);

-- --------------------------------------------------------

--
-- Table structure for table `vartotojai`
--

CREATE TABLE `vartotojai` (
  `id` int(255) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `profilepicture` varchar(500) NOT NULL DEFAULT 'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg',
  `admin` tinyint(1) DEFAULT 0,
  `banned` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vartotojai`
--

INSERT INTO `vartotojai` (`id`, `username`, `password`, `profilepicture`, `admin`, `banned`) VALUES
(52, 'Emilis', '$2b$10$H13VaSIyn8rr1cCBBRMtf.ip3eLoSLJIC01.85aaG2alQmk6nA.Du', 'https://www.meme-arsenal.com/memes/c06bbfbb279198030ebd061a6a650441.jpg', 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `renginiai`
--
ALTER TABLE `renginiai`
  ADD PRIMARY KEY (`eventid`);

--
-- Indexes for table `vartotojai`
--
ALTER TABLE `vartotojai`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `renginiai`
--
ALTER TABLE `renginiai`
  MODIFY `eventid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `vartotojai`
--
ALTER TABLE `vartotojai`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
