import cn from 'classnames';

import type { IButtonProps } from './Button.typings';

import styles from './Button.module.scss';

export const Button = ({
  children,
  size = 'medium',
  appearance = 'primary',
  image,
  className,
  ...props
}: IButtonProps) => {
  const buttonClassName = cn(styles.btn, styles[size], styles[appearance], styles[image], className);

  return (
    <button
      className={buttonClassName}
      {...props}
    >
      {children}
      {image && (
        <img
          className={styles.image}
          src={image}
          alt="icon"
        />
      )}
    </button>
  );
};
