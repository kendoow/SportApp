import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: "primary";
  className?: string;
  checkboxLabel?: JSX.Element;
  error?: string;
  children?: ReactNode;
  register?: UseFormRegister<FieldValues>;
}
