import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: "primary";
  className?: string;
  checkboxLabel?: JSX.Element;
  error?:string;
}
