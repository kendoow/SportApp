import { NavLink } from "react-router-dom";
import cn from "classnames";
import { mainPagesOptions } from "@entities/NavigationSidebar/constans";
import styles from "./NavigationSidebar.module.scss";

const NavigationSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h3 title="main pages" />
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
    </div>
  );
};

export default NavigationSidebar;
