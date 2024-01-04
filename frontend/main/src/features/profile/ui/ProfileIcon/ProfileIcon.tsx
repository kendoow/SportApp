import React, { useState } from 'react';

import ProfileMenu from '@entities/ProfileMenu/ui/ProfileMenu';
import useOutsideClick from '@shared/lib/hooks/useOusideClick';

import styles from './ProfileIcon.module.scss';

const ProfileIcon: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const ref = useOutsideClick(() => {
    setIsMenuOpen(false);
  });

  return (
    <div
      ref={ref}
      className={styles.userIconContainer}
    >
      <div
        className={styles.userIcon}
        onClick={handleIconClick}
      >
        <span>👤</span>
      </div>
      {isMenuOpen && <ProfileMenu />}
    </div>
  );
};

export default ProfileIcon;
