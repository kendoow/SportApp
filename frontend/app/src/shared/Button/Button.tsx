import cn from "classnames";

import type { IButtonProps } from "./Button.typings";
import styles from "./Button.module.scss";

export const Button = ({
  children,
  type = "button",
  size = "medium",
  variant = "primary",
  disabled = false,
  onClick,
  className,
}: IButtonProps) => {
  const buttonClassName = cn(
    styles.btn,
    styles[size],
    styles[variant],
    className
  );

  return (
    <button onClick={onClick} disabled={disabled} type={type} className={buttonClassName}>
      {children}
    </button>
  );
};
