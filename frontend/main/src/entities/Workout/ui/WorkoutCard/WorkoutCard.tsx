import React from 'react';

import { WorkoutCardProps } from '@entities/Workout/model/types';

import styles from './WorkoutCard.module.scss';


const WorkoutCard = ({ title, date, isEditable }: WorkoutCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.name}>
          <div className={styles.nameAndStatus}>
            <p className={styles.title}>{title}</p>
            <span>1</span>
          </div>
          {isEditable && <input type={'checkbox'} />}
        </div>
        <p className={styles.lastuse}>last use: {date}</p>
      </div>
    </div>
  );
};

export default WorkoutCard;