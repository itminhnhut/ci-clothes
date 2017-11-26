-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 23, 2017 lúc 11:27 SA
-- Phiên bản máy phục vụ: 10.1.21-MariaDB
-- Phiên bản PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ci_clothes`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `banner`
--

CREATE TABLE `banner` (
  `id` int(10) NOT NULL,
  `url_image` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL,
  `title` varchar(10) NOT NULL,
  `alt` varchar(10) NOT NULL,
  `order_image` tinyint(3) NOT NULL,
  `active` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `banner`
--

INSERT INTO `banner` (`id`, `url_image`, `image`, `url`, `title`, `alt`, `order_image`, `active`) VALUES
(6, 'uploads/multi-banner/1511060896-bg_viewcolection.jpg', 'bg_viewcolection.jpg', '', '', '', 0, 1),
(7, 'uploads/multi-banner/1511060904-bg_viewcolection.jpg', 'bg_viewcolection.jpg', '', '', '', 0, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bill`
--

CREATE TABLE `bill` (
  `id` int(100) NOT NULL,
  `idCustomer` int(100) NOT NULL,
  `discount` int(100) NOT NULL,
  `status` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `bill`
--

INSERT INTO `bill` (`id`, `idCustomer`, `discount`, `status`) VALUES
(1, 1, 10, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `id` int(100) NOT NULL,
  `idProduct` int(100) NOT NULL,
  `price` int(100) NOT NULL,
  `quantity` int(100) NOT NULL,
  `idBill` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `cart`
--

INSERT INTO `cart` (`id`, `idProduct`, `price`, `quantity`, `idBill`) VALUES
(1, 1, 10000, 2, 1),
(2, 2, 10000, 4, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer`
--

CREATE TABLE `customer` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `sdt` int(100) NOT NULL,
  `meno` varchar(100) NOT NULL,
  `create_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `customer`
--

INSERT INTO `customer` (`id`, `name`, `address`, `sdt`, `meno`, `create_date`) VALUES
(1, 'nhut', 'test', 1667423434, 'test', '2017-11-12 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `imagefooter`
--

CREATE TABLE `imagefooter` (
  `id` int(10) NOT NULL,
  `url_image` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL,
  `title` varchar(10) NOT NULL,
  `alt` varchar(10) NOT NULL,
  `order_image` tinyint(3) NOT NULL,
  `active` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `imagefooter`
--

INSERT INTO `imagefooter` (`id`, `url_image`, `image`, `url`, `title`, `alt`, `order_image`, `active`) VALUES
(1, 'uploads/multi-footer/1510476165-4-480x635.jpg', '4-480x635.jpg', '', '', '', 2, 1),
(3, 'uploads/multi-footer/1510476165-10-500x600.jpg', '10-500x600.jpg', '', '', '', 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `imageproduct`
--

CREATE TABLE `imageproduct` (
  `id` int(100) NOT NULL,
  `idProduct` int(100) NOT NULL,
  `url_image` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `avata` tinyint(3) NOT NULL,
  `status` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `imageproduct`
--

INSERT INTO `imageproduct` (`id`, `idProduct`, `url_image`, `image`, `avata`, `status`) VALUES
(6, 6, 'uploads/product/multi-image/6/1510992562-111.jpg', '111.jpg', 1, 1),
(20, 9, 'uploads/product/multi-image/9/1511422134-15.jpg', '15.jpg', 1, 1),
(21, 7, 'uploads/product/multi-image/7/1511422158-18.jpg', '18.jpg', 1, 1),
(22, 2, 'uploads/product/multi-image/2/1511422172-2.jpg', '2.jpg', 1, 1),
(23, 10, 'uploads/product/multi-image/10/1511422185-1.jpg', '1.jpg', 1, 1),
(24, 11, 'uploads/product/multi-image/11/1511422210-19.jpg', '19.jpg', 1, 1),
(25, 13, 'uploads/product/multi-image/13/1511422261-20.jpg', '20.jpg', 1, 1),
(26, 12, 'uploads/product/multi-image/12/1511422278-16.jpg', '16.jpg', 1, 1),
(27, 8, 'uploads/product/multi-image/8/1511422306-19.jpg', '19.jpg', 1, 1),
(28, 4, 'uploads/product/multi-image/4/1511422321-18.jpg', '18.jpg', 0, 1),
(29, 1, 'uploads/product/multi-image/1/1511422338-1.jpg', '1.jpg', 1, 1),
(30, 5, 'uploads/product/multi-image/5/1511422351-2.jpg', '2.jpg', 0, 1),
(31, 3, 'uploads/product/multi-image/3/1511422373-16.jpg', '16.jpg', 1, 1),
(32, 7, 'uploads/product/multi-image/7/1511422405-19.jpg', '19.jpg', 0, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `menu`
--

CREATE TABLE `menu` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `alt` varchar(100) NOT NULL,
  `des` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `url_image` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL,
  `menu_image` tinyint(3) NOT NULL,
  `status_menu_img` tinyint(3) NOT NULL,
  `order_menu` int(10) NOT NULL,
  `parent` int(10) NOT NULL,
  `status` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `menu`
--

INSERT INTO `menu` (`id`, `name`, `title`, `alt`, `des`, `slug`, `url_image`, `img`, `menu_image`, `status_menu_img`, `order_menu`, `parent`, `status`) VALUES
(1, 'Đồ nam', 'Đồ nam', 'Đồ nam', 'Đồ nam', 'do-nam', './uploads/menu/15109312440_1.jpg', '15109312440_1.jpg', 0, 1, 1, 0, 1),
(2, 'Đồ nữ', 'Đồ nữ', 'Đồ nữ', 'Đồ nữ', 'do-nu', './uploads/menu/15109313290_1.jpg', '15109313290_1.jpg', 0, 1, 6, 0, 1),
(3, 'Blog', 'Blog', 'Blog', 'Blog', 'blog', './uploads/menu/15109313770_1.jpg', '0', 0, 0, 13, 0, 1),
(4, 'Đồ nam 1', 'Đồ nam 1', 'Đồ nam 1', 'Đồ nam 1', 'do-nam-1', '0', '0', 0, 0, 2, 1, 1),
(5, 'Đồ nam 2', 'Đồ nam 2', 'Đồ nam 2', 'Đồ nam 2', 'do-nam-2', '0', '0', 0, 0, 3, 1, 1),
(6, 'Đồ nam 3', 'Đồ nam 3', 'Đồ nam 3', 'Đồ nam 3', 'do-nam-3', '0', '0', 0, 0, 4, 1, 1),
(7, 'Đồ nam 4', 'Đồ nam 4', 'Đồ nam 4', '', 'do-nam-4', '0', '0', 0, 0, 5, 1, 1),
(8, 'Đồ nứ 1', 'Đồ nứ 1', 'Đồ nứ 1', 'Đồ nứ 1', 'do-nu-1', '0', '0', 0, 0, 7, 2, 1),
(9, 'Đồ nứ 2', 'Đồ nứ 2', 'Đồ nứ 2', 'Đồ nứ 2', 'do-nu-2', '0', '0', 0, 0, 8, 2, 1),
(10, 'Đồ nứ 3', 'Đồ nứ 3', 'Đồ nứ 3', 'Đồ nứ 3', 'do-nu-3', '0', '0', 0, 0, 9, 2, 1),
(11, 'Đồ nam 5', 'Đồ nam 5', 'Đồ nam 5', 'Đồ nam 5', 'do-nam-5', '0', '0', 0, 0, 5, 5, 1),
(12, 'Đồ nam 6', 'Đồ nam 6', 'Đồ nam 6', 'Đồ nam 6', 'do-nam-6', '0', '0', 0, 0, 8, 7, 1),
(13, 'Đồ nam 7', 'Đồ nam 7', 'Đồ nam 7', 'Đồ nam 7', 'do-nam-7', '0', '0', 0, 0, 3, 4, 1),
(14, 'Đồ nữ 4', 'Đồ nữ 4', 'Đồ nữ 4', 'Đồ nữ 4', 'do-nu-4', '0', '0', 0, 0, 10, 9, 1),
(15, 'Đồ nữ 5', 'Đồ nữ 5', 'Đồ nữ 5', 'Đồ nữ 5', 'do-nu-5', '0', '0', 0, 0, 8, 8, 1),
(16, 'Nam', 'Nam', 'Nam', 'Nam', 'nam', './uploads/menu/15110799820_1.png', '15110799820_1.png', 0, 1, 14, 3, 1),
(17, 'Nữ', 'Nữ', 'Nữ', 'Nữ', 'nu', './uploads/menu/15110799940_1.png', '15110799940_1.png', 0, 1, 15, 3, 1),
(18, 'Giới thiệu', 'Giới thiệu', 'Giới thiệu', 'Giới thiệu', 'gioi-thieu', '0', '0', 0, 0, 12, 16, 1),
(19, 'Trẻ em', 'Trẻ em', 'Trẻ em', 'Trẻ em', 'tre-em', './uploads/menu/15109313660_1.jpg', '15109313660_1.jpg', 0, 1, 10, 0, 1),
(20, 'Thai phụ', 'Thai phụ', 'Thai phụ', 'Thai phụ', 'thai-phu', './uploads/menu/15109345360_1.jpg', '15109345360_1.jpg', 0, 1, 11, 0, 1),
(21, 'Tuổi teen', 'Tuổi teen', 'Tuổi teen', 'Tuổi teen', 'tuoi-teen', './uploads/menu/15109882070_1.jpg', '15109882070_1.jpg', 0, 1, 12, 0, 1),
(22, 'Bê đê', 'Bê đê', 'Bê đê', 'Bê đê', 'be-de', './uploads/menu/15110800360_1.png', '15110800360_1.png', 0, 1, 16, 3, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `idParent` int(100) NOT NULL,
  `idSubChild` int(100) NOT NULL,
  `idChild` int(100) NOT NULL,
  `des` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `keyword` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `salePrice` int(100) NOT NULL,
  `create_date` datetime NOT NULL,
  `status` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `name`, `slug`, `idParent`, `idSubChild`, `idChild`, `des`, `content`, `keyword`, `description`, `price`, `salePrice`, `create_date`, `status`) VALUES
(1, 'Áo thun nam', 'ao-thun-nam', 1, 0, 0, '<p>Không gì</p>\r\n', '<p>clbsakcbasc;kasck;báck;abc;kasbck;ábc</p>\r\n', '', '', 150000, 0, '2017-11-18 09:04:17', 1),
(2, 'Quần jean nam', 'quan-jean-nam', 1, 5, 0, '<p>Quần jean nam</p>\r\n', '<p>Quần jean nam</p>\r\n', '', '', 350000, 15, '2017-11-18 10:35:36', 1),
(3, 'Đầm nữ', 'dam-nu', 2, 0, 0, '<p>Đầm nữ</p>\r\n', '<p>Đầm nữ</p>\r\n', '', '', 250000, 0, '2017-11-18 09:06:32', 1),
(4, 'Áo nữ', 'ao-nu', 2, 8, 15, '<p>Áo nữ</p>\r\n', '<p>Áo nữ</p>\r\n', '', '', 120000, 10, '2017-11-18 10:34:37', 1),
(5, 'Áo yếm', 'ao-yem', 19, 0, 0, '<p>Áo yếm</p>\r\n', '<p>Áo yếm</p>\r\n', '', '', 80000, 0, '2017-11-18 09:08:13', 1),
(6, 'Đầm bầu', 'dam-bau', 20, 0, 0, '<p>Đầm bầu</p>\r\n', '<p>Đầm bầu</p>\r\n', '', '', 180000, 0, '2017-11-18 09:09:08', 1),
(7, 'Không cần mặc nude', 'khong-can-mac-nude', 21, 0, 0, '<p>Không cần mặc nude</p>\r\n', '<p>Không cần mặc nude</p>\r\n', '', '', 1000000, 2, '2017-11-18 10:24:57', 1),
(8, 'Áo khoát nữ', 'ao-khoat-nu', 2, 9, 0, '<p>Áo khoát nữ</p>\r\n', '<p>Áo khoát nữ</p>\r\n', '', '', 350000, 10, '2017-11-18 16:45:15', 1),
(9, 'Giầy nam', 'giay-nam', 1, 5, 11, '<p>Giầy nam</p>\r\n', '<p>Giầy nam</p>\r\n', '', '', 560000, 15, '2017-11-18 16:47:31', 1),
(10, 'Quần kaki nam', 'quan-kaki-nam', 1, 0, 0, '<p>Quần kaki nam</p>\r\n', '<p>Quần kaki nam</p>\r\n', '', '', 130000, 0, '2017-11-18 17:18:09', 1),
(11, 'Quần kaki nữ', 'quan-kaki-nu', 2, 9, 0, '<p>Quần kaki nữ</p>\r\n', '<p>Quần kaki nữ</p>\r\n', '', '', 250000, 0, '2017-11-18 17:19:03', 1),
(12, 'Váy nữ', 'vay-nu', 2, 10, 0, '<p>Váy nữ</p>\r\n', '<p>Váy nữ</p>\r\n', '', '', 150000, 0, '2017-11-18 18:17:22', 1),
(13, 'Tả em bé', 'ta-em-be', 19, 0, 0, '<p>Tả em bé</p>\r\n', '<p>Tả em bé</p>\r\n', '', '', 95000, 0, '2017-11-18 18:18:20', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `slider`
--

CREATE TABLE `slider` (
  `id` int(10) NOT NULL,
  `url_image` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL,
  `title` varchar(10) NOT NULL,
  `alt` varchar(10) NOT NULL,
  `order_image` tinyint(3) NOT NULL,
  `active` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `slider`
--

INSERT INTO `slider` (`id`, `url_image`, `image`, `url`, `title`, `alt`, `order_image`, `active`) VALUES
(1, 'uploads/multi-slider/1510928896-bg_viewcolection.jpg', 'bg_viewcolection.jpg', '', 'slider', 'slider', 1, 1),
(2, 'uploads/multi-slider/1510929785-bg_viewcolection.jpg', 'bg_viewcolection.jpg', '', 'slider', 'slider', 2, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `user` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `group_admin` tinyint(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `user`, `pass`, `group_admin`) VALUES
(1, 'admin', '827ccb0eea8a706c4c34a16891f84e7b', 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `imagefooter`
--
ALTER TABLE `imagefooter`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `imageproduct`
--
ALTER TABLE `imageproduct`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT cho bảng `bill`
--
ALTER TABLE `bill`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT cho bảng `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT cho bảng `imagefooter`
--
ALTER TABLE `imagefooter`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT cho bảng `imageproduct`
--
ALTER TABLE `imageproduct`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT cho bảng `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT cho bảng `slider`
--
ALTER TABLE `slider`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
