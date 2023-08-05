import cn from "classnames";

import { IInputProps } from "./Input.typings";
import styles from "./Input.module.scss";
import { outfit } from "@assets/fonts/Outfit/Outfit";

const Input = ({
  type = "text",
  variant = "primary",
  placeholder,
  className,
  children, 
  error
}: IInputProps) => {
  const inputClassName = cn(
    styles[type],
    styles[variant],
    outfit.className,
    className
  );

  return (
    <span className={styles.input}>
      <input placeholder={placeholder} type={type} className={inputClassName} />
      {type === "checkbox" && children}
	  {
		error && <label className={styles.label}>{error}</label>
	  }
    </span>
  );
};

export default Input;
