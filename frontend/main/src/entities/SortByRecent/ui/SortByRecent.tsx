import { useState } from 'react';

import { Button } from '@shared/ui/Button/Button';
import SwitchIcon from '@shared/ui/Icons/SwitchIcon';

import styles from './SortByRecent.module.scss';

const SortByRecent = () => {
  const [filterTitle, setFilterTitle] = useState('recents');

  const onFilter = () => {
    setFilterTitle(filterTitle === 'recents' ? 'oldest' : 'recents');
  };

  return (
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
  );
};

export default SortByRecent;
