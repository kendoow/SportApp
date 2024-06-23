import { Link, useNavigate } from 'react-router-dom';

import useTheme from '@app/providers/ThemeProvider/lib/hooks/useTheme';
import { authLogout } from '@entities/ProfileMenu/api';
import Dropdown from '@shared/ui/DropDown/DropDown';
import I18nIcon from '@shared/ui/Icons/I18nIcon';
import LogoutIcon from '@shared/ui/Icons/LogoutIcon';
import ThemeIcon from '@shared/ui/Icons/ThemeIcon';
import Toggle from '@shared/ui/Toggle/Toggle';

import styles from './ProfileMenu.module.scss';

const ProfileMenu = () => {
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();
  const onLogout = async () => {
    try {
      await authLogout();
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ThemeIcon className={styles.icon} />
        <p className={styles.text}>appearence</p>
      </div>
      <div className={styles.wrapper}>
        <Toggle
          onClick={toggleTheme}
          className={styles.toggle}
        />
        <p className={styles.text}>dark/light</p>
      </div>
      <div className={styles.wrapper}>
        <I18nIcon className={styles.icon} />
        <p className={styles.text}>language</p>
      </div>
      <div className={styles.wrapper}>
        <Toggle className={styles.toggle} />
        <p className={styles.text}>eng/ru</p>
      </div>
      <div className={styles.wrapper}>
        <LogoutIcon className={styles.icon} />
        <button
          className={styles.text}
          onClick={onLogout}
        >
          sign out
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;
