import { TagProps } from '@shared/ui/Tag/Tag.typings';

import styles from './Tag.module.scss';

const Tag = ({ text }: TagProps) => {
  return <div className={styles.tag}>{text}</div>;
};

export default Tag;
