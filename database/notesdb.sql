-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 14 Jun 2024 pada 07.58
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notesdb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `notes`
--

INSERT INTO `notes` (`id`, `title`, `content`) VALUES
(2, '\"Best Practices for Clean Code\"', '\"Focus on readability, maintainability, and efficiency. Use meaningful variable names, avoid code duplication, and adhere to coding standards. Comment code where necessary to explain complex logic.\"'),
(3, 'Effective Debugging Techniques', 'Mastering debugging tools and techniques is crucial for efficient problem-solving. Use breakpoints, step through code, and analyze stack traces. Understand the root cause before implementing fixes.'),
(8, 'Introduction to Data Structures', '\"Understand fundamental data structures like arrays, linked lists, stacks, queues, and trees. Learn their applications, advantages, and drawbacks. Practice implementing algorithms using these structures.\"'),
(9, '\"Tips for Optimizing Database Queries\"', 'Optimize database performance by using indexes, avoiding unnecessary joins, and optimizing queries. Monitor query execution times and identify bottlenecks. Consider caching strategies for frequently accessed data.'),
(10, '\"Agile Development Best Practices\"', '\"Embrace agile methodologies like Scrum or Kanban for iterative development. Prioritize user stories, conduct sprint planning, and hold regular retrospectives. Foster collaboration and adaptability within the team.\"');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
