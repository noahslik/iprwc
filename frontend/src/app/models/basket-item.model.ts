import { Product } from "./product.model";

export class BasketItem {
    constructor(
        public product: Product,
        public amount: number
    ) {}
}