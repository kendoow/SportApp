import { FC } from 'react';

import { HeaderProps } from '@widgets/Header/model/types';
import ProfileIcon from '@features/profile/ui/ProfileIcon/ProfileIcon';

import styles from './Header.module.scss';

const Header: FC<HeaderProps> = ({ isAuth }) => {
  return (
    <div className={styles.container}>
      <h2>@SportApp</h2>
      {!isAuth && <ProfileIcon />}
    </div>
  );
};

export default Header;
