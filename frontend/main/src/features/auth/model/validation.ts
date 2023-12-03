import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("This field is required")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("This field is required")
    .min(3, "Password is too short")
    .max(20, "Password is too long"),
});

export const SignUpSchema = yup.object().shape({
  email: yup
    .string()
    .required("This field is required")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("This field is required")
    .min(3, "Password is too short")
    .max(20, "Password is too long"),
  passwordSubmit: yup
    .string()
    .required("This field is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
