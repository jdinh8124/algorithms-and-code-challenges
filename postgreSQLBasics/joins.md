```
SELECT *
FROM room;

SELECT *
from student;

SELECT *
FROM equipment;



SELECT *
FROM student
JOIN room
	ON room.id = student.room_id;

  SELECT name,
	   room_number
FROM student
JOIN room
	ON room.id = student.room_id;

  SELECT room.id AS room_id,
	   equipment.id AS equipment_id,
       beds,
       floor,
       room_number,
       name
FROM equipment
INNER JOIN room
	ON equipment.room_id = room.id;

  LEFT JOIN works in the following way: it returns all rows from the left table (the first table in the query) plus all matching rows from the right table (the second table in the query).


SELECT *
FROM student
LEFT JOIN room
	ON student.room_id = room.id;

SELECT *
from equipment
LEFT JOIN room
	on equipment.room_id = room.id;



The RIGHT JOIN works in the following way: it returns all rows from the right table (the second table in the query) plus all matching rows from the left table (the first table in the query).


SELECT *
FROM student
RIGHT JOIN room
	on student.room_id = room.id;


   Another joining method is FULL JOIN. This type of JOIN returns all rows from both tables and combines the rows when there is a match. In other words, FULL JOIN is a union of LEFT JOIN and RIGHT JOIN.


```
