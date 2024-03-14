import User from "../../domain/User";

export default interface UserRepository {
    save(input: any): Promise<any>;
    getUserByEmail(email: string): Promise<User | undefined>;
}
