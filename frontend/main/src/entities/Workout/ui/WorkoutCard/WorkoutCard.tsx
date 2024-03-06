import { FC } from 'react';

import { WorkoutCardProps } from '@entities/Workout/model/types';
import DeleteIcon from '@shared/ui/Icons/DeleteIcon';
import Input from '@shared/ui/Input/Input';
import Tag from '@shared/ui/Tag/Tag';

import styles from './WorkoutCard.module.scss';

const WorkoutCard: FC<WorkoutCardProps> = ({ name, tags, sets, reps, deleteMode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <h4 className={styles.title}>{name}</h4>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <Tag name={tag} />
          ))}
        </div>
      </div>
      <div className={styles.blockInput}>
        <Input
          type="number"
          value={sets}
          annotation={'sets'}
        />
      </div>
      <div className={styles.blockInput}>
        <Input
          type="number"
          value={reps}
          annotation={'reps'}
        />
      </div>
      {deleteMode && <DeleteIcon className={styles.icon} />}
    </div>
  );
};

export default WorkoutCard;
