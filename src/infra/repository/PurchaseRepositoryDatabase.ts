import Purchase from "../../domain/Purchase";
import PurchaseRepository from "../../application/repository/PurchaseRepository";
import CloudConnection from "../database/CloudConnection";

export default class PurchaseRepositoryDatabase implements PurchaseRepository {
    connection: any;

    constructor (readonly cloudConnection: CloudConnection) {
    }

    async save(purchase: Purchase): Promise<any> {
        const dynamoDb = this.cloudConnection.connect();

        const body = {
            purchaseId: purchase.purchaseId,
            userId: purchase.userId,
            movieId: purchase.movieId, 
            value: purchase.value,
            date: purchase.date.toString(),
            email: purchase.email
        }

        const params = {
            TableName: 'purchase',
            Item: body
        }
        try{
            await dynamoDb.put(params).promise();
            return body;
        } catch(err) {
            console.log("error: ", err); 
        }
    }
}
