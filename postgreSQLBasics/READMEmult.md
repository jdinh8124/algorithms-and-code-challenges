```
SELECT *
FROM movie, director;


SELECT *
FROM movie, director
WHERE movie.director_id = director.id;

SELECT *
FROM movie
JOIN director
	on movie.director_id = director.id;



SELECT
	movie.title,
    director.name
FROM movie
JOIN director
	on movie.director_id = director.id;

  SELECT
	name,
    title
 FROM movie
 JOIN director
 	on director.id = movie.director_id;

SELECT
  title AS movie_title,
  name
FROM movie
JOIN director
  ON director_id = director.id;

SELECT *
FROM movie
JOIN director
  ON director_id = director.id
WHERE production_year > 2000;

SELECT *
FROM movie
JOIN director
	on director_id = director.id
WHERE name = 'Steven Spielberg';

SELECT title,
		name,
		production_year,
        birth_year as born_in
FROM movie
JOIN director
  ON director_id = director.id
WHERE (production_year - birth_year) < 40;

SELECT  movie.id,
		title,
		production_year produced_in,
       birth_year AS born_in,
        name
FROM movie
JOIN director
  ON director.id = director_id
WHERE (title LIKE '%a%' AND production_year > 2000) OR (birth_year BETWEEN 1945 AND 1995);
```
