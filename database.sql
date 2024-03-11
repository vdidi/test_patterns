create schema test_patterns;

create table test_patterns.user (
	user_id uuid primary key,
	name text,
	birthdate timestamp,
	address text,
	cpf text,
	telephone text,
	user_name text,
	password text,
	value numeric,
	create_date timestamp
)

create table test_patterns.movie (
	movie_id uuid primary key,
	title text,
	year text,
	released timestamp,
	director text,
	awards text,
	poster text
)