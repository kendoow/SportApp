import { ReactNode } from "react";
import NavigationSidebar from "@entities/NavigationSidebar/ui/NavigationSidebar";
import Header from "@widgets/Header/ui/Header";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <NavigationSidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
