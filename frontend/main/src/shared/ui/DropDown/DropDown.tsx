import React, { useState, ReactNode } from 'react'
import styles from './Dropdown.module.scss' // Импортируйте стили как модуль

interface DropdownProps {
  children: ReactNode;
  title: string;
}

const Dropdown: React.FC<DropdownProps> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  const closeDropdown = () => {
    setIsOpen(false)
  }

  return (
    <div className={`${styles.dropdown} ${isOpen ? styles.dropdownOpen : ''}`}>
      <div className={styles.dropdownToggle} onClick={toggleDropdown}>
        <p>{title}</p>
      </div>
      {isOpen && <div className={styles.dropdownMenu}>{children}</div>}
    </div>
  )
}

export default Dropdown
