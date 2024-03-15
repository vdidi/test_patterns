import pgp from "pg-promise";
import DatabaseConnection from "./DatabaseConnection";

export default class PgPromiseAdapter implements DatabaseConnection {
    connection: any;

    constructor() {
      this.connection = pgp()("postgres://postgres@localhost:5432/test_patterns");
    }
    
    query(statement: string, params: any): Promise<void> {
        return this.connection.query(statement, params);
    }

    async close(): Promise<void> {
      await this.connection.$pool.end();
    }
}
