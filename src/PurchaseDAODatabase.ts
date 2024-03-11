import PurchaseDAO from "./PurchaseDAO";
import pgp from "pg-promise";
import crypto from "crypto";

export default class PurchaseDAODatabase implements PurchaseDAO {
    async save(input: Input) {
		const purchaseId = crypto.randomUUID();

        const connection = pgp()("postgres://postgres@localhost:5432/test_patterns");
		await connection.query("insert into test_patterns.purchase (purchase_id, user_id, movie_id, value, date) values ($1, $2, $3, $4, $5)", [purchaseId, input.userId, input.movieId, input.value, input.date]);
		await connection.$pool.end();
    }
}

type Input = {
    userId: number,
    movieId: number, 
    value: number,
    date: Date
}
