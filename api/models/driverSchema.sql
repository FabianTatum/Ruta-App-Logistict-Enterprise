USE rutaappdb;

CREATE TABLE IF NOT EXISTS `drivers`(
    `id` INT(99) AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) NOT NULL,
    `lastName` VARCHAR(50) NOT NULL,
    `identification` VARCHAR(50) NOT NULL,
    `dateOfBirth` DATE NOT NULL,
    `phone` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `terms` BOOLEAN NOT NULL
);