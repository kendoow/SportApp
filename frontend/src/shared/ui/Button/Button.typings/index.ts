import type { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  // TODO: убрать ненужные пропсы
  children: ReactNode;
  onClick?: () => void;
  size?: "small" | "medium";
  type?: "button";
  variant?: "primary" | "secondary";
  image?: string;
  disabled?: boolean;
  className?: string;
}
