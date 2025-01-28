import { forgotVerify } from '@/services/servers/api/api.auth';
import { Link, OTPInput } from '@/components/common';
import { MButton } from '@/components/mui_extend';
import { useSetting } from '@/services/servers/hook/useSetting';
import { PATH } from '@/services/utils/constant';
import { Divider, Stack, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import React, { useState } from 'react';

export default function ForgotVerify({
  changeStep,
}: {
  changeStep: (value: ForgetStep) => void;
}) {
  //
  const [code, setCode] = useState('');
  const { email } = useSetting();
  //
  const { mutate, isPending } = useMutation({
    mutationFn: forgotVerify,
  });

  const submit = () => {
    mutate(
      { code, email },
      {
        onSuccess: (data) => {
          if (data?.status == true) {
            changeStep('password');
            localStorage.setItem('token', data?.authorisation.token);
          }
        },
      },
    );
  };

  return (
    <Stack justifyContent={'center'} textAlign={'center'}>
      <Typography variant="h3" color={'#18181B'}>
        Forgot your password?
      </Typography>
      <Typography color={'#3F3F46'}>Please check your email.</Typography>
      <Divider sx={{ my: 2 }} />
      <Stack alignItems={'center'} py={1.5}>
        <Image
          src={'/static/icons/Email_icon.png'}
          width={72}
          height={72}
          alt="icon"
        />
        <Typography color={'#18181B'} variant="subtitle1" mt={1.5}>
          Please check your email.
        </Typography>
        <Typography color={'#3F3F46'} mb={2}>
          We’ve sent a code to
          {email}
        </Typography>
        <OTPInput numInputs={5} value={code} onChange={setCode} />
      </Stack>
      <Typography
        my={1.5}
        sx={{
          color: '#344054',
        }}
      >
        Didn’t get a code?
        <Link color={'#6941C6'} href={PATH.signUp} fontWeight={600} ml={0.5}>
          Click to resend.
        </Link>
      </Typography>
      <Stack direction={'row'} spacing={1}>
        <MButton
          variant="outlined"
          onClick={() => changeStep('forget')}
          fullWidth
        >
          Cancel
        </MButton>
        <MButton
          variant="contained"
          onClick={submit}
          isLoading={isPending}
          fullWidth
        >
          Verify
        </MButton>
      </Stack>
    </Stack>
  );
}
