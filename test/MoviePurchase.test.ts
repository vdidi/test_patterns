import MoviePurchase from "../src/application/usecases/MoviePurchase"
import PurchaseRepositoryDatabase from "../src/infra/repository/PurchaseRepositoryDatabase";
import UserRepositoryDatabase from "../src/infra/repository/UserRepositoryDatabase";
import CloudConnection from "../src/infra/database/CloudConnection";
import DatabaseConnection from "../src/infra/database/DatabaseConnection";
import PgPromiseAdapter from "../src/infra/database/PgPromiseAdapter";
import AwsDynamoDbAdapter from "../src/infra/database/AwsDynamoDBAdapter";
import sinon from "sinon";

let purchasedMovie: MoviePurchase;
let databaseConnection: DatabaseConnection;
let awsConnection: CloudConnection;

beforeEach(() => {
    databaseConnection = new PgPromiseAdapter();
    awsConnection = new AwsDynamoDbAdapter();
    const userRepository = new UserRepositoryDatabase(databaseConnection);
    const purchaseRepository = new PurchaseRepositoryDatabase(awsConnection);    
    purchasedMovie = new MoviePurchase(purchaseRepository, userRepository);
})

test("Deve ser possível comprar um filme com stub", async () => {
	const stubUserRepositorySave = sinon.stub(UserRepositoryDatabase.prototype, "save").resolves();
	const stubUserRepositoryGetUserByEmail = sinon.stub(UserRepositoryDatabase.prototype, "getUserByEmail").resolves(undefined);
    // const user = await userRepo
    const inputMoviePurchase = {
        email: "email@email.com",
        movieId: crypto.randomUUID(),
        value: 10000
    }
    const result = await purchasedMovie.execute(inputMoviePurchase);
    expect(result).toBeDefined();
	stubUserRepositoryGetUserByEmail.restore();
    stubUserRepositorySave.restore();
});
