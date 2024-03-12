import crypto from "crypto";

export default class PurchaseDAO {
    constructor(readonly purchaseId: string, readonly value: number,readonly date: Date) {
    }

    static create (value: number) {
        const purchaseId = crypto.randomUUID();
        const date = new Date();
        return new PurchaseDAO(purchaseId, value, date)
    }
}
