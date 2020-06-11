import { Users } from './user';

export interface LoggedUser {
    user: Users;
	token: string ;
}

export class JwtRequest{
    username: string ;
    password: string ;
}