import { useNavigate } from "react-router-dom";

import { authLogout } from "@entities/ProfileMenu/api";
import Dropdown from "@shared/ui/DropDown/DropDown";
import UserIcon from "@shared/ui/Icons/UserIcon";
import LogoutIcon from "@shared/ui/Icons/LogoutIcon";
import profile from "@assets/images/mockprofile.svg";

import styles from "./ProfileMenu.module.scss";
import ThemeIcon from "@shared/ui/Icons/ThemeIcon";
import I18nIcon from "@shared/ui/Icons/I18nIcon";

const ProfileMenu = () => {
  const navigate = useNavigate();
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
      <div className={styles.wrapper}>
        <UserIcon className={styles.icon} />
        <p className={styles.text}>account</p>
      </div>
      <Dropdown icon={<ThemeIcon className={styles.icon} />} title="appearence">
        dark/light
      </Dropdown>
      <Dropdown icon={<I18nIcon className={styles.icon} />} title="language">
        eng/ru
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
