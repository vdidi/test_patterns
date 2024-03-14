import Movie from "../../domain/Movie";

export default interface MovieRepository {
    save(movie: Movie): Promise<any>;
}
