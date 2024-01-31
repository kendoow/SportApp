import HomeBanner from '@entities/Home/ui/HomeBanner/HomeBanner';

const Home = () => {
  return (
    <div>
      <HomeBanner
        name={'Bybus'}
        betterPercent={96}
        height={120}
        bodyFat={11}
        streak={52}
        totalDays={11}
        weight={78}
      />
    </div>
  );
};

export default Home;
