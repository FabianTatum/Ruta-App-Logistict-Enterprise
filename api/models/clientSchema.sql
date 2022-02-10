USE rutaappdb;

CREATE TABLE IF NOT EXISTS `clients`(
    `id` INT(99) PRIMARY KEY,
    `name` VARCHAR(50) NOT NULL,
    `lastName` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `cityOfResidence` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL
);