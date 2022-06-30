CREATE TABLE tasks (
    id bigserial PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed boolean DEFAULT false
);