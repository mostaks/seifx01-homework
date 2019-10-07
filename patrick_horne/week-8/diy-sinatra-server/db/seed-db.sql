CREATE TABLE movies (
  id INTEGER PRIMARY KEY,
  title TEXT, director TEXT,
  year_released TEXT,
  box_office INTEGER,
  rating NUMBER
);

INSERT INTO movies(title, director, year_released, box_office, tomatometer)
  VALUES (
    "Black Panther",
    "Ryan Coogler",
    "2018",
    501105037,
    97
  );


INSERT INTO movies(title, director, year_released, box_office, tomatometer)
  VALUES (
    "Citizen Kane",
    "Orson Welles",
    "1941",
    NULL,
    97
  );

  
INSERT INTO movies(title, director, year_released, box_office, tomatometer)
  VALUES (
    "The Wizard of Oz",
    "King Vidor, Victor Fleming",
    "1939",
    3840702,
    98
  );

INSERT INTO movies(title, director, year_released, box_office, tomatometer)
  VALUES (
    "BlacKKKlansman",
    "Spike Lee",
    "2018",
    NULL,
    96
  );

INSERT INTO movies(title, director, year_released, box_office, tomatometer)
  VALUES (
    "Get Out",
    "Jordan Peele",
    "2017",
    175428355,
    98
  );

INSERT INTO movies(title, director, year_released, box_office, tomatometer)
  VALUES (
    "Mad Max: Fury Road",
    "George Miller",
    "2015",
    129483877,
    97
  );

INSERT INTO movies(title, director, year_released, box_office, tomatometer)
  VALUES (
    "The Third Man",
    "Carol Reed",
    "1999",
    NULL,
    99
  );

INSERT INTO movies(title, director, year_released, box_office, tomatometer)
  VALUES (
    "Moonlight",
    "Orson Welles",
    "1941",
    27850910,
    98
  );

INSERT INTO movies(title, director, year_released, box_office, tomatometer)
  VALUES (
    "Modern Times",
    "Orson Welles",
    "1936",
    NULL,
    100
  );
