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

SELECT *
FROM room
FULL JOIN student
	ON student.room_id = room.id;

SELECT *
FROM room
RIGHT OUTER JOIN equipment
	ON room.id = equipment.room_id
WHERE name = 'kettle';


SELECT *
FROM student
NATURAL JOIN room;


SELECT
	e.id,
    e.name,
    r.room_number,
    r.beds
FROM room AS r
JOIN equipment AS e
		ON r.id = e.room_id;

    SELECT *
FROM student AS s1
JOIN student AS s2
	on s1.room_id = s2.room_id
Where s1.name = 'Jack Pearson'
	  AND s1.id <> s2.id;

    SELECT
	s1.name,
   	s2.name,
    room_number
FROM student AS s1
JOIN student AS s2
	ON s1.room_id = s2.room_id
JOIN room AS r ON r.id = s1.room_id
WHERE r.beds = 2
	  AND s1.name < s2.name;
```
