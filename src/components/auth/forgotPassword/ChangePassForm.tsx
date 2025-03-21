import { Form, Input, useForm } from '@/components/rhf';
import { Button, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { changePassword } from '@/services/servers/api/api.auth';
//=======================================//
export default function ChangePassForm({
  changeStep,
}: {
  changeStep: (value: ForgetStep) => void;
}) {
  //
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  //

  const { handleSubmit } = methods;

  const { mutate, isPending } = useMutation({
    mutationFn: changePassword,
  });

  const submit = (values: any) => {
    mutate(values, {
      onSuccess: (data) => {
        if (data?.status == true) {
          changeStep('success');
          localStorage.setItem('token', data?.authorisation?.token);
          // router.push(PATH.forgotSuccess);
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
      <Typography variant="h5" color={'#18181B'} mt={1} mb={3}>
        Create New Password
      </Typography>
      <Form {...methods}>
        <Input
          name="password"
          label="New Password*"
          placeholder="Enter new password"
          required
        />
        <Input
          name="re_password"
          label="Confirm New Password*"
          placeholder="Confirm new password"
          required
        />
        <Stack direction={'row'} spacing={1}>
          <Button
            variant="outlined"
            onClick={() => changeStep('forget')}
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
const schema = Yup.object().shape({
  password: Yup.string()
    .required()
    .min(8, 'password must have at least 8 characters'),
  re_password: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords must match',
  ),
});
