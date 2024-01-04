import { useNavigate } from 'react-router-dom';

import Layout from '@features/auth/ui/Layout';
import { Button } from '@shared/ui/Button/Button';
import Input from '@shared/ui/Input/Input';

import styles from './RestoreForm.module.scss';

const RestoreFrom = () => {
  const navigation = useNavigate();
  return (
    <Layout
      title="restore your account/"
      subtitle="log in"
      route={() => navigation('/login')}
    >
      <form>
        <Input placeholder="Email" />
        <Button className={styles.btn}>Restore</Button>
      </form>
    </Layout>
  );
};

export default RestoreFrom;
