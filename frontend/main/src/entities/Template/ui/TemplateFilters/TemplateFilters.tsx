import SortByRecent from '@entities/SortByRecent/ui/SortByRecent';

import styles from './TemplateFilters.module.scss';

const TemplateFilters = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.text}>templates</h3>
      <SortByRecent />
    </div>
  );
};

export default TemplateFilters;
