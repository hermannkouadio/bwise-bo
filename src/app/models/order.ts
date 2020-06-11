import { Users } from './user';

export class Order {
    ordId: number;
	ordCreateDate: Date;
	ordEndDate: Date;
	// 0: draft, 1: wait validation, 2: in progress, 3: delivered, 4: cancel
	ordStatus: number;
    owner: Users;
}
