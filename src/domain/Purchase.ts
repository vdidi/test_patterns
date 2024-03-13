import crypto from "crypto";

export default class Purchase {
    private constructor(readonly purchaseId: string, readonly userId: string, readonly movieId: string, readonly email: string, readonly value: number,readonly date: Date) {
    }

    static create (userId: string, movieId: string, email: string, value: number) {
        if (typeof value != "number") throw new Error("Value is not a number")
        const purchaseId = crypto.randomUUID();
        const date = new Date();
        return new Purchase(purchaseId, userId, movieId, email, value, date)
    }
}
