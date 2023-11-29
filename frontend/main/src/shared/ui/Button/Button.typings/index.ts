  import type { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  size?: "small" | "medium";
  appearance?: "primary" | "secondary";
  image?: string;
  className?: string;
}
