import axios from "axios";
import express, { Request, Response } from "express";
import Movie from "./domain/Movie";
import PurchaseRepositoryDatabase from "./infra/repository/PurchaseRepositoryDatabase";
const { AwsConfig } = require("../Credentials.js");
import MovieDAODatabase from "./infra/repository/MovieRepositoryDatabase";
import MoviePurchase from "./application/usecases/MoviePurchase";
import UserRepositoryDatabase from "./infra/repository/UserRepositoryDatabase";

const app = express();
app.use(express.json());

app.post("/purchase", async function name(req: Request, res: Response) {
    const value = Math.round(Math.random() * 1000 * 10) / 10;
    const purchaseRepository = new PurchaseRepositoryDatabase(AwsConfig);
    const userRepository = new UserRepositoryDatabase();
    const purchase = new MoviePurchase(purchaseRepository, userRepository);
    const purchaseId = purchase.execute(req.body.email, req.body.movieId, value)
    
    return res.status(200).json({mensagem: `Compra finalizada: id ${purchaseId}`});
});

app.get("/movies", async function name(req: Request, res: Response) {
    const url = "https://www.omdbapi.com/?t=batman&apikey=79b20910";
    const database = new MovieDAODatabase();
    axios.get(url).then(async (response) => {
        const movie = Movie.create(
            response.data.Title,
            response.data.Year,
            response.data.Released,
            response.data.Director,
            response.data.Awards,
            response.data.Poster
        );

        await database.save(movie);
        
        console.log("Movie: ", movie);
    });
});

app.listen(3000);
