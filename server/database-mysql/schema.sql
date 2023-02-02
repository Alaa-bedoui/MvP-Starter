-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema balas
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema balas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `balas` DEFAULT CHARACTER SET utf8mb3 ;
USE `balas` ;

-- -----------------------------------------------------
-- Table `balas`.`owners`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `balas`.`owners` (
  `idowners` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `fortune` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idowners`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `balas`.`balas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `balas`.`balas` (
  `idbalas` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `owners_idowners` INT NOT NULL,
  PRIMARY KEY (`idbalas`),
  INDEX `fk_balas_owners_idx` (`owners_idowners` ASC) VISIBLE,
  CONSTRAINT `fk_balas_owners`
    FOREIGN KEY (`owners_idowners`)
    REFERENCES `balas`.`owners` (`idowners`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `balas`.`sokken`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `balas`.`sokken` (
  `idsokken` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `balas_idbalas` INT NOT NULL,
  PRIMARY KEY (`idsokken`),
  INDEX `fk_sokken_balas_idx` (`balas_idbalas` ASC) VISIBLE,
  CONSTRAINT `fk_sokken_balas1`
    FOREIGN KEY (`balas_idbalas`)
    REFERENCES `balas`.`balas` (`idbalas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
