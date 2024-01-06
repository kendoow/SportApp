import cn from 'classnames';

import { IconType } from '@shared/lib/types/iconTypes';

import styles from './styles/styles.module.scss';


const SearchIcon = ({ className }: IconType) => {
  return (
    <svg
      className={cn(className, styles.search)}
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
    >
      <path d="M18.9138 9.10802C18.9138 14.1053 14.8627 18.1565 9.86534 18.1565C4.86802 18.1565 0.816895 14.1053 0.816895 9.10802C0.816895 4.1107 4.86802 0.0595703 9.86534 0.0595703C14.8627 0.0595703 18.9138 4.1107 18.9138 9.10802ZM3.71779 9.10802C3.71779 12.5032 6.47014 15.2556 9.86534 15.2556C13.2605 15.2556 16.0129 12.5032 16.0129 9.10802C16.0129 5.71282 13.2605 2.96047 9.86534 2.96047C6.47014 2.96047 3.71779 5.71282 3.71779 9.10802Z" />
      <rect
        x="13.662"
        y="15.4844"
        width="3.08462"
        height="10.2995"
        rx="1.54231"
        transform="rotate(-43.6158 13.662 15.4844)"
      />
    </svg>
  );
};

export default SearchIcon;