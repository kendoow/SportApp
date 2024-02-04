import HomeBanner from '@entities/Home/ui/HomeBanner/HomeBanner';
import Calendar from '@shared/ui/Calendar/Calendar';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <HomeBanner
        name={'Bybus'}
        betterPercent={96}
        height={120}
        bodyFat={11}
        streak={52}
        totalDays={11}
        weight={78}
      />

      <Calendar
        startDate={new Date('2024-1-1')}
        endDate={new Date('2024-12-31')}
        values={[
          { date: '2024-01-01', count: 2 },
          { date: '2024-01-22', count: 2 },
          { date: '2024-01-30', count: 3 },
        ]}
      />
    </div>
  );
};

export default Home;
