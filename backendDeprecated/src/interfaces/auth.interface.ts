export interface IUser {
	name: string;
	email: string;
	password: string;
	address: string;
	phone: string;
	card: string;
}

export interface IUserCreated extends IUser {
	id: string;
}

export interface IToken {
	accessToken: string;
	refreshToken: string;
}

export interface IJwtPayload {
	email: string;
	id: string;
}