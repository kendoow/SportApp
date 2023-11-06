"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react";

import Input from "@shared/ui/Input/Input";
import { Button } from "@shared/ui/Button/Button";
import Layout from "@features/auth/ui/Layout";
import AppleIcon from "@assets/images/buttonIcons/apple_icon.svg";
import GoogleIcon from "@assets/images/buttonIcons/google_icon.svg";
import styles from "./LoginFrom.module.scss";
import { LoginSchema } from "@features/auth/model/validation";
import { TUserLogin } from "@features/auth/types";
import { authLogin } from "@features/auth/api";

const LoginForm = () => {
	const router = useRouter();
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState('')
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(LoginSchema),
	});

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	}

	const onLogin = async (data: TUserLogin) => {
		try {
			const response = await authLogin(data)
			if (typeof response === "string") {
				setError(response)
				return
			}
			router.push("/");
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<Layout
			title="log in/"
			subtitle="sign up"
			route={() => router.push("signup")}
		>
			<form onSubmit={handleSubmit(onLogin)} className={styles.container}>
				<Input
					placeholder="Email"
					register={register}
					name="email"
					error={errors?.email?.message}
				/>
				<Input
					placeholder="Password"
					className={styles.input}
					type={showPassword ? "text" : "password"}
					name="password"
					register={register}
					error={errors?.password?.message || error}
				/>
				<Input type="checkbox" variant={null} onClick={togglePasswordVisibility}>
					<p className={styles.checkbox}>show password</p>
				</Input>

				<Button type="submit" className={styles.btn}>Continue</Button>
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