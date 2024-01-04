import cn from 'classnames';

import { TToggle } from '@shared/ui/Toggle/Toggle.typings';

import styles from './Toggle.module.scss';

const Toggle = ({ onClick, className }: TToggle) => {
  return (
    <label className={cn(styles.switch, className)}>
      <input
        type="checkbox"
        onClick={onClick}
      />
      <span className={cn(styles.slider, styles.round)}></span>
    </label>
  );
};

export default Toggle;
