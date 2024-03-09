import axios from "axios";
import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/movies", async function name(req: Request, res: Response) {
    const url = "https://www.omdbapi.com/?t=batman&apikey=79b20910";

    axios.get(url).then(response => console.log(response.data));
});

app.listen(3000);
