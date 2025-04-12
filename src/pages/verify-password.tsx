import React, { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { Box, Button, Grid, styled, Typography } from '@mui/material';
import AuthLayout from '@/components/auth/AuthLayout';
import { SettingContext } from '@/services/servers/context/setting-context';
import { useMutation } from '@tanstack/react-query';
import { forgotPassword, forgotVerify } from '@/services/servers/api/api.auth';
import OTPInput from 'react-otp-input';

const RightPanel = styled(Grid)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  '& form': {
    borderTop: '1px solid rgba(228, 228, 231, 1)',
  },
}));
const ChangePasswordCard = styled('div')(({ theme }) => ({
  maxWidth: 475,
  width: '80%',
  textAlign: 'center',
  '& form': {
    '& .MuiGrid-root.MuiGrid-item': { textAlign: 'start' },
    '& .MuiFormLabel-root': {
      fontSize: '1rem',
      lineHeight: '100%',
      fontWeight: '500',
    },
  },
}));
const ErrorText = styled(Box)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: theme.typography.body2.fontSize,
  marginTop: theme.spacing(0.5),
  textAlign: 'left',
}));

const StyledOTPInput = styled(OTPInput)({
  display: 'flex',
  justifyContent: 'center',
});

const StyledInput = styled('input')<{ $isFilled?: boolean }>(
  ({ theme, $isFilled }) => ({
    width: '88px !important',
    height: '88px !important',
    borderRadius: '8px',
    border: $isFilled
      ? `1px solid transparent !important`
      : `1px solid ${theme.palette.grey[300]} !important`,
    outline: $isFilled
      ? `1px solid ${theme.palette.info.main} !important`
      : 'none',
    fontSize: '24px',
    fontWeight: 600,
    textAlign: 'center',
    color: theme.palette.info.main,
    backgroundColor: theme.palette.background.paper,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:focus': {
      outline: `2px solid ${theme.palette.info.main} !important`,
      borderColor: 'transparent !important',
    },
    '&::placeholder': {
      color: theme.palette.grey[400],
    },
  }),
);

const CodeVerification = () => {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const { email } = React.useContext(SettingContext);

  const { mutate: verifyMutation, isPending } = useMutation({
    mutationFn: async (payload: { email: string; code: string }) => {
      const response = await forgotVerify({
        email: payload.email,
        code: payload.code,
      });
      return response;
    },
    onSuccess: (response) => {
      Cookies.set('token', response.authorisation.token);

      toast.success('Request completed successfully');
      router.push('/create-forget-password');
    },
  });
  const OTP_LENGTH = 5;
  const isVerifyDisabled = otp.length <+ OTP_LENGTH || isPending;

  const handleCancel = () => {
    router.back();
  };

  const handleVerify = () => {
    console.log("working");
    
    if (!email) {
      toast.error('Email not found. Please go back and re-register.');
      return;
    }
    verifyMutation({ email, code: otp });
  };

  const resendRequest = async () => {
    try {
      const response = await forgotPassword({ email: email });
      console.log({ response });

      if (response.status) {
        toast.success('Verification code has been sent to your email');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const renderInput = (inputProps: any, index: number) => {
    const isFilled = index < otp.length;
    return (
      <StyledInput
        {...inputProps}
        $isFilled={isFilled}
        aria-label={`Verification code digit ${index + 1}`}
      />
    );
  };

  return (
    <AuthLayout title="ForgetPassword">
      <RightPanel item xs={12} tablet={6}>
        <ChangePasswordCard>
          <Typography variant="h2">Forgot your password?</Typography>
          <Typography
            variant="h5"
            color="black.dark"
            mb={8}
            mt={4}
            fontWeight="500"
          >
            Now you can reset your password
          </Typography>

          <form>
            <Grid
              container
              spacing={3}
              flexDirection="column"
              alignItems="center"
            >
              <Typography variant="h5" color="black.dark" mt={8}>
                Please check your email.
              </Typography>
              <Typography
                variant="h6"
                color="black.dark"
                mb={8}
                fontWeight="400"
              >
                We’ve sent a code to {email}
              </Typography>

              <StyledOTPInput
                 value={otp}
                 onChange={setOtp}
                 numInputs={OTP_LENGTH} 
                 renderInput={renderInput}
                 inputType="number"
                 shouldAutoFocus
                 containerStyle={{ gap: '9px', justifyContent: 'center' }}
              />

              <Typography
                variant="body1"
                color="black.dark"
                mt={8}
                mb={12}
                fontWeight="400"
              >
                Didn’t get a code?
                <Button
                  variant="text"
                  color="info"
                  sx={{
                    textTransform: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '400',
                    textDecoration: 'underline',
                    paddingLeft: 0,
                  }}
                  onClick={resendRequest}
                >
                  Click to resend.
                </Button>
              </Typography>
            </Grid>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '8px',
              }}
            >
              <Button
                variant="outlined"
                color="secondary"
                sx={{
                  fontWeight: '700',
                  fontSize: '1.125rem',
                  color: 'rgba(63, 63, 70, 1)',
                  textTransform: 'none',
                  width: '50%',
                  height: '56px',
                  borderRadius: '10px',
                }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  fontWeight: '700',
                  fontSize: '1.125rem',
                  width: '50%',
                  height: '56px',
                  borderRadius: '10px',
                  background: isVerifyDisabled
                    ? '#c6daee'
                    : 'linear-gradient(89.46deg, #4283C6 -45.88%, #204060 100%)',
                  '&:hover': {
                    background: isVerifyDisabled
                      ? '#c6daee'
                      : 'linear-gradient(89.46deg, #3874AD -45.88%, #1A3452 100%)',
                  },
                  '&.Mui-disabled': {
                    bgcolor: '#c6daee',
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
                disabled={isVerifyDisabled}
                onClick={handleVerify}
              >
                Continue
              </Button>
            </Box>
          </form>
        </ChangePasswordCard>
      </RightPanel>
    </AuthLayout>
  );
};

export default CodeVerification;
