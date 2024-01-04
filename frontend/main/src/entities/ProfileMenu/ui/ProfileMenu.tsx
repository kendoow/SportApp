import { Link, useNavigate } from "react-router-dom";

import { authLogout } from "@entities/ProfileMenu/api";
import Dropdown from "@shared/ui/DropDown/DropDown";
import UserIcon from "@shared/ui/Icons/UserIcon";
import LogoutIcon from "@shared/ui/Icons/LogoutIcon";
import profile from "@assets/images/mockprofile.svg";

import styles from "./ProfileMenu.module.scss";
import ThemeIcon from "@shared/ui/Icons/ThemeIcon";
import I18nIcon from "@shared/ui/Icons/I18nIcon";
import Toggle from "@shared/ui/Toggle/Toggle";
import useTheme from "@app/providers/ThemeProvider/lib/hooks/useTheme";

const ProfileMenu = () => {
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();
  const onLogout = async () => {
    try {
      await authLogout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={profile} alt="mock profile icon" />
        <span className={styles.title}>@username</span>
      </div>
      <Link className={styles.wrapper} to="/account">
        <UserIcon className={styles.icon} />
        <p className={styles.text}>account</p>
      </Link>
      <Dropdown icon={<ThemeIcon className={styles.icon} />} title="appearence">
        <div className={styles.dropdown}>
          <p className={styles.text}>dark/light</p>
          <Toggle onClick={toggleTheme} className={styles.toggle} />
        </div>
      </Dropdown>
      <Dropdown icon={<I18nIcon className={styles.icon} />} title="language">
        <div className={styles.dropdown}>
          <p className={styles.text}>eng/ru</p>
          <Toggle className={styles.toggle} />
        </div>
      </Dropdown>
      <div className={styles.wrapper}>
        <LogoutIcon className={styles.icon} />
        <button className={styles.text} onClick={onLogout}>
          sign out
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;
