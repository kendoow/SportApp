import { Button } from '@shared/ui/Button/Button';
import Input from '@shared/ui/Input/Input';

import styles from './LoginForm.module.scss';

const LoginForm = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    // phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>sign up</h2>
      <p className={styles.description}>indicate your mobile phone number, it will remain between us</p>
      <Input
        type="tel"
        annotation={true}
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
