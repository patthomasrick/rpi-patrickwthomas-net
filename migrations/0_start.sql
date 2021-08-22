-- -- phpMyAdmin SQL Dump
-- -- version 5.1.1
-- -- https://www.phpmyadmin.net/
-- --
-- -- Host: database
-- -- Generation Time: Aug 14, 2021 at 05:28 PM
-- -- Server version: 10.6.4-MariaDB-1:10.6.4+maria~focal
-- -- PHP Version: 7.4.22

-- SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
-- START TRANSACTION;
-- SET time_zone = "+00:00";


-- /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
-- /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
-- /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
-- /*!40101 SET NAMES utf8mb4 */;

-- --
-- -- Database: `rpi`
-- --

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `devices`
-- --

-- CREATE TABLE `devices` (
--   `id` int(11) NOT NULL,
--   `name` varchar(20) NOT NULL DEFAULT '',
--   `global_ip` varchar(16) NOT NULL,
--   `local_ip` varchar(16) NOT NULL,
--   `last_check_in` timestamp NOT NULL DEFAULT current_timestamp(),
--   `api_key` varchar(128) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --
-- -- Indexes for dumped tables
-- --

-- --
-- -- Indexes for table `devices`
-- --
-- ALTER TABLE `devices`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- AUTO_INCREMENT for dumped tables
-- --

-- --
-- -- AUTO_INCREMENT for table `devices`
-- --
-- ALTER TABLE `devices`
--   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
-- COMMIT;

-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(32) NOT NULL UNIQUE,
  password_hash VARCHAR(128) NOT NULL,
  auth_key VARCHAR(128) UNIQUE,
  date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX (username),
  INDEX (auth_key)
);
