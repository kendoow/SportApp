import { useNavigate } from 'react-router-dom';

import Layout from '@features/auth/ui/Layout';
import Input from '@shared/ui/Input/Input';
import { Button } from '@shared/ui/Button/Button';
import styles from './PasswordSubmitFrom.module.scss';


const PasswordSubmitFrom = () => {
	const navigate = useNavigate();
	return (
		<Layout title='password/' subtitle='back' route={() => navigate(-1)}>
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