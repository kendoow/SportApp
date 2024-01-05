import { ReactNode } from 'react';

import Header from '@widgets/Header/ui/Header';
import NavigationSidebar from '@entities/NavigationSidebar/ui/NavigationSidebar';

import styles from './Layout.module.scss';

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <NavigationSidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
