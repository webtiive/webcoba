CREATE TABLE project (
	id_project SERIAL PRIMARY KEY,
	judul_project VARCHAR(50) NOT NULL,
	gambar_project VARCHAR(50) NOT NULL,
	desc_project VARCHAR(500)
);

SELECT * FROM project;