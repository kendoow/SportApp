import HistoryCard from '@entities/History/ui/HistoryCard/HistoryCard';
import HistoryFilters from '@entities/History/ui/HistoryFilters/HistoryFilters';
import SearchWithClear from '@entities/SearchWithClear/ui/SearchWithClear';
import tagsNames from '@shared/constants/tagsNames';





const History = () => {
  return (
    <>
      <SearchWithClear />
      <HistoryFilters />
      <HistoryCard
        title="123"
        date="19/03/23"
        tags={tagsNames}
      />
    </>
  );
};

export default History;