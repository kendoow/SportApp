import { IInputProps } from './Input.typings';
import cn from 'classnames';
import { ReactNode } from 'react';

import styles from './Input.module.scss';

const Input = ({
  variant = 'primary',
  className,
  children,
  annotation,
  type,
  register,
  name,
  ...InputProps
}: IInputProps) => {
  const inputClassName = cn(annotation && styles.annotation, styles[variant], styles[type], className);

  return (
    <label className={styles.input}>
      {annotation && <p className={styles.annotationText}>{annotation}</p>}
      <input
        {...InputProps}
        {...(register?.name && { ...register(name) })}
        type={type}
        className={inputClassName}
      />
      {children}
    </label>
  );
};

export default Input;
