import { avataaarsNeutral } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';
import React, { useMemo, useState } from 'react';

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

  const avatar = useMemo(() => {
    return createAvatar(avataaarsNeutral, {
      size: 47,
      radius: 52,
      eyes: ['cry'],
      eyebrows: ['angry'],
    }).toDataUri();
  }, []);

  return (
    <div
      ref={ref}
      className={styles.userIconContainer}
    >
      <h3 className={styles.username}>@username</h3>
      <div
        className={styles.userIcon}
        onClick={handleIconClick}
      >
        <img
          src={avatar}
          alt="profile icon"
        />
      </div>
      {isMenuOpen && <ProfileMenu />}
    </div>
  );
};

export default ProfileIcon;
