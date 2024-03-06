import { HistoryCardProps } from '@entities/History/model/types';
import Tag from '@shared/ui/Tag/Tag';

import styles from './HistoryCard.module.scss';


const HistoryCard = ({ title, tags, date, isEditable }: HistoryCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentData}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.date}>{date}</p>
          <span className={styles.status} />
        </div>
        <div className={styles.tags}>
          {tags.map((tag: string) => (
            <Tag name={tag} />
          ))}
        </div>
      </div>

      {isEditable && <input type={'checkbox'} />}
    </div>
  );
};

export default HistoryCard;