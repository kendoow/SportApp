import { ReactNode } from 'react';

import Header from '@widgets/Header/ui/Header';

import styles from './AuthLayout.module.scss';

type LayoutProps = {
  children: ReactNode;
};
const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Header isAuth />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default AuthLayout;
