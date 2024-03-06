import { TagProps } from '@shared/ui/Tag/Tag.typings';

import styles from './Tag.module.scss';

const Tag = ({ name }: TagProps) => {
  return <div className={styles.tag}>{name}</div>;
};

export default Tag;
