import ProfileIcon from "@features/profile/ui/ProfileIcon/ProfileIcon";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <h2>@SportApp</h2>
      <ProfileIcon />
    </div>
  );
};

export default Header;
