import pgp from "pg-promise";
import crypto from "crypto";
import MovieRepository from "./MovieRepository";
import Movie from "../../domain/Movie";

export default class MovieRepositoryDatabase implements MovieRepository {
    async save(input: Movie) {
		const movieId = crypto.randomUUID();

        const connection = pgp()("postgres://postgres@localhost:5432/test_patterns");
		await connection.query("insert into test_patterns.movie (movie_id, title, year, released, director, awards, poster) values ($1, $2, $3, $4, $5, $6, $7)", [movieId, input.movieId, input.title, input.year, input.awards, input.poster]);
		await connection.$pool.end();
    }
}
