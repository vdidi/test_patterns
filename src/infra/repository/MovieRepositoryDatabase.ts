import MovieRepository from "../../application/repository/MovieRepository";
import Movie from "../../domain/Movie";
import DatabaseConnection from "../database/DatabaseConnection";

export default class MovieRepositoryDatabase implements MovieRepository {
    
    constructor (readonly connection: DatabaseConnection) {
    }

    async save(input: Movie) {
      await this.connection.query("insert into test_patterns.movie (movie_id, title, year, released, director, awards, poster) values ($1, $2, $3, $4, $5, $6, $7)", [input.movieId, input.movieId, input.title, input.year, input.awards, input.poster]);
    }
}
