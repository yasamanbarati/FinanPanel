import ChangePassForm from '@/components/auth/forgotPassword/ChangePassForm';
import ForgotForm from '@/components/auth/forgotPassword/ForgotForm';
import ForgotVerify from '@/components/auth/forgotPassword/ForgotVerify';
import SuccessBox from '@/components/auth/forgotPassword/SuccessBox';
import AuthLayout from '@/layout/AuthLayout';
import Head from 'next/head';
import React, { useState } from 'react';
//==================================//
export default function ForgetPage() {
  const [step, setStep] = useState<ForgetStep>('forget');
  const changeStep = (value: ForgetStep) => setStep(value);
  //
  const commponents = {
    forget: <ForgotForm changeStep={changeStep} />,
    verify: <ForgotVerify changeStep={changeStep} />,
    password: <ChangePassForm changeStep={changeStep} />,
    success: <SuccessBox />,
  };
  //
  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <AuthLayout>{commponents[step]}</AuthLayout>
    </>
  );
}
