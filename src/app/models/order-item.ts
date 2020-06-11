import { Order } from './order';
import { Product } from './product';

export class OrderItem {
	oriId: number;
	order: Order;
	product: Product;
	quantity: number;
}
