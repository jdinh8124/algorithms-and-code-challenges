```
SELECT *
FROM city
WHERE area = (
  SELECT area
  FROM city
  WHERE name = 'Paris'
);

SELECT name
FROM city
WHERE population < (
  SELECT population
  FROM city
  WHERE name = 'Madrid'
);


SELECT *
FROM trip
WHERE price > (
  SELECT AVG(price)
  FROM trip
);

SELECT *
FROM hiking_trip
WHERE difficulty IN (1,2,3);

SELECT *
FROM trip
WHERE city_id IN (
  	SELECT id
  	From city
  	WHERE area > 100);
```
