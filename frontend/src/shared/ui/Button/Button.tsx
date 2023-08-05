import cn from "classnames";
import Image from "next/image";

import type { IButtonProps } from "./Button.typings";
import styles from "./Button.module.scss";

export const Button = ({
  // TODO: убрать ненужные пропсы
  children,
  type = "button",
  size = "medium",
  variant = "primary",
  disabled = false,
  image,
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
    // TODO: убрать ненужные пропсы
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={buttonClassName}
    >
      {children}
      {/* TODO: Вставить иконку через стили ::before ::after*/}
      {image && <Image className={styles.image} src={image} alt="icon" />}
    </button>
  );
};
