import React from 'react';

import AddNewCard from '@shared/ui/AddNewCard/AddNewCard';

import styles from './RecentTemplates.module.scss';

const RecentTemplates = () => {
  return (
    <div>
      <h2 className={styles.title}>recent templates</h2>
      <div className={styles.container}>
        <AddNewCard
          classNameW={styles.empty}
          title="there is no templates so far"
          plus
          description="click here to add new one"
          to="/builder"
        />
      </div>
    </div>
  );
};

export default RecentTemplates;
