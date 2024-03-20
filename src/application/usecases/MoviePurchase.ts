import PurchaseRepository from "../repository/PurchaseRepository";
import UserRepository from "../repository/UserRepository";
import Purchase from "../../domain/Purchase";

export default class MoviePurchase {

    constructor (readonly purchaseRepository: PurchaseRepository, readonly userRepository: UserRepository) {
    }

    async execute (input: Input): Promise<Output> {
        const user = await this.userRepository.getUserByEmail(input.email);
        if (!user) throw new Error("Usuário não encontrado");
        const purchase = Purchase.create(user.userId, input.movieId, user.email, input.value);
        await this.purchaseRepository.save(purchase) 

        return {
            purchaseId: purchase.purchaseId
        };
    }
}

type Input = {
    email: string, 
    movieId: string, 
    value: number
}

type Output = {
    purchaseId: string
}