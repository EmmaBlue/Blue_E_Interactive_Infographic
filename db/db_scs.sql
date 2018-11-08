-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 08, 2018 at 04:40 AM
-- Server version: 5.6.35
-- PHP Version: 7.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_scs`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_operations`
--

CREATE TABLE `tbl_operations` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(20) NOT NULL,
  `img_path` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_operations`
--

INSERT INTO `tbl_operations` (`id`, `name`, `img_path`) VALUES
(1, 'bring', 'images/bring.svg'),
(2, 'equipment', 'images/equipment.svg'),
(3, 'doctor', 'images/doctor.svg'),
(4, 'healthcare', 'images/healthcare.svg'),
(5, 'cozy', 'images/cozy.svg'),
(6, 'social-worker', 'images/social-worker.svg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_operations`
--
ALTER TABLE `tbl_operations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_operations`
--
ALTER TABLE `tbl_operations`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
