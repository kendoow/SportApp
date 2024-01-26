import { SearchWithClearProps } from '@entities/SearchWithClear/model/types';
import { Button } from '@shared/ui/Button/Button';
import DeleteIcon from '@shared/ui/Icons/DeleteIcon';
import SearchIcon from '@shared/ui/Icons/SearchIcon';
import Input from '@shared/ui/Input/Input';

import styles from './SearchWithClear.module.scss';


const SearchWithClear = ({ onDelete }: SearchWithClearProps) => {
  return (
    <div className={styles.container}>
      <Input placeholder="search">
        <SearchIcon />
      </Input>
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