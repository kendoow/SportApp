import Dropdown from "@shared/ui/DropDown/DropDown";
import { authLogout } from "@entities/ProfileMenu/api";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileMenu.module.scss";

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
      <span>👤</span>
      @username
      <div>Account</div>
      <Dropdown title="appearence">dark/light</Dropdown>
      <Dropdown title="language">eng/ru</Dropdown>
      <button onClick={onLogout}>Sign out</button>
    </div>
  );
};

export default ProfileMenu;
