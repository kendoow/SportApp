import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: "text" | "password" | "number" | "email" | "checkbox";
  variant?: "primary";
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  checkboxLabel?: JSX.Element;
  error?:string;
}
