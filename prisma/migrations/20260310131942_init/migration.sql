-- CreateTable
CREATE TABLE `news` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,
    `writer` VARCHAR(191) NOT NULL,
    `thumbnail` VARCHAR(191) NOT NULL,
    `published` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
