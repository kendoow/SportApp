import React, { useState } from 'react';

import SearchWithClear from '@entities/SearchWithClear/ui/SearchWithClear';
import TemplateCard from '@entities/Template/ui/TemplateCard/TemplateCard';
import TemplateFilters from '@entities/Template/ui/TemplateFilters/TemplateFilters';
import AddNewCard from '@shared/ui/AddNewCard/AddNewCard';

import styles from './Templates.module.scss';

const Templates = () => {
  const [isEditable, setIsEditable] = useState(false);
  const onDeleteMode = () => {
    setIsEditable(true);
  };
  const onCancel = () => {
    setIsEditable(false);
  };
  return (
    <>
      <SearchWithClear
        onCancel={onCancel}
        onDelete={onDeleteMode}
        isEditable={isEditable}
      />
      <TemplateFilters />
      <div className={styles.cards}>
        <AddNewCard
          to="/builder"
          plus
          title="add new template"
          description="click here to add new template to your workout"
        />
        <TemplateCard
          isEditable={isEditable}
          title="123"
          date="123"
        />
      </div>
    </>
  );
};

export default Templates;
