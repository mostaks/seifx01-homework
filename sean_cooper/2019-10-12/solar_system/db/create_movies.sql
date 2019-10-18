CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  description TEXT,
  rating TEXT
);

INSERT INTO movies (id, name, image, description, rating) VALUES (1, "Chef", "https://www.placecage.com/c/460/300", "man cooks", "6/10");
INSERT INTO movies (id, name, image, description, rating) VALUES (2, "7 pounds", "https://www.placecage.com/c/460/300", "man donates", "9/10");
INSERT INTO movies (id, name, image, description, rating) VALUES (3, "Fox and the Hound", "https://www.placecage.com/c/460/300", "fox bad?", "10/10");
INSERT INTO movies (id, name, image, description, rating) VALUES (4, "Titanic", "https://www.placecage.com/c/460/300", "Leo doesnt fit on the door", "5/10")
