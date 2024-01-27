import styles from './HomeBanner.module.scss';

const HomeBanner = () => {
  return (
    <div>
      <div className={styles.communityStats}></div>
      <div className={styles.userStats}></div>
    </div>
  );
};

export default HomeBanner;
