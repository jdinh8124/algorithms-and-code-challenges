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

```
