import React from 'react';
import { Button, Divider, Stack, Typography } from '@mui/material';
import { Form, Input, useForm } from '@/components/rhf';
import { useMutation } from '@tanstack/react-query';
import { forgotPassword } from '@/services/servers/api/api.auth';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSetting } from '@/services/servers/hook/useSetting';
import { useRouter } from 'next/navigation';
import { PATH } from '@/services/utils/constant';
//==================================//
export default function ForgotForm({
  changeStep,
}: {
  changeStep: (value: ForgetStep) => void;
}) {
  const { setSetting } = useSetting();
  const router = useRouter();
  //
  const methods = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        email: Yup.string().required().email(),
      }),
    ),
  });
  const { handleSubmit } = methods;

  const { mutate, isPending } = useMutation({
    mutationFn: forgotPassword,
  });

  const submit = (values: any) => {
    mutate(values, {
      onSuccess: (data, info) => {
        if (data?.status == true) {
          changeStep('verify');
          setSetting('email', info?.email);
        }
      },
    });
  };

  return (
    <Stack justifyContent={'center'} textAlign={'center'}>
      <Typography variant="h3" color={'#18181B'}>
        Forgot your password?
      </Typography>
      <Typography color={'#3F3F46'} mt={1}>
        Now you can reset your password.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography color={'#3F3F46'} mt={1} mb={4}>
        Please enter your email address and we will send an OTP code
        <br /> in the next step to reset your password.
      </Typography>
      <Form {...methods}>
        <Input
          name="email"
          label="Email Address *"
          placeholder="Enter your email address"
          required
        />
        <Stack direction={'row'} spacing={1}>
          <Button
            variant="outlined"
            onClick={() => router.push(PATH.singIn)}
            fullWidth
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit(submit)}
            // isLoading={isPending}
            fullWidth
          >
            Continue
          </Button>
        </Stack>
      </Form>
    </Stack>
  );
}
