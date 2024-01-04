import { FieldError, FieldErrorsImpl, FieldValues, Merge, UseFormRegister } from 'react-hook-form';
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

export interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  variant?: 'primary';
  className?: string;
  checkboxLabel?: JSX.Element;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl>;
  children?: ReactNode;
  register?: UseFormRegister<FieldValues>;
}
