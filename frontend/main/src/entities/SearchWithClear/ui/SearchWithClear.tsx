import { FC } from 'react';

import { SearchWithClearProps } from '@entities/SearchWithClear/model/types';
import { Button } from '@shared/ui/Button/Button';
import CancelIcon from '@shared/ui/Icons/CancelIcon';
import DeleteIcon from '@shared/ui/Icons/DeleteIcon';
import SearchIcon from '@shared/ui/Icons/SearchIcon';
import Input from '@shared/ui/Input/Input';

import styles from './SearchWithClear.module.scss';

const SearchWithClear: FC<SearchWithClearProps> = ({ onDelete, onCancel, isEditable }) => {
  return (
    <div className={styles.container}>
      <Input placeholder="search">
        <SearchIcon />
      </Input>
      {isEditable && (
        <Button
          onClick={onCancel}
          className={styles.cancel}
        >
          <CancelIcon />
        </Button>
      )}
      <Button
        onClick={onDelete}
        className={styles.delete}
      >
        <DeleteIcon />
      </Button>
    </div>
  );
};

export default SearchWithClear;
