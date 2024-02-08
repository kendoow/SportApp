import tagsNames from '@shared/lib/constants/tagsNames';

export type HistoryCardProps = {
  title: string;
  tags: typeof tagsNames;
  date: string;
  isEditable: boolean;
};

export type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}