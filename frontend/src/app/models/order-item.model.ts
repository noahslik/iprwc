export class OrderItem {
  constructor(
    public productId: number,
    public amount: number,
    public id?: string,
    public price?: number,
    public productName?: string
  ) {}
}
