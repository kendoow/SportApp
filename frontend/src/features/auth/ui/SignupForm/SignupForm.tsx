'use client';
import React, { useState } from 'react';

import SignupFormInitialStep from '../SignupFormInitialStep/SignupFormInitialStep';
import PasswordSubmitFrom from '../PasswordSubmitFrom/PasswordSubmitFrom';

const SignupForm: React.FC = () => {
	const [step, setStep] = useState(1);

	const handleNextStep = () => {
		setStep(2);
	};

	return (
		<>
			{step === 1 && <SignupFormInitialStep onNextStep={handleNextStep} />}
			{step === 2 && <PasswordSubmitFrom />}
		</>
	);
};

export default SignupForm;
