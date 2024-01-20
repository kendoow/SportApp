import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  size?: 'small' | 'medium';
  appearance?: 'primary' | 'secondary';
  icon?: string;
  className?: string;
}
