import cn from "classnames";
import { IInputProps } from "./Input.typings";
import styles from "./Input.module.scss";
import { outfit } from "@assets/fonts/Outfit/Outfit";

const Input = ({
	variant = "primary",
	className,
	children,
	error,
	type,
	...props
}: IInputProps) => {
	
	const inputClassName = cn(
		error && styles.error,
		styles[variant],
		styles[type],
		outfit.className,
		className
	);

	return (
		<label className={styles.input}>
			{error && <p className={styles.errorText}>{error}</p>}
			<input type={type} className={inputClassName} {...props} />
			{children}
		</label>
	);
};

export default Input;
