import { TAuthResponse, TUser, TUserLogin, TUserSignUp } from "../types";
import api from "@shared/api";

export const authLogin = async (data: TUserLogin): Promise<TUser | string> => {
    try {
        const response = await api.post<TAuthResponse>('/auth/login', data)
        localStorage.setItem('accessToken', response.data.accessToken);
        return response.data.user;
    } catch (e) {
        return e.response.data.message
    }
};


export const authSignup = async (data: TUserSignUp): Promise<TUser> => {
    delete data.passwordSubmit;
    console.log(data)
    try {
        const response = await api.post<TAuthResponse>('/auth/signup', data)
        localStorage.setItem('accessToken', response.data.accessToken);
        return response.data.user;
    } catch (e) {
        return e.response.data.message
    }
}
