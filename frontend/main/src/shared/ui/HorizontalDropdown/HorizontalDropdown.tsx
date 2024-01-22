import cn from 'classnames';
import React, { useState } from 'react';

import { HorizontalDropdownProps } from '@shared/ui/HorizontalDropdown/HorizontalDropdown.typings';
import ArrowIcon from '@shared/ui/Icons/ArrowIcon';

import styles from './HorizontalDropdown.module.scss';


const HorizontalDropdown = ({ title, children }: HorizontalDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const containerClasses = cn(styles.container, {
    [styles.containerOpened]: !isOpen,
  });

  const iconClasses = cn(styles.icon, {
    [styles.iconRotated]: isOpen,
  });

  return (
    <div
      onClick={!isOpen && toggleDropdown}
      className={containerClasses}
    >
      <p className={styles.title}>{title}</p>
      {isOpen && <div className={styles.content}>{children}</div>}
      <ArrowIcon
        onClick={isOpen && toggleDropdown}
        className={iconClasses}
      />
    </div>
  );
};

export default HorizontalDropdown;