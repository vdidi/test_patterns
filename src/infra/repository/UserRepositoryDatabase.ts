import pgp from "pg-promise";
import crypto from "crypto";
import UserRepository from "../../repository/UserRepository";
import User from "../../domain/User";

export default class UserRepositoryDatabase implements UserRepository {
    async save(input: Input) {
        const userId = crypto.randomUUID();
        
        const connection = pgp()("postgres://postgres@localhost:5432/test_patterns");
		await connection.query("insert into test_patterns.movie (user_id, name, birthdate, cpf, telephone, user_name, password, value, create_date) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)", [userId, input.name, input.bithdate, input.address, input.cpf, input.telephone, input.user_name, input.password, input.value, input.create_date]);
		await connection.$pool.end();
    }
    async getUserByEmail(email: string): Promise<User | undefined> {
        const connection = pgp()("postgres://postgres@localhost:5432/test_patterns");
		const [user] = await connection.query("select * from test_patterns.user where email = $1", [email]);
		await connection.$pool.end();
        return user;
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
