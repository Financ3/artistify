INSERT INTO artworks (title, description, media, smallPrice, medPrice, largePrice, featured)
VALUES ($1,$2,$3,$4,$5,$6,$7)
RETURNING *;