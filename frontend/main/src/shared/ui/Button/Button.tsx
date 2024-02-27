import cn from 'classnames';

import type { IButtonProps } from './Button.typings';

import styles from './Button.module.scss';

export const Button = ({
  children,
  size = 'medium',
  appearance = 'primary',
  renderIcon,
  className,
  ...props
}: IButtonProps) => {
  const buttonClassName = cn(styles.btn, styles[size], styles[appearance], className);
  const iconComponent = renderIcon && renderIcon();
  return (
    <button
      className={buttonClassName}
      {...props}
    >
      {children}
      {renderIcon && iconComponent}
    </button>
  );
};
