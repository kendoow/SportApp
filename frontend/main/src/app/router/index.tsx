import { createBrowserRouter } from "react-router-dom";

import LoginForm from "@features/auth/ui/LoginForm/LoginForm";
import RestoreFrom from "@features/auth/ui/RestoreForm/RestoreForm";
import SignupForm from "@features/auth/ui/SignupForm/SignupForm";
import authStore from "@features/auth/store/authStore";
import ProtectedRoute from "@app/router/ProtectedRoute";
import Main from "@pages/main";
import Layout from "@pages/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Main />
      </Layout>
    ),
  },
  {
    path: "home",
    element: (
      <Layout>
        <Main />
      </Layout>
    ),
  },
  {
    path: "bio",
    element: (
      <Layout>
        <Main />
      </Layout>
    ),
  },
  {
    path: "login",
    element: (
      <ProtectedRoute user={authStore.isAuthenticated}>
        <LoginForm />
      </ProtectedRoute>
    ),
  },
  {
    path: "restore",
    element: (
      <ProtectedRoute user={authStore.isAuthenticated}>
        <RestoreFrom />
      </ProtectedRoute>
    ),
  },
  {
    path: "signup",
    element: (
      <ProtectedRoute user={authStore.isAuthenticated}>
        <SignupForm />
      </ProtectedRoute>
    ),
  },
]);

export default router;
