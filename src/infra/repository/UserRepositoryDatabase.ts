import UserRepository from "../../application/repository/UserRepository";
import User from "../../domain/User";
import DatabaseConnection from "../database/DatabaseConnection";

export default class UserRepositoryDatabase implements UserRepository {
    constructor (readonly connection: DatabaseConnection) {
    }

    async save(input: User) {
		await this.connection.query("insert into test_patterns.movie (user_id, name, birthdate, cpf, telephone, user_name, password,  create_date) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)", [input.userId, input.name, input.birthdate, input.address, input.cpf, input.telephone, input.userName, input.password, input.createDate]);
    }
    async getUserByEmail(email: string): Promise<User | undefined> {
		const [user] = await this.connection.query("select * from test_patterns.user where email = $1", [email]);
        return user;
    }
}
