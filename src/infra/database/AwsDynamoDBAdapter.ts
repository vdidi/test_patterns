import CloudConnection from "./CloudConnection";
import Aws from "aws-sdk";
const { AwsConfig } = require("../Credentials.js");

export default class AwsDynamoDbAdapter implements CloudConnection {
    constructor() {
        Aws.config.update(AwsConfig);
    }

    connect(): Aws.DynamoDB.DocumentClient {
        return new Aws.DynamoDB.DocumentClient();
    }

    put(params: { TableName: string; Item: any; }): Promise<any> {
        throw new Error("Method not implemented.");
    }

}