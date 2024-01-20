import tagsNames from '@shared/constants/tagsNames';
import { Button } from '@shared/ui/Button/Button';
import SwitchIcon from '@shared/ui/Icons/SwitchIcon';
import Tag from '@shared/ui/Tag/Tag';

import styles from './HistoryFilters.module.scss';


const HistoryFilters = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.tagsWrapper}>
          <p className={styles.text}>filter by:</p>
          {tagsNames.map((tag: string) => (
            <Tag text={tag} />
          ))}
        </div>
        <div className={styles.recent}>
          <p className={styles.text}>sort by:</p>
          <Button>
            recents <SwitchIcon />
          </Button>
        </div>
      </div>
    </>
  );
};

export default HistoryFilters;