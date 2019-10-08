CREATE TABLE people (
    id INTEGER PRIMARY KEY, -- Comma separated list of attributes with a type and a list of options
    first_name TEXT,
    last_name TEXT,
    age INTEGER
);

CREATE TABLE employee (
	id INTEGER PRIMARY KEY,
	first_name TEXT, 
	business_title TEXT, 
	salary INTEGER, 
	email TEXT
);

Exercise

select * from employee where first_name LIKE 'J%'

select * from employee where business_title LIKE '%Engineer%'

select * from employee where business_title IS NULL;

select * from employee where salary > 160000;

select substr(first_name, 1, 1), business_title  from employee;

select count(1) from employee;

select * from employee order by salary, first_name;

select * from employee order by salary limit 5;

select * from employee order by salary desc limit 1;

UPDATE employee SET salary = ((SELECT salary  FROM employee ORDER BY salary DESC LIMIT 1) * 1.05) where first_name = (SELECT first_name  FROM employee ORDER BY salary DESC LIMIT 1)