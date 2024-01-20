import HistoryFilters from '@entities/History/ui/HistoryFilters/HistoryFilters';
import SearchWithClear from '@entities/SearchWithClear/ui/SearchWithClear';





const History = () => {
  return (
    <>
      <SearchWithClear />
      <HistoryFilters />
    </>
  );
};

export default History;