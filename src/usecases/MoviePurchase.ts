import PurchaseRepository from "../repository/PurchaseRepository";
import UserRepository from "../repository/UserRepository";
import PurchaseDAO from "../domain/Purchase";

export default class MoviePurchase {

    constructor (readonly purchaseRepository: PurchaseRepository, readonly userRepository: UserRepository) {
    }

    async execute (email: string, movieId: string, value: number): Promise<string> {
        const user = await this.userRepository.getUserByEmail(email);
        if (!user) throw new Error("Usuário não encontrado");
        const purchase = PurchaseDAO.create(user.userId, movieId, user.email, value);
        await this.purchaseRepository.save(purchase) 

        return purchase.purchaseId;
    }
}