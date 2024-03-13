export default class Movie {
    
    private constructor (
        readonly movieId: string,
        readonly title: string,
        readonly year: string,
        readonly released: string,
        readonly director: string,
        readonly awards: string,
        readonly poster: string) {
    }
    
    static create(title: string, year: string, released: string, director: string, awards: string, poster: string) {
        const movieId = crypto.randomUUID();
        return new Movie(movieId, title, year, released, director, awards, poster);
    }
}