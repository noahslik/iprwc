export class Product {
    constructor(
        public name: string,
        public artist: string,
        public price: number,
        public imageUrl: string,
        public id?: number,
    ) {}
}