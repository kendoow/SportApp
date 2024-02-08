import { useState } from 'react';

import HistoryCard from '@entities/History/ui/HistoryCard/HistoryCard';
import HistoryEmpty from '@entities/History/ui/HistoryEmpty/HistoryEmpty';
import HistoryFilters from '@entities/History/ui/HistoryFilters/HistoryFilters';
import Pagination from '@entities/Pagination/Pagination';
import SearchWithClear from '@entities/SearchWithClear/ui/SearchWithClear';
import tagsNames from '@shared/lib/constants/tagsNames';

const History = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const onDeleteMode = () => {
    setIsEditable(true);
  };
  const onCancel = () => {
    setIsEditable(false);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <SearchWithClear
        onCancel={onCancel}
        onDelete={onDeleteMode}
        isEditable={isEditable}
      />
      <HistoryFilters />
      {/*<HistoryCard*/}
      {/*  isEditable={isEditable}*/}
      {/*  title="123"*/}
      {/*  date="19/03/23"*/}
      {/*  tags={tagsNames}*/}
      {/*/>*/}
      {/*<Pagination*/}
      {/*  totalPages={10}*/}
      {/*  currentPage={currentPage}*/}
      {/*  onPageChange={handlePageChange}*/}
      {/*/>*/}
      <HistoryEmpty />
    </>
  );
};

export default History;
