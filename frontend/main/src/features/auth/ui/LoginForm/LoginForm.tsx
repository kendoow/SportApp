import InputMask from 'react-input-mask';
import { useState } from 'react';

import { Button } from '@shared/ui/Button/Button';
import Input from '@shared/ui/Input/Input';

import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const [phone, setPhone] = useState('');
  const handleInput = ({ target: { value } }) => setPhone(value);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>sign up</h2>
      <p className={styles.description}>indicate your mobile phone number, it will remain between us</p>
      <InputMask
        onChange={handleInput}
        className={styles.input}
        placeholder={'+7(999) 999-99-99'}
        mask="+7(999)999-99-99"
        maskChar={null}
        value={phone}
      />
      <div className={styles.service}>
        <Input type={'checkbox'} />
        <p className={styles.serviceText}>Agree with Terms of Service</p>
      </div>
      <Button className={styles.btn}>go</Button>
    </div>
  );
};

export default LoginForm;
