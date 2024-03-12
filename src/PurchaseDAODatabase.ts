import PurchaseDAO from "./PurchaseDAO";
import crypto from "crypto";
import Aws from "aws-sdk";
//const { AwsConfig } = require("../Credentials.js");


export default class PurchaseDAODatabase implements PurchaseDAO {
    constructor (AwsConfig: any) {
        Aws.config.update(AwsConfig);
    }

    async save(input: Input) {
        const dynamoDb = new Aws.DynamoDB.DocumentClient();
        const body = {
            purchaseId: input.purchaseId,
            userId: input.userId,
            movieId: input.movieId, 
            value: input.value,
            date: input.date.toString(),
            email: input.email

        }

        const params = {
            TableName: 'purchase',
            Item: body
        }
        try{
            const request = await dynamoDb.put(params).promise();
            return request;
        } catch(err) {
            console.log("error: ", err)
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
