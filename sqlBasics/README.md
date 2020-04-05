```
SELECT *
FROM car;

Select
	model,
	price
From car;

SELECT *
FROM car
WHERE production_year = 1995;

SELECT *
FROM car
WHERE price > 10000;

SELECT *
FROM car
WHERE production_year != 1999;

SELECT
	brand,
    model,
    production_year
FROM car
WHERE price <= 11300;

SELECT vin
FROM car
WHERE
	production_year < 2005
    	or
        price < 10000;

SELECT vin
FROM car
WHERE
	production_year >1999
    	and
        price < 7000;

SELECT vin,
  		brand,
      model
FROM  car
WHERE production_year BETWEEN 1995 and 2005;

SELECT vin,
	  	brand,
      model
FROM cars
WHERE production_year NOT BETWEEN 1995 AND 2005;

SELECT vin,
FROM car
WHERE (production_year < 1999 OR production_year > 2005)
	AND (price < 4000 OR price > 10000);

```
