DROP TABLE IF EXISTS adminuser;
DROP TABLE IF EXISTS artworks;
DROP TABLE IF EXISTS subscribers;

CREATE TABLE adminuser (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE artworks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    media TEXT,
    smallPrice FLOAT,
    medPrice FLOAT,
    largePrice FLOAT,
    featured BOOLEAN
);

CREATE TABLE subscribers (
  id SERIAL PRIMARY KEY,
  email TEXT
);

--nates starting password: A23kD*1W
INSERT INTO adminuser (username, email, password)
VALUES ('nateFrancis', 'nate@email.com','$2a$09$k6zNkvve5LuwHmUVDqiLneA1KNPSKBp6yYMxz31LHrBXRME1fC9em');

INSERT INTO artworks (title, description, media, smallPrice, medPrice, largePrice, featured)
VALUES ('Arm Study', 'A study in arms and identity.', 'https://artistcontent.s3.us-east-2.amazonaws.com/Arm+Study+%232.jpg', 5, 10, 15, TRUE),
('Center In Place', 'A study in identity suppression and identity burden.', 'https://artistcontent.s3.us-east-2.amazonaws.com/Center+-+In+Place.jpg', 5, 10, 15, TRUE),
('Death of Me', 'A personal narrative.', 'https://artistcontent.s3.us-east-2.amazonaws.com/Death+of+Me+-+Compiled.jpg
', 5, 10, 15, FALSE),
('Mirror Study 6', 'The 6th in a series of studies using reflection to explore identity.', 'https://artistcontent.s3.us-east-2.amazonaws.com/E+Wall+(LARGE1)+-+Mirror+Study+%236.jpg', 5, 10, 15, FALSE),
('Salt And Body', 'An exploration of identity and environment.', 'https://artistcontent.s3.us-east-2.amazonaws.com/N+Wall+-+Salt+%26+Body+Study+%232.jpg', 5, 10, 15, FALSE),
('Mirror Study 3', 'The 3rd in a series of studies using reflection to explore identity.', 'https://artistcontent.s3.us-east-2.amazonaws.com/S+Wall1+-+Mirror+Study+%233.jpg', 5, 10, 15, FALSE),
('Mirror Study 2', 'The 2nd in a series of studies using reflection to explore identity.', 'https://artistcontent.s3.us-east-2.amazonaws.com/S+Wall2+-+Mirror+Study+%232.jpg', 5, 10, 15, FALSE),
('Mirror Study 4', 'The 4th in a series of studies using reflection to explore identity.', 'https://artistcontent.s3.us-east-2.amazonaws.com/S+Wall3+-+Mirror+Study+%234.jpg
', 5, 10, 15, FALSE),
('Mirror Study 1', 'The 1st in a series of studies using reflection to explore identity.', 'https://artistcontent.s3.us-east-2.amazonaws.com/S+Wall4+-+Mirror+Study+%231.jpg', 5, 10, 15, FALSE);

INSERT INTO subscribers (email)
VALUES ('tanner.francis11@gmail.com');


