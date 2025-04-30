DROP TABLE IF EXISTS colors;
DROP PROCEDURE IF EXISTS initalizeDatabase;
DROP PROCEDURE IF EXISTS insertColor;
DROP PROCEDURE IF EXISTS removeColor;
DROP PROCEDURE IF EXISTS updateColor;

--TODO: SELECT 1-N colors


CREATE TABLE colors (
    ID int NOT NULL,
    hex_value character(6) NOt NULL,
    name varchar(255) NOT NULL,
    PRIMARY KEY (ID)
    );



delimiter $$

--call to initalize/reset the database with the initial 10 colors
CREATE PROCEDURE initalizeDatabase()
    BEGIN
        INSERT INTO colors VALUES (0, 'FF0000', 'Red');
        INSERT INTO colors VALUES (1, 'FFA500', 'Orange');
        INSERT INTO colors VALUES (2, 'FFFF00', 'Yellow');
        INSERT INTO colors VALUES (3, '008000', 'Green');
        INSERT INTO colors VALUES (4, '008080', 'Teal');
        INSERT INTO colors VALUES (5, '0000ff', 'Blue');
        INSERT INTO colors VALUES (6, '800080', 'Purple');
        INSERT INTO colors VALUES (7, '808080', 'Grey');
        INSERT INTO colors VALUES (8, 'a52a2a', 'Brown');
        INSERT INTO colors VALUES (9, '000000', 'Black');
    END $$

delimiter ;


delimiter $$

--inserting a new color skeleton
CREATE PROCEDURE insertColor()
    BEGIN
    END $$

delimiter ;

delimiter $$

--remove one color 
CREATE PROCEDURE removeColor()
    BEGIN
    END $$

delimiter ;

delimiter $$

--update a color
CREATE PROCEDURE updateColor()
    BEGIN
    END $$

delimiter ;

