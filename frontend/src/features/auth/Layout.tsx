import { ReactNode } from "react";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  route: () => void;
}

const Layout = ({ children, title, subtitle, route }: LayoutProps) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.title}>{title}</h2>
          <p onClick={route} className={styles.subtitle}>
            {subtitle}
          </p>
        </div>
        {children}
      </div>
    </>
  );
};

export default Layout;
