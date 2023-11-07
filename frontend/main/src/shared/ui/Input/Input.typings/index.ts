import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import { FieldError, FieldErrorsImpl, FieldValues, Merge, UseFormRegister } from "react-hook-form";

export interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: "primary";
  className?: string;
  checkboxLabel?: JSX.Element;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  children?: ReactNode;
  register?: UseFormRegister<FieldValues>;
}
