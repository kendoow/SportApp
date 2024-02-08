import React from 'react';

import CreateNewWorkout from '@entities/Workouts/ui/CreateNewWorkout/CreateNewWorkout';
import RecentTemplates from '@entities/Workouts/ui/RecentTemplates/RecentTemplates';

import styles from './Workout.module.scss';

const Workouts = () => {
  return (
    <div className={styles.container}>
      <CreateNewWorkout />
      <RecentTemplates />
    </div>
  );
};

export default Workouts;
