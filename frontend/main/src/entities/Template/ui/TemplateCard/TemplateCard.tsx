import React from 'react';

import { TemplateCardProps } from '@entities/Template/model/types';

import styles from './TemplateCard.module.scss';


const TemplateCard = ({ title, date, isEditable }: TemplateCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.name}>
          <div className={styles.nameAndStatus}>
            <p className={styles.title}>{title}</p>
            <span>1</span>
          </div>
          {isEditable && <input type={'checkbox'} />}
        </div>
        <p className={styles.lastuse}>last use: {date}</p>
      </div>
    </div>
  );
};

export default TemplateCard;