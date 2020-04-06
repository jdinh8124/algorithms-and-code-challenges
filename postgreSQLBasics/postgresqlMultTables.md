```
SELECT *
FROM employees
ORDER by salary;

SELECT *
from employees
WHERE year = 2011
ORDER BY salary;

SELECT *
FROM employees
ORDER BY last_name DESC;

SELECT *
FROM employees
ORDER BY department,
salary DESC;

SELECT salary, position
FROM employees
LIMIT 5;

SELECT salary, position
FROM employees
ORDER BY salary DESC
LIMIT 10;

SELECT year
FROM employees;

SELECT DISTINCT year
FROM employees;


SELECT DISTINCT
	position,
	department
FROM employees;

SELECT COUNT(*)
FROM employees;



SELECT COUNT(position) AS non_null_no
FROM employees ;

SELECT COUNT(DISTINCT position) AS distinct_positions
FROM employees ;


SELECT MAX(salary)
FROM employees ;

SELECT AVG(salary)
FROM employees
WHERE year = 2013;

SELECT SUM(salary)
FROM employees
WHERE year = 2014 AND
 department = 'Marketing';


SELECT
	department,
    COUNT(first_name) AS employees_no
FROM employees
WHERE year = 2013
GROUP BY department;

SELECT
	department,
    MIN(salary),
    MAX(salary)
FROM employees
WHERE year = 2014
GROUP BY department;

```
