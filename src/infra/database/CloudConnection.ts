import Aws from "aws-sdk";

export default interface CloudConnection {
    connect (): Aws.DynamoDB.DocumentClient;
    put(params: Input): Promise<any>;
}

type Input = {
    TableName: string;
    Item: any;
}