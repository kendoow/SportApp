import cn from 'classnames';

import type { IButtonProps } from './Button.typings';

import styles from './Button.module.scss';


export const Button = ({
  children,
  size = 'medium',
  appearance = 'primary',
  icon,
  className,
  ...props
}: IButtonProps) => {
  const buttonClassName = cn(styles.btn, styles[size], styles[appearance], styles[icon], className);

  return (
    <button
      className={buttonClassName}
      {...props}
    >
      {children}
      {icon && (
        <img
          className={styles.icon}
          src={icon}
          alt="icon"
        />
      )}
    </button>
  );
};