import React, { useState } from 'react';

import { Button } from '@shared/ui/Button/Button';
import SwitchIcon from '@shared/ui/Icons/SwitchIcon';

import styles from './WorkoutFilters.module.scss';


const WorkoutFilters = () => {
  const [filterTitle, setFilterTitle] = useState('recents');
  const onFilter = () => {
    setFilterTitle(filterTitle === 'recents' ? 'oldest' : 'recents');
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.text}>templates</h3>
      <div className={styles.filter}>
        <p className={styles.filterText}>sort by: </p>
        <Button
          onClick={onFilter}
          className={styles.button}
        >
          <p>{filterTitle}</p>
          <SwitchIcon />
        </Button>
      </div>
    </div>
  );
};

export default WorkoutFilters;