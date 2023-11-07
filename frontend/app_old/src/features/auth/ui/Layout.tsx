import { ReactNode } from "react";
import styles from "./Layout.module.scss";

type LayoutProps = {
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
					<p className={styles.title}>{title}</p>
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
