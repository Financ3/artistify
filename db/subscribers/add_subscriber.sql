INSERT INTO subscribers (email)
VALUES ($1)
returning *;