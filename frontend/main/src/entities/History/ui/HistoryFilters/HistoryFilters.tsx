import { useState } from 'react';

import tagsNames from '@shared/constants/tagsNames';
import { Button } from '@shared/ui/Button/Button';
import HorizontalDropdown from '@shared/ui/HorizontalDropdown/HorizontalDropdown';
import SwitchIcon from '@shared/ui/Icons/SwitchIcon';
import Tag from '@shared/ui/Tag/Tag';

import styles from './HistoryFilters.module.scss';


const HistoryFilters = () => {
  const [filterTitle, setFilterTitle] = useState('recents');
  const onFilter = () => {
    setFilterTitle(filterTitle === 'recents' ? 'oldest' : 'recents');
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.text}>filter by:</p>
          <p className={styles.text}>sort by:</p>
        </div>
        <div className={styles.wrapper}>
          <HorizontalDropdown title="tags">
            {tagsNames.map((tag: string) => (
              <Tag text={tag} />
            ))}
          </HorizontalDropdown>
          <div>
            <Button
              onClick={onFilter}
              className={styles.button}
            >
              <p>{filterTitle}</p>
              <SwitchIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryFilters;