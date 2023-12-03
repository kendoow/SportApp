import { ReactNode } from "react";
import NavigationSidebar from "@entities/NavigationSidebar/ui/NavigationSidebar";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <NavigationSidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
