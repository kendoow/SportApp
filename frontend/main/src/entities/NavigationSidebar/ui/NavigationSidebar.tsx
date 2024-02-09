import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { mainPagesOptions } from '@entities/NavigationSidebar/constans';

import styles from './NavigationSidebar.module.scss';

const NavigationSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h3 className={styles.sidebarTitle}>main pages</h3>
      {mainPagesOptions.map((option) => (
        <NavLink
          key={option.name}
          to={`/${option.name}`}
          className={({ isActive }) =>
            isActive
              ? cn(styles.sidebarActive, styles.sidebarElement)
              : cn(styles.sidebarElement, styles.sidebarInactive)
          }
        >
          {option.image}
          {option.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NavigationSidebar;
