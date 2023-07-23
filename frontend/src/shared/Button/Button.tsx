import cn from "classnames";

import type { IButtonProps } from "./Button.typings";

import styles from "./Button.module.scss";

export const Button = ({
  children,
  type = "button",
  size = "small",
  variant = "primary",
  disabled = false,
  className,
}: IButtonProps) => {
  const buttonClassName = cn(
    styles.btn,
    styles[size],
    styles[variant],
    className
  );

  return (
    <button disabled={disabled} type={type} className={buttonClassName}>
      {children}
    </button>
  );
};
