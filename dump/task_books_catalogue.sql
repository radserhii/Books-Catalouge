-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Час створення: Трв 09 2018 р., 14:06
-- Версія сервера: 10.1.29-MariaDB
-- Версія PHP: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `task_books_catalogue`
--

-- --------------------------------------------------------

--
-- Структура таблиці `authors`
--

CREATE TABLE `authors` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп даних таблиці `authors`
--

INSERT INTO `authors` (`id`, `name`, `created_at`, `updated_at`) VALUES
(12, 'J.K. Rowling', '2018-05-09 08:38:32', '2018-05-09 08:38:32'),
(13, 'Arthur Golden', '2018-05-09 08:46:59', '2018-05-09 08:46:59'),
(14, 'J.R.R. Tolkien', '2018-05-09 08:49:55', '2018-05-09 08:49:55'),
(15, 'Max Arthur', '2018-05-09 08:54:39', '2018-05-09 08:54:39');

-- --------------------------------------------------------

--
-- Структура таблиці `books`
--

CREATE TABLE `books` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `author_id` int(11) DEFAULT NULL,
  `publication_id` int(11) DEFAULT NULL,
  `published_at` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп даних таблиці `books`
--

INSERT INTO `books` (`id`, `title`, `image`, `author_id`, `publication_id`, `published_at`, `created_at`, `updated_at`) VALUES
(1, 'Harry Potter and the Sorcerer\'s Stone', '/images/harry_potter.jpg', 12, 5, '1997-06-26', '2018-05-09 08:39:54', '2018-05-09 08:45:15'),
(2, 'Memoirs of a Geisha', '/images/Memoirs of a Geisha.jpg', 13, 6, '2005-11-15', '2018-05-09 08:47:39', '2018-05-09 08:48:12'),
(3, 'The Hobbit', '/images/The Hobbit.jpg', 14, 7, '2002-08-15', '2018-05-09 08:50:45', '2018-05-09 08:50:59'),
(4, 'Churchill The Life: In His Own Words and Picture', '/images/Churchill The Life.jpg', 15, 8, '2015-10-30', '2018-05-09 08:55:07', '2018-05-09 08:55:47');

-- --------------------------------------------------------

--
-- Структура таблиці `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп даних таблиці `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2018_05_08_122953_create_books_table', 1),
(2, '2018_05_08_123014_create_authors_table', 1),
(3, '2018_05_08_123036_create_publications_table', 1),
(4, '2018_05_09_052714_add_image_to_books_table', 2);

-- --------------------------------------------------------

--
-- Структура таблиці `publications`
--

CREATE TABLE `publications` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп даних таблиці `publications`
--

INSERT INTO `publications` (`id`, `name`, `created_at`, `updated_at`) VALUES
(5, 'Scholastic Inc', '2018-05-09 08:37:59', '2018-05-09 08:37:59'),
(6, 'Random House Large Print Publishing', '2018-05-09 08:46:36', '2018-05-09 08:46:36'),
(7, 'Houghton Mifflin', '2018-05-09 08:49:43', '2018-05-09 08:49:43'),
(8, 'Firefly Books Ltd', '2018-05-09 08:54:26', '2018-05-09 08:54:26');

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `publications`
--
ALTER TABLE `publications`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблиці `books`
--
ALTER TABLE `books`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT для таблиці `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблиці `publications`
--
ALTER TABLE `publications`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
