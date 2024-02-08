import React from 'react';

import AddNewCard from '@shared/ui/AddNewCard/AddNewCard';
import styles from './HistoryEmpty.module.scss'
const HistoryEmpty = () => {
  return (
    <div>
      <h2 className={styles.title}>your history is empty right now...</h2>
      <div className={styles.container}>
        <AddNewCard
          title="add new workout"
          plus
          description="click here to add new workout"
          to="/builder"
        />
        <AddNewCard
          title="use template"
          description="click here to add new template to your workout"
          to="/templates"
        />
      </div>
    </div>
  );
};

export default HistoryEmpty;
