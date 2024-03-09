import PurchaseDAO from "./PurchaseDAO";

export default class PurchaseDAODatabase implements PurchaseDAO {
    async save(input: any) {
        console.log("Comprando filme", {
            Title: input.title,
            Year: input.year,
            Released: input.released,
            Director: input.director,
            Awards: input.awards,
            Poster: input.poster
        })
    }
}
