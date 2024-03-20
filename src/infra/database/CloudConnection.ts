import Aws from "aws-sdk";

export default interface CloudConnection {
    connect (): Aws.DynamoDB.DocumentClient;
}
