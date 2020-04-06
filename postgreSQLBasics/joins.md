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
```
