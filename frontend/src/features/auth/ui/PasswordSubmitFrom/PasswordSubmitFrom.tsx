'use client';
import Layout from '@features/auth/ui/Layout';
import styles from './PasswordSubmitFrom.module.scss';
import { useRouter } from 'next/navigation';
import Input from '@shared/ui/Input/Input';
import { Button } from '@shared/ui/Button/Button';

const PasswordSubmitFrom = () => {
	const router = useRouter();
	return (
		<Layout title='password/' subtitle='back' route={() => router.back()}>
			<form>
				<Input type='password' placeholder='Password' />
				<Input type='password' placeholder='Confirm your password' />
				<Input type='checkbox' variant={null}>
					<p className={styles.checkbox}>show password</p>
				</Input>
				<Button className={styles.btn}>
					Continue
				</Button>
			</form>
		</Layout>
	);
};

export default PasswordSubmitFrom;