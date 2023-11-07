import { Link, createBrowserRouter } from "react-router-dom"

import LoginForm from "@features/auth/ui/LoginForm/LoginForm";
import RestoreFrom from "@features/auth/ui/RestoreForm/RestoreForm";
import SignupForm from "@features/auth/ui/SignupForm/SignupForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="login">About Us</Link>
      </div>
    ),
  },
  {
    path: "login",
    element: <LoginForm />,
  },
  {
    path: "restore",
    element: <RestoreFrom />,
  },
  {
    path: "signup",
    element: <SignupForm />,
  },
]);


export default router;