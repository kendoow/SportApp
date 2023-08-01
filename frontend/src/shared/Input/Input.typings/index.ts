import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: "text" | "password" | "number" | "email";
  variant?: "primary";
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}
