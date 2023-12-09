export type TUser = {
  name?: string;
  password: string;
  email: string;
  id?: number;
};

export type TUserSignUp = {
  email: string;
  password: string;
  passwordSubmit: string;
};

export type TUserLogin = Omit<TUser, "id" | "name">;

export type TAuthResponse = {
  refreshToken: string;
  accessToken: string;
  password: string;
  email: string;
  id?: number;
};

export type TAuthError = {
  message: string;
};
