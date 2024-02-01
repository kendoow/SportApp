import { Link } from 'react-router-dom';
import { FC } from 'react';

import { HomeBannerProps } from '@entities/Home/model/types';
import ArrowIcon from '@shared/ui/Icons/ArrowIcon';
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

      <div className={styles.userStats}>
        <div className={styles.userStats}>
          <div className={styles.baseStats}>
            <p className={styles.baseStatsName}>height</p>
            <h3 className={styles.baseStatsValue}>{height} sm</h3>
          </div>
          <div className={styles.baseStats}>
            <p className={styles.baseStatsName}>weight</p>
            <h3 className={styles.baseStatsValue}>{weight} kg</h3>
          </div>
          <div className={styles.baseStats}>
            <p className={styles.baseStatsName}>body fat</p>
            <h3 className={styles.baseStatsValue}>{bodyFat}% kg</h3>
          </div>
        </div>
        <div className={styles.linkBlock}>
          <Link
            className={styles.link}
            to={'/bio'}
          >
            go to bio
          </Link>
          <ArrowIcon className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
