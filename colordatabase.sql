DROP TABLE IF EXISTS colors;
DROP TABLE IF EXISTS tempColors;
DROP PROCEDURE IF EXISTS initalizeDatabase;
DROP PROCEDURE IF EXISTS insertColor;
DROP PROCEDURE IF EXISTS removeColor;
DROP PROCEDURE IF EXISTS updateColor;
DROP PROCEDURE IF EXISTS getColors;

--TODO: SELECT 1-N colors
--      Update Colors


CREATE TABLE colors (
    ID int NOT NULL UNIQUE,
    hex_value character(6) NOT NULL UNIQUE,
    name varchar(255) NOT NULL UNIQUE,
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
--inserting a new color (ID increments based on the Largest ID in the color table)
CREATE PROCEDURE insertColor(IN new_hex_code character(6), IN new_name varchar(255))
    BEGIN
        IF EXISTS (SELECT * FROM colors WHERE hex_value = new_hex_code) THEN
            SELECT 'Color hex value is already in use! Insertion failed' AS ERROR;
        ELSEIF EXISTS (SELECT * FROM colors WHERE name = new_name) THEN
            SELECT 'Color name already in use! Insertion failed' AS ERROR;
        ELSE
            CREATE TABLE tempColors SELECT ID FROM colors ORDER BY ID DESC LIMIT 1;
            SELECT * FROM tempColors;

            IF NOT EXISTS(SELECT * FROM tempColors) THEN
                INSERT INTO tempColors VALUES (-1);
            END IF;
            INSERT INTO colors VALUES (((SELECT ID FROM tempColors LIMIT 1) + 1), new_hex_code, new_name);
            DROP TABLE tempColors;
        END IF;

    END $$

delimiter ;


delimiter $$
--remove one color 
CREATE PROCEDURE removeColor(IN removeID int)
    BEGIN
        SET @currentAmount = (SELECT COUNT(ID) FROM colors);
        IF @currentAmount < 2 THEN
            SELECT 'Not enough colors in the table to delete one! Deletion failed' AS Error;
        ELSE
            DELETE FROM colors WHERE colors.ID = removeID;
        END IF; 
    END $$

delimiter ;

delimiter $$

--update a color
CREATE PROCEDURE updateColor(IN updateID int, IN updateHexCode character(6), IN updateName varchar(255))
    BEGIN
        IF EXISTS (SELECT * FROM colors WHERE hex_value = updateHexCode) THEN
            SELECT 'Inputed Hex Code is already in use! Update Failed.' AS ERROR;
        ELSEIF EXISTS (SELECT * FROM colors WHERE name = updateName) THEN
            SELECT 'Inputed Name is already in use! Update Failed' AS ERROR;
        ELSE
            IF ((updateName IS NOT NULL) and (updateName != ''))THEN
                UPDATE colors SET name = updateName WHERE ID = updateID;
            END IF;
            IF ((updateHexCode IS NOT NULL) and (updateHexCode != ''))THEN
                UPDATE colors SET hex_value = updateHexCode WHERE ID = updateID;
            END IF;
        END IF;
    END $$

delimiter ;

delimiter $$
CREATE PROCEDURE getColors(in Count int)
    BEGIN
        SELECT * FROM colors LIMIT Count;
    END $$
delimiter ;


CALL initalizeDatabase();

