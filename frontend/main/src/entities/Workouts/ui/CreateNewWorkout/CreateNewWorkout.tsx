import React from 'react';

import AddNewCard from '@shared/ui/AddNewCard/AddNewCard';

import styles from './CreateNewWorkout.module.scss';

const CreateNewWorkout = () => {
  return (
    <div>
      <h2 className={styles.title}>create new workout here</h2>
      <div className={styles.container}>
        <AddNewCard
          className={styles.green}
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

export default CreateNewWorkout;
