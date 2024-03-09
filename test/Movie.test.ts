import Movie from "../src/Movie"

test("Deve criar um objeto da classe Movie", function (){
    const posterUrl = "https://m.media-amazon.com/images/M/MV5BZWQ0OTQ3ODctMmE0MS00ODc2LTg0ZTEtZWIwNTUxOGExZTQ4XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg";
    const movie = new Movie("Batman", "1999", "12 jun 1999", "Director", "Greammy", posterUrl);

    expect(movie).toBeDefined();
    expect(movie.getTitle()).toBe("Batman");
    expect(movie.year).toBe("1999");
    expect(movie.released).toBe("12 jun 1999");
    expect(movie.director).toBe("Director");
    expect(movie.awards).toBe("Greammy");
    expect(movie.poster).toBe(posterUrl);
});

test("Deve retornar o título do filme", function (){
    const movie = new Movie("Batman", "1999", "12 jun 1999", "Director", "Greammy", "https://m.media-amazon.com/images/M/MV5BZWQ0OTQ3ODctMmE0MS00ODc2LTg0ZTEtZWIwNTUxOGExZTQ4XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg");

    expect(movie.getTitle()).toBe("Batman");
});
