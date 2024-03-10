import { Button } from '@shared/ui/Button/Button';
import Input from '@shared/ui/Input/Input';

import styles from './CodeForm.module.scss';

const CodeForm = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>enter the code</h2>
      <p>enter the code from the SMS sent to the number +7 (993) 484-50-60</p>
      <div>
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
      <p className={styles.code}>
        Do not receive code? <span className={styles.codeReqest}>Send again.</span>
      </p>
      <Button className={styles.btn}>submit</Button>
    </div>
  );
};

export default CodeForm;
