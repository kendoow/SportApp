import cn from "classnames";

import { IInputProps } from "./Input.typings";
import styles from "./Input.module.scss";
import { outfit } from "@assets/fonts/Outfit/Outfit";

const Input = ({
  // TODO: убрать text потому что он по дефолту text.
  type = "text",
  variant = "primary",
  placeholder,
  className,
  children,
  error,
}: IInputProps) => {
  const inputClassName = cn(
    styles[type],
    styles[variant],
    outfit.className,
    className
  );

  return (
      // TODO: убрать span
    <span className={styles.input}>
      <input placeholder={placeholder} type={type} className={inputClassName} />
      {/*TODO: Сделать отдельный компонент. Children в input.*/}
      {type === "checkbox" && children}
      {/*TODO: сделать через ::before и className*/}
      {error && <label className={styles.label}>{error}</label>}
    </span>
  );
};

export default Input;
