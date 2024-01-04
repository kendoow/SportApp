import cn from 'classnames';
import React, { useState } from 'react';

import { DropdownProps } from '@shared/ui/DropDown/Dropdown.typings';

import styles from './Dropdown.module.scss';

const Dropdown: React.FC<DropdownProps> = ({ children, title, className, icon }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={cn(styles.dropdown, className)}>
      <div
        className={`${
          isOpen
            ? cn(styles.dropdownToggle, styles.dropdownToggleUp)
            : cn(styles.dropdownToggle, styles.dropdownToggleDown)
        }`}
        onClick={toggleDropdown}
      >
        {icon && icon}
        <p className={styles.dropdownTitle}>{title}</p>
      </div>
      <div className={isOpen ? styles.dropdownMenu : styles.dropdownEmpty}>{children}</div>
    </div>
  );
};

export default Dropdown;
