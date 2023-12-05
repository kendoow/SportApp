import React, { ReactNode, useState } from "react";
import cn from "classnames";
import styles from "./Dropdown.module.scss";

interface DropdownProps {
  children: ReactNode;
  title: string;
}

const Dropdown: React.FC<DropdownProps> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={styles.dropdown}>
      <div
        className={`${
          isOpen
            ? cn(styles.dropdownToggle, styles.dropdownToggleUp)
            : cn(styles.dropdownToggle, styles.dropdownToggleDown)
        }`}
        onClick={toggleDropdown}
      >
        <p className={styles.dropdownTitle}>{title}</p>
      </div>
      <div className={isOpen ? styles.dropdownMenu : styles.dropdownEmpty}>
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
