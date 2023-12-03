import { NavLink } from "react-router-dom";
import cn from "classnames";

import Dropdown from "@shared/ui/DropDown/DropDown";
import { mainPagesOptions } from "@entities/NavigationSidebar/constans";
import styles from "./NavigationSidebar.module.scss";

const NavigationSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Dropdown title="main pages">
        {mainPagesOptions.map((option) => (
          <NavLink
            to={`/${option}`}
            className={({ isActive }) =>
              isActive
                ? cn(styles.sidebarActive, styles.sidebarElement)
                : cn(styles.sidebarElement, styles.sidebarInactive)
            }
          >
            {option}
          </NavLink>
        ))}
      </Dropdown>
      <Dropdown title="settings">
        <NavLink
          to="/account"
          className={({ isActive }) =>
            isActive
              ? cn(styles.sidebarActive, styles.sidebarElement)
              : cn(styles.sidebarElement, styles.sidebarInactive)
          }
        >
          account
        </NavLink>
      </Dropdown>
    </div>
  );
};

export default NavigationSidebar;
