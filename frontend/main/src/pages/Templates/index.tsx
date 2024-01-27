import React, { useState } from 'react';

import SearchWithClear from '@entities/SearchWithClear/ui/SearchWithClear';
import TemplateCard from '@entities/Template/ui/TemplateCard/TemplateCard';
import TemplateFilters from '@entities/Template/ui/TemplateFilters/TemplateFilters';

const Templates = () => {
  const [isEditable, setIsEditable] = useState(false);
  const onDeleteMode = () => {
    setIsEditable(true);
  };
  const onCancel = () => {
    setIsEditable(false);
  };
  return (
    <div>
      <SearchWithClear
        onCancel={onCancel}
        onDelete={onDeleteMode}
        isEditable={isEditable}
      />
      <TemplateFilters />
      <TemplateCard
        isEditable={isEditable}
        title="123"
        date="123"
      />
    </div>
  );
};

export default Templates;
