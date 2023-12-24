import api from "@shared/api";
import authStore from "@features/auth/store/authStore";

export const authLogout = async () => {
  try {
    const response = await api.post("/auth/logout");
    authStore.setUserDataLogout();
    localStorage.removeItem("accessToken");
    return response.data;
  } catch (e) {
    return e.response.data.message;
  }
};
