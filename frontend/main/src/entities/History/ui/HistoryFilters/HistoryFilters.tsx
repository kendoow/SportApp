import SortByRecent from '@entities/SortByRecent/ui/SortByRecent';
import tagsNames from '@shared/lib/constants/tagsNames';
import HorizontalDropdown from '@shared/ui/HorizontalDropdown/HorizontalDropdown';
import Tag from '@shared/ui/Tag/Tag';

import styles from './HistoryFilters.module.scss';

const HistoryFilters = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.text}>filter by:</p>
          <div className={styles.wrapper}>
            <HorizontalDropdown title="tags">
              {tagsNames.map((tag: string) => (
                <Tag
                  key={tag}
                  text={tag}
                />
              ))}
            </HorizontalDropdown>
          </div>
        </div>
        <SortByRecent />
      </div>
    </>
  );
};

export default HistoryFilters;
