import React, { ReactNode, useState } from "react";
import cn from "classnames";
import styles from "./Dropdown.module.scss";

interface DropdownProps {
  children: ReactNode;
  title: string;
  className?: string;
  icon?: any;
}

const Dropdown: React.FC<DropdownProps> = ({
  children,
  title,
  className,
  icon,
}) => {
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
      <div className={isOpen ? styles.dropdownMenu : styles.dropdownEmpty}>
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
