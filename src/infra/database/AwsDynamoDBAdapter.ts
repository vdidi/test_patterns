import CloudConnection from "./CloudConnection";
import Aws from "aws-sdk";
const { AwsConfig } = require("../../../config/Credentials.js");

export default class AwsDynamoDbAdapter implements CloudConnection {
    constructor() {
        Aws.config.update(AwsConfig);
    }

    connect(): Aws.DynamoDB.DocumentClient {
        return new Aws.DynamoDB.DocumentClient();
    }

}