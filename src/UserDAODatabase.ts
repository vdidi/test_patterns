import pgp from "pg-promise";
import crypto from "crypto";
import UserDAO from "./UserDAO";

export default class UserDAODatabase implements UserDAO {
    async save(input: Input) {
		const userId = crypto.randomUUID();

        const connection = pgp()("postgres://postgres@localhost:5432/test_patterns");
		await connection.query("insert into test_patterns.movie (user_id, name, birthdate, cpf, telephone, user_name, password, value, create_date) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)", [userId, input.name, input.bithdate, input.address, input.cpf, input.telephone, input.user_name, input.password, input.value, input.create_date]);
		await connection.$pool.end();
    }
}

type Input = {
    name: number, 
    bithdate: Date, 
    address: string, 
    cpf: string, 
    telephone: string
    user_name: string
    password: string
    value: string
    create_date: string
}
