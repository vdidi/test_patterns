import Movie from "../src/domain/Movie";
import User from "../src/domain/User";
import MoviePurchase from "../src/application/usecases/MoviePurchase"

test("Deve ser possível comprar um filme com stub", async () => {
    const user = User.create("Vitor", new Date("1993-04-28"), "Rua Ali", "123456789", "(11) 99999-9999", "user_teste", "senha123", new Date());
    const movie = Movie.create("Batman", "1999", "12 jun 1999", "Director", "Greammy", "url://teste");

    const purchasedMovie = new MoviePurchase();
    await purchasedMovie.execute(user.userId, movie.movieId, 10000);

    expect(purchasedMovie.movieId).toBeDefined();
});
