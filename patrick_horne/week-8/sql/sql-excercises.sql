/* 1. Count number of employees */
SELECT count(1) FROM employee

/* 2. Who are the 3 best paid employees? */
SELECT * FROM employee ORDER BY salary DESC LIMIT 3

/* 3. Who is the less paid employee? */
SELECT * FROM employee ORDER BY salary LIMIT 3

/* 4. Increase the salary of the lowest paid employee by 5% */
UPDATE employee SET salary = (SELECT salary * 1.05 FROM people) WHERE ID = (SELECT ID from employee order by salary limit 1)

/* 5. Search employees starting with the letter 'J' */
SELECT * FROM employee WHERE first_name LIKE 'J%'

/* 6. Search employees that are in engineering */
SELECT * FROM employee WHERE business_title LIKE '%engineer%'

/* 7. Search employees that don't have a business title */
SELECT * FROM employee WHERE business_title IS NULL

/* 8. Search employees with a salary greater than 160K */
SELECT * FROM employee WHERE salary > 160000

