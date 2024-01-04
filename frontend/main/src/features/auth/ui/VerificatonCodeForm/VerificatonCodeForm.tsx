import { useNavigate } from 'react-router-dom';

import Layout from '@features/auth/ui/Layout';
import { Button } from '@shared/ui/Button/Button';
import Input from '@shared/ui/Input/Input';

import styles from './VerificatonCodeForm.module.scss';

const VerificatonCodeForm = () => {
  const navigate = useNavigate();
  return (
    <Layout
      title=" input verification code/"
      subtitle="back"
      route={() => navigate(-1)}
    >
      <form>
        <Input
          error="Input verify code"
          placeholder="Put your code"
        />
        <Button className={styles.btn}>Continue</Button>
      </form>
    </Layout>
  );
};

export default VerificatonCodeForm;
