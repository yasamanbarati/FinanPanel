import React from 'react';
import {
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material';
import { Form, Input, useForm } from '@/components/rhf';

import { PATH } from '@/services/utils/constant';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from '@/services/servers/api/api.auth';
import { useMutation } from '@tanstack/react-query';
import { Link } from '@/components/common';
import { MButton } from '@/components/mui_extend';
//==================================//
export default function Login() {
  //
  const methods = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        email: Yup.string().required().email(),
        password: Yup.string()
          .required()
          .min(8, 'password must have at least 8 characters'),
      }),
    ),
  });

  const { handleSubmit } = methods;

  const { mutate, isPending } = useMutation({
    mutationFn: login,
  });

  const submit = ({ email, password }: { email: string; password: string }) => {
    mutate({ email, password });
  };

  return (
    <Stack justifyContent={'center'} textAlign={'center'}>
      <Typography variant="h3" color={'#18181B'}>
        Login to your panel
      </Typography>
      <Typography color={'#3F3F46'}>
        See what is going on with your business
      </Typography>
      <Divider sx={{ mt: 2, mb: 6 }} />
      <Form {...methods}>
        <Input
          name="email"
          label="Email Address *"
          placeholder="Enter your email address"
          required
        />
        <Input
          name="password"
          label="Password *"
          placeholder="Enter your password"
          type="password"
        />
        <Stack direction={'row'} py={2} alignItems={'center'}>
          <FormControlLabel label={'Remember me'} control={<Checkbox />} />
          <Link variant="subtitle1" href={PATH.forgotPassword} ml={'auto'}>
            Forgot password
          </Link>
        </Stack>
        <MButton
          variant="contained"
          onClick={handleSubmit(submit)}
          isLoading={isPending}
        >
          Log in
        </MButton>
      </Form>
    </Stack>
  );
}
