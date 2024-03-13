import Purchase from "../domain/Purchase";

export default interface PurchaseRepository {
    save(purchase: Purchase): Promise<void>;
}