export default interface UserDAO {
    save(input: any): Promise<any>;
}
