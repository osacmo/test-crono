SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `test-DA` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `test-DA` ;

-- -----------------------------------------------------
-- Table `test-DA`.`datos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `test-DA`.`datos` (
  `idRFID` VARCHAR(50) NOT NULL,
  `fecha_hora` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `zona` INT NOT NULL,
  PRIMARY KEY (`idRFID`, `zona`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `test-DA`.`datos_AFTER_INSERT`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `test-DA`.`datos_AFTER_INSERT` (
  `idRFID` VARCHAR(50) NOT NULL,
  `fecha_hora` DATETIME NOT NULL,
  `zona` INT NOT NULL,
  PRIMARY KEY (`idRFID`, `zona`))
ENGINE = InnoDB;

USE `test-DA`;

DELIMITER $$
USE `test-DA`$$
CREATE DEFINER = CURRENT_USER TRIGGER `test-DA`.`datos_AFTER_INSERT` AFTER INSERT ON `datos` FOR EACH ROW
BEGIN
INSERT INTO datos_AFTER_INSERT(idRFID, fecha_hora, zona) VALUES(NEW.idRFID, NEW.fecha_hora, NEW.zona);
END$$


DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
