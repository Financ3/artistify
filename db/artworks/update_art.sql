UPDATE artworks
SET title = $2, description = $3, media = $4, smallPrice = $5, medPrice = $6, largePrice = $7, featured=$8
WHERE id = $1
RETURNING *;