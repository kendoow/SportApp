"use client"
import cn from "classnames";

import { IInputProps } from "./Input.typings";
import { outfit } from "@assets/fonts/Outfit/Outfit";

import styles from "./Input.module.scss";

const Input = ({
	variant = "primary",
	className,
	children,
	error,
	type,
	register,
	name,
	...InputProps
}: IInputProps) => {

	const inputClassName = cn(
		error && styles.error,
		styles[variant],
		styles[type],
		outfit.className,
		className,
	);

	return (
		<label className={styles.input}>
			{error && <p className={styles.errorText}>{error}</p>}
			<input
				{...InputProps}
				{...register?.name && { ...register(name) }}
				type={type}
				className={inputClassName}
			/>
			{children}
		</label>
	);
};

export default Input;
