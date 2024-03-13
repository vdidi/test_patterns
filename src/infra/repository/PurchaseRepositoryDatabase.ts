import Purchase from "../../domain/Purchase";
import Aws from "aws-sdk";
import PurchaseRepository from "../../repository/PurchaseRepository";
//const { AwsConfig } = require("../Credentials.js");


export default class PurchaseDAODatabase implements PurchaseRepository {
    constructor (AwsConfig: any) {
        Aws.config.update(AwsConfig);
    }

    async save(purchase: Purchase): Promise<void> {
        const dynamoDb = new Aws.DynamoDB.DocumentClient();
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
            const request = await dynamoDb.put(params).promise();
        } catch(err) {
            console.log("error: ", err); 
        }
    }
}

type Input = {
    purchaseId: string,
    userId: string,
    movieId: string, 
    value: number,
    email: string,
    date: Date
}
