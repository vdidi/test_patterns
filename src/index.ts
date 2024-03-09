import axios from "axios";
import express, { Request, Response } from "express";
import Movie from "./Movie";
import PurchaseDAODatabase from "./PurchaseDAODatabase";

const app = express();
app.use(express.json());

app.get("/movies", async function name(req: Request, res: Response) {
    const url = "https://www.omdbapi.com/?t=batman&apikey=79b20910";

    axios.get(url).then(async (response) => {
        const movie = new Movie(
            response.data.Title,
            response.data.Year,
            response.data.Released,
            response.data.Director,
            response.data.Awards,
            response.data.Poster
        );
        const database = new PurchaseDAODatabase();
        await database.save(movie);
    });
});

app.listen(3000);
