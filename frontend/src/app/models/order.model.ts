import { OrderItem } from './order-item.model';

export class Order {
  constructor(
    public firstName: string,
    public lastName: string,
    public address: string,
    public zip: string,
    public city: string,
    public country: string,
    public orderItems: OrderItem[],
    public id?: number,
    public userId?: string,
    public price?: number
  ) {}
}
