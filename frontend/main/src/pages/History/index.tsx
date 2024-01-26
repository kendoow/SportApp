import { useState } from 'react';

import HistoryCard from '@entities/History/ui/HistoryCard/HistoryCard';
import HistoryFilters from '@entities/History/ui/HistoryFilters/HistoryFilters';
import SearchWithClear from '@entities/SearchWithClear/ui/SearchWithClear';
import tagsNames from '@shared/constants/tagsNames';





const History = () => {
  const [isEditable, setIsEditable] = useState(false);
  const onDeleteMode = () => {
    setIsEditable(!isEditable);
  };
  return (
    <>
      <SearchWithClear onDelete={onDeleteMode} />
      <HistoryFilters />
      <HistoryCard
        isEditable={isEditable}
        title="123"
        date="19/03/23"
        tags={tagsNames}
      />
    </>
  );
};

export default History;