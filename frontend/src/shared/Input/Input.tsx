import cn from "classnames";

import { IInputProps } from './Input.typings';
import styles from './Input.module.scss';
import { outfit } from '@assets/fonts/Outfit/Outfit';

const Input = ({ type = 'text', variant = 'primary', className }: IInputProps) => {
	const inputClassName = cn(
		styles.input,
		styles[variant],
		outfit.className,
		className
	);

	return (
		<input type={type} className={inputClassName}>

		</input>
	);
};

export default Input;