import { FC } from 'react';

import { HomeBannerProps } from '@entities/Home/model/types';
import WreathIcon from '@shared/ui/Icons/WreathIcon';

import styles from './HomeBanner.module.scss';

const HomeBanner: FC<HomeBannerProps> = ({ name, totalDays, streak, betterPercent, height, weight, bodyFat }) => {
  return (
    <div className={styles.container}>
      <div className={styles.communityStats}>
        <div className={styles.stats}>
          <p className={styles.name}>{name}</p>
          <WreathIcon />
        </div>
        <div className={styles.stats}>
          <p className={styles.description}>workouts this year</p>
          <h3 className={styles.info}>{totalDays}</h3>
        </div>
        <div className={styles.stats}>
          <p className={styles.description}>already in challenge for</p>
          <h3 className={styles.info}>{streak} days</h3>
        </div>
        <div className={styles.stats}>
          <p className={styles.description}>better than</p>
          <h3 className={styles.info}>{betterPercent}% of users</h3>
        </div>
      </div>
      <div className={styles.userStats}>1</div>
    </div>
  );
};

export default HomeBanner;
