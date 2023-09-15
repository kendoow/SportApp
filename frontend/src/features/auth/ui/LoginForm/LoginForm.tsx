"use client";
import Input from "@shared/ui/Input/Input";
import styles from "./LoginFrom.module.scss";
import { Button } from "@shared/ui/Button/Button";
import Layout from "@features/auth/ui/Layout";
import AppleIcon from "@assets/images/buttonIcons/apple_icon.svg";
import GoogleIcon from "@assets/images/buttonIcons/google_icon.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {
	const router = useRouter();
	return (
		<Layout
			title="log in/"
			subtitle="sign up"
			route={() => router.push("signup")}
		>
			<form className={styles.container}>
				<Input placeholder="Email" />
				<Input
					placeholder="Password"
					className={styles.input}
					type="password"
				/>
				<Input type="checkbox" variant={null} >
					<p className={styles.checkbox}>show password</p>
				</Input>

				<Button className={styles.btn}>Continue</Button>
				<div className={styles.accounts}>
					<Button image={AppleIcon} size="small" appearance="secondary">
						Sign with
					</Button>
					<Button image={GoogleIcon} size="small" appearance="secondary">
						Sign with
					</Button>
				</div>
				<Link className={styles.restore} href="/restore">
					Forget your password?
				</Link>
			</form>
		</Layout>
	);
};

export default LoginForm;
