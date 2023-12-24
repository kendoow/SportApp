import React, { useState } from "react";
import styles from "./ProfileIcon.module.scss";
import ProfileMenu from "@entities/ProfileMenu/ui/ProfileMenu";
import useOutsideClick from "@shared/lib/hooks/useOusideClick";
import authStore from "@features/auth/store/authStore";

const ProfileIcon: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const ref = useOutsideClick(() => {
    handleIconClick();
  });
  console.log(authStore.accessToken);
  return (
    <div ref={ref} className={styles.userIconContainer}>
      <div className={styles.userIcon} onClick={handleIconClick}>
        <span>👤</span>
      </div>
      {isMenuOpen && <ProfileMenu />}
    </div>
  );
};

export default ProfileIcon;
