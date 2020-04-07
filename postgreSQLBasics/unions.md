```
SELECT *
FROM cycling;


SELECT *
FROM cycling;

SELECT *
FROM skating
WHERE year BETWEEN 2010 AND 2014

UNION

SELECT *
FROM cycling
WHERE year BETWEEN 2010 AND 2014;


SELECT country
FROM skating

UNION ALL

SELECT country
FROM cycling
;

SELECT person
FROM cycling

INTERSECT

SELECT person
FROM skating;

SELECT country
FROM cycling


EXCEPT

SELECT country
FROM skating;


```
