DELETE FROM room;

INSERT INTO room VALUES (1, '101', 'Pawn', True, 1);
INSERT INTO room VALUES (2, '102', 'Rook', True, 3);
INSERT INTO room VALUES (3, '103', 'Rook', True, 4);
INSERT INTO room VALUES (4, '104', 'Pawn', True, 5);
INSERT INTO room VALUES (5, '105', 'Queen', True, 2);
INSERT INTO room VALUES (6, '106', 'Queen', True, 1);
INSERT INTO room VALUES (7, '107', 'King', True, 4);
INSERT INTO room VALUES (8, '108', 'King', True, 3);
INSERT INTO room VALUES (9, '109', 'Rook', True, 2);
INSERT INTO room VALUES (10, '110', 'Pawn', True, 1);

SELECT * FROM hotelmanager.room;