import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

import { AddNewCardProps } from '@shared/ui/AddNewCard/AddNewCard.typings';

import styles from './AddNewCard.module.scss';

const AddNewCard: FC<AddNewCardProps> = ({ title, plus, description, to, className , classNameW}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(to)}
      className={cn(styles.container, classNameW, className)}
    >
      <h2 className={cn(styles.title, className)}>{title}</h2>
      {plus && <span className={cn(className, styles.plus)}>+</span>}
      <p className={cn(className, styles.description)}>{description}</p>
    </div>
  );
};

export default AddNewCard;
