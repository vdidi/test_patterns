import crypto from "crypto";

export default class PurchaseDAO {
    private constructor(readonly purchaseId: string, readonly value: number,readonly date: Date) {
    }

    static create (value: number) {
        if (typeof value != "number") throw new Error("Value is not a number")
        const purchaseId = crypto.randomUUID();
        const date = new Date();
        return new PurchaseDAO(purchaseId, value, date)
    }
}
