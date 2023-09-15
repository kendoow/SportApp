export type TAuthState = {
  user: TUser;
  isAuth: boolean;
}

export type TUser = {
  name: string;
  password: string;
  email: string;
  id: number;
}

