import axios from "axios";
import express, { Request, Response } from "express";
import Movie from "./domain/Movie";
import PurchaseDAODatabase from "./database/PurchaseDAODatabase";
const { AwsConfig } = require("../Credentials.js");
import Purchase from "./domain/Purchase";

const app = express();
app.use(express.json());

app.post("/purchase", async function name(req: Request, res: Response) {
    const value = Math.round(Math.random() * 1000 * 10) / 10;
    const purchase = Purchase.create(value);
    const database = new PurchaseDAODatabase(AwsConfig);
    const data = {
        purchaseId: purchase.purchaseId, 
        // userId: req.body.userId, 
        userId: "1", 
        // movieId: req.body.movieId, 
        movieId: "1", 
        value: purchase.value, 
        date: purchase.date,
        email: "email@teste.com"
    }

    await database.save(data);
});

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
        
        console.log("Movie: ", movie);
    });
});

app.listen(3000);
