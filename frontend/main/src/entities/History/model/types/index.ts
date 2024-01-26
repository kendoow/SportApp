import tagsNames from '@shared/constants/tagsNames';

export type HistoryCardProps = {
  title: string;
  tags: typeof tagsNames;
  date: string;
  isEditable: boolean;
};