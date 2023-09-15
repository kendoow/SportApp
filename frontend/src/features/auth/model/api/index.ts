import { TUser } from "./../types/index";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Создаем экземпляр fetchBaseQuery с базовым URL
const baseQuery = fetchBaseQuery({ baseUrl: process.env.BASE_URL });

// Создаем API с помощью createApi
export const authApi = createApi({
  baseQuery,
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userData: TUser) => ({
        url: "auth/signup",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

// Экспортируем хук use*Query и use*Mutation для использования в компонентах
export const { useSignupMutation } = authApi;
