import { makeAutoObservable } from "mobx";
import { TUser } from "@features/auth/types";

class AuthStore {
  isAuthenticated = false;
  accessToken = localStorage.getItem("accessToken");
  email = "";
  password = "";

  constructor() {
    makeAutoObservable(this);
  }

  setUserData(userData: TUser, accessToken: string) {
    const { password, email } = userData;
    this.email = email;
    this.password = password;
    this.accessToken = accessToken;
    this.isAuthenticated = true;
  }
}

const authStore = new AuthStore();

export default authStore;
