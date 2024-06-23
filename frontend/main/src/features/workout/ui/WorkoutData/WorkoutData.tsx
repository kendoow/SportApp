import React from 'react';

import WorkoutCard from '@entities/Workout/ui/WorkoutCard/WorkoutCard';

import styles from './WorkoutData.module.scss';

const WorkoutData = () => {
  return (
    <div className={styles.container}>
      <WorkoutCard
        name="workout"
        tags={['tag1', 'tags']}
        reps={10}
        sets={10}
        deleteMode
      />
      <WorkoutCard
        name="workout"
        tags={['tag1', 'tags']}
        reps={10}
        sets={10}
        deleteMode
      />
      <WorkoutCard
        name="workout"
        tags={['tag1', 'tags']}
        reps={10}
        sets={10}
        deleteMode
      />
      <div className={styles.comment}>123</div>
    </div>
  );
};

export default WorkoutData;
