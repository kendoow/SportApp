import type { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  onClick?: () => void;
  size?: "small" | "medium";
  type?: "button";
  variant?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
}
