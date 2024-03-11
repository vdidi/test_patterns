import PurchaseDAO from "./PurchaseDAO";
import crypto from "crypto";

export default class PurchaseDAODatabase implements PurchaseDAO {
    async save(input: Input) {
		const purchaseId = crypto.randomUUID();

        //  Save DynamoDB
    }
}

type Input = {
    userId: number,
    movieId: number, 
    value: number,
    date: Date
}
