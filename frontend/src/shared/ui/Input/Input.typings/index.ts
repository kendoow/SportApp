import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  // TODO: убрать type, placeholder, disabled.
  type?: "text" | "password" | "number" | "email" | "checkbox";
  variant?: "primary";
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  // TODO: React.ElementType
  checkboxLabel?: JSX.Element;
  error?:string;
}
