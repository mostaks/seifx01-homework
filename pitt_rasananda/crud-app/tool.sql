CREATE TABLE tools (
  id INTEGER PRIMARY KEY,
  tool_name TEXT,
  website URL,
  img image,
  tool_des TEXT  
);

INSERT INTO tools (id, tool_name, website, img, tool_des) VALUES (1, "Sketch", "https://www.sketch.com","sketch.jpg", "Sketch is used primarily for designing UI and UX of mobile apps and web. ... The designs created in Sketch are utilised by app engineers to design mobile apps and by website developers convert designs into websites.");

INSERT INTO tools (id, tool_name, website, img, tool_des) VALUES (2, "Figma", "https://www.figma.com
","figma.jpg", "A better way to design. Design, prototype, and gather feedback all in one place with Figma.");

