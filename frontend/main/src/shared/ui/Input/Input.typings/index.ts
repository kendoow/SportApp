import { FieldValues, UseFormRegister } from 'react-hook-form';
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

export interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  variant?: 'primary';
  className?: string;
  checkboxLabel?: JSX.Element;
  annotation?: string;
  children?: ReactNode;
  register?: UseFormRegister<FieldValues>;
}
