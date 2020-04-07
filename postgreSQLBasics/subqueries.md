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


    SELECT *
FROM city
WHERE population < ALL (
  SELECT population
  FROM country
);

SELECT *
FROM trip
WHERE price = ANY (
  SELECT price
  FROM hiking_trip
);

SELECT *
FROM country
WHERE population <= (
  SELECT min(population)
  FROM city
  WHERE city.country_id = country.id
);


SELECT *
FROM city main_city
WHERE rating > (
  SELECT AVG(rating)
  FROM city average_city
  WHERE average_city.country_id = main_city.country_id
);

SELECT *
FROM trip
WHERE city_id IN (
  SELECT id FROM city
  WHERE city.rating < 4
);


SELECT *
FROM country
WHERE EXISTS (
  SELECT
    *
  FROM mountain
  WHERE country_id = country.id
)

SELECT *
FROM mountain
WHERE NOT EXISTS (
  SELECT
    *
    FROM hiking_trip
    WHERE hiking_trip.mountain_id = mountain.id
);

SELECT *
FROM hiking_trip main_hiking_trip
WHERE length >= ALL (
  SELECT length
  FROM hiking_trip sub_hiking_trip
  WHERE main_hiking_trip.mountain_id = sub_hiking_trip.mountain_id);



SELECT *
FROM trip
WHERE days < ANY (
  SELECT days FROM hiking_trip
  WHERE trip.price = hiking_trip.price
);
```
