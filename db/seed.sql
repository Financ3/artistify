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
VALUES ('Example Title 1', 'This is a 1 super cool description including a large number of characters. It is going to include a ton of awesome information about the artwork and why it is dope and worthy of hanging in someones home. So that is why this bit of data exists and stuff.', 'Example Media', 5, 10, 15, TRUE),
('Example Title 2', 'This is a 2 super cool description including a large number of characters. It is going ton include a ton of awesome information about the artwork and why it is dope and worthy of hanging in someones home. So that is why this bit of data exists and stuff.', 'Example Media', 5, 10, 15, TRUE),
('Example Title 3', 'This is a 3 super cool description including a large number of characters. It is going ton include a ton of awesome information about the artwork and why it is dope and worthy of hanging in someones home. So that is why this bit of data exists and stuff.', 'Example Media', 5, 10, 15, TRUE),
('Example Title 4', 'This is a 4 super cool description including a large number of characters. It is going ton include a ton of awesome information about the artwork and why it is dope and worthy of hanging in someones home. So that is why this bit of data exists and stuff.', 'Example Media', 5, 10, 15, FALSE),
('Example Title 5', 'This is a 5 super cool description including a large number of characters. It is going ton include a ton of awesome information about the artwork and why it is dope and worthy of hanging in someones home. So that is why this bit of data exists and stuff.', 'Example Media', 5, 10, 15, FALSE),
('Example Title 6', 'This is a 6 super cool description including a large number of characters. It is going ton include a ton of awesome information about the artwork and why it is dope and worthy of hanging in someones home. So that is why this bit of data exists and stuff.', 'Example Media', 5, 10, 15, FALSE),
('Example Title 7', 'This is a 7 super cool description including a large number of characters. It is going ton include a ton of awesome information about the artwork and why it is dope and worthy of hanging in someones home. So that is why this bit of data exists and stuff.', 'Example Media', 5, 10, 15, FALSE),
('Example Title 8', 'This is a 8 super cool description including a large number of characters. It is going ton include a ton of awesome information about the artwork and why it is dope and worthy of hanging in someones home. So that is why this bit of data exists and stuff.', 'Example Media', 5, 10, 15, FALSE),
('Example Title 9', 'This is a 9 super cool description including a large number of characters. It is going ton include a ton of awesome information about the artwork and why it is dope and worthy of hanging in someones home. So that is why this bit of data exists and stuff.', 'Example Media', 5, 10, 15, FALSE),
('Example Title 10', 'This is a 10 super cool description including a large number of characters. It is going ton include a ton of awesome information about the artwork and why it is dope and worthy of hanging in someones home. So that is why this bit of data exists and stuff.', 'Example Media', 5, 10, 15, FALSE);

INSERT INTO subscribers (email)
VALUES ('exampleEmail@notanemail.com');


