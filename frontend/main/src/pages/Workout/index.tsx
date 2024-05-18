import WorkoutData from '@features/workout/ui/WorkoutData/WorkoutData';
// import WorkoutCard from '@entities/Workout/ui/WorkoutCard/WorkoutCard';
import { Button } from '@shared/ui/Button/Button';
import BookIcon from '@shared/ui/Icons/BookIcon';
import EditIcon from '@shared/ui/Icons/EditIcon';
import FileIcon from '@shared/ui/Icons/FileIcon';

import styles from './Workout.module.scss';

// TODO: decompose component to fsd
const Workout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.date}>12.07.24</p>
        <Button
          className={styles.button}
          renderIcon={() => <FileIcon className={styles.icon} />}
        >
          {' '}
          back day
        </Button>
        <Button
          className={styles.button}
          renderIcon={() => <FileIcon className={styles.icon} />}
        >
          {' '}
          rate
        </Button>
      </div>
      <div className={styles.actionsBlock}>
        <p className={styles.title}>actions:</p>
        <div className={styles.actions}>
          <Button
            className={styles.button}
            renderIcon={() => <EditIcon className={styles.icon} />}
          >
            {' '}
            edit
          </Button>
          <Button
            className={styles.button}
            renderIcon={() => <BookIcon className={styles.icon} />}
          >
            {' '}
            view in history
          </Button>
        </div>
      </div>
      <WorkoutData />
    </div>
  );
};

export default Workout;
