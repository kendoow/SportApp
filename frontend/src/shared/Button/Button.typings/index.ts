import type { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  size?: "small" | "medium";
  type?: "button" | "reset" | "submit";
  variant?: "primary" | "secondary" | "link";
  disabled?: boolean;
  className?: string;
}
