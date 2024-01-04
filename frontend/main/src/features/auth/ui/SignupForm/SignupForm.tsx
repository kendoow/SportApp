import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { authSignup } from '@features/auth/api';
import { SignUpSchema } from '@features/auth/model/validation';
import { TUserSignUp } from '@features/auth/types';
import Layout from '@features/auth/ui/Layout';
import { Button } from '@shared/ui/Button/Button';
import Input from '@shared/ui/Input/Input';
import AppleIcon from '@assets/images/buttonIcons/apple_icon.svg';
import GoogleIcon from '@assets/images/buttonIcons/google_icon.svg';

import styles from './SignupForm.module.scss';

const SignupForm = observer(() => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSignUp = async (data: TUserSignUp) => {
    delete data.passwordSubmit;
    try {
      const response = await authSignup(data);
      console.log(response);
      if (response.id) {
        navigate('/');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <Layout
      title="sign up/"
      subtitle="log in"
      route={() => navigate(-1)}
    >
      <form
        onSubmit={handleSubmit(onSignUp)}
        className={styles.container}
      >
        <Input
          register={register}
          placeholder="Email"
          name="email"
          error={errors?.email?.message}
        />
        <Input
          register={register}
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          error={errors?.password?.message}
        />
        <Input
          register={register}
          name="passwordSubmit"
          type={showPassword ? 'text' : 'password'}
          placeholder="Confirm your password"
          error={errors?.passwordSubmit?.message}
          className={styles.input}
        />
        <Input
          onClick={togglePasswordVisibility}
          type="checkbox"
          variant={null}
        >
          <p className={styles.checkbox}>show password</p>
        </Input>
        <Button
          type="submit"
          className={styles.btn}
        >
          Continue
        </Button>
        <div className={styles.accounts}>
          <Button
            image={AppleIcon}
            size="small"
            appearance="secondary"
          >
            Sign with
          </Button>
          <Button
            image={GoogleIcon}
            size="small"
            appearance="secondary"
          >
            Sign with
          </Button>
        </div>
      </form>
      <p className={styles.terms}>
        I agree with{' '}
        <Link
          className={styles.termslink}
          to="/termsofservice"
        >
          {' '}
          terms of service{' '}
        </Link>
      </p>
    </Layout>
  );
});

export default SignupForm;
