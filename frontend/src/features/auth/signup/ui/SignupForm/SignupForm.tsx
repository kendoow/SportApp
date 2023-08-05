"use client";
import Layout from "@features/auth/Layout";
import Input from '@shared/ui/Input/Input';
import { useRouter } from "next/navigation";
import styles from './SignupForm.module.scss';
import Link from 'next/link';
import { Button } from '@shared/ui/Button/Button';
import AppleIcon from "@assets/images/apple_icon.svg";
import GoogleIcon from "@assets/images/google_icon.svg";

const SignupForm = () => {
	const router = useRouter();
	return (
		<Layout
			title="sign up/"
			subtitle="log in"
			route={() => router.push("/login")}
		>
			<form className={styles.container}>
				<Input placeholder="Name" />
				<Input
					placeholder="Email"
					className={styles.input}
				/>
				<Input type="checkbox" variant={null} > 
					<p className={styles.terms}>I agree with <Link className={styles.termslink} href='termsofservice'> terms of service </Link></p>	
				</Input>
				<Button className={styles.btn}>Continue</Button>
				<div className={styles.accounts}>
					<Button image={AppleIcon} size="small" variant="secondary">
						Sign with
					</Button>
					<Button image={GoogleIcon} size="small" variant="secondary">
						Sign with
					</Button>
				</div>
			</form>
		</Layout>
	);
};

export default SignupForm;
