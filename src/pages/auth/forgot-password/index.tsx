import React, { useMemo, useState } from 'react';
import { Box, Button, Grid, styled, Typography } from '@mui/material';
import AuthLayout from '@/components/auth/AuthLayout';
import CustomizeTextField from '@/components/form-field/text-field';
import { useRouter } from 'next/router';

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

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

const ForgetPassword = () => {
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    email: '',
  });
  const [touched, setTouched] = useState({
    email: false,
  });

  const emailError = useMemo(() => {
    if (!touched.email) return false;
    return !validateEmail(credentials.email);
  }, [credentials.email, touched.email]);

  const isFormValid = useMemo(
    () => validateEmail(credentials.email),
    [credentials.email],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (field: string) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };
  const handleClick = () => {
    router.push('/auth/forgot-password/create-new');
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
            <Grid container spacing={3}>
              <Typography
                variant="body1"
                color="black.dark"
                my={8}
                fontWeight="400"
              >
                Please enter your email address and we will send an OTP code in
                the next step to reset your password.
              </Typography>
              <CustomizeTextField
                label="Email Address*"
                title="email"
                placeholder="Enter your email address"
                type="email"
                value={credentials.email}
                handleOnChange={handleChange}
                sxStyle={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
                onBlur={handleBlur('email')}
                error={emailError}
              />
              {emailError && (
                <Grid item xs={12}>
                  <ErrorText>
                    This email doesn’t look right. Please try again.
                  </ErrorText>
                </Grid>
              )}
            </Grid>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '8px',
                marginTop: '16px',
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
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                type="submit"
                disabled={!isFormValid}
                sx={{
                  fontWeight: '700',
                  fontSize: '1.125rem',
                  width: '50%',
                  height: '56px',
                  borderRadius: '10px',
                  background: isFormValid
                    ? 'linear-gradient(89.46deg, #4283C6 -45.88%, #204060 100%)'
                    : '#c6daee',
                  '&:hover': {
                    background: isFormValid
                      ? 'linear-gradient(89.46deg, #3874AD -45.88%, #1A3452 100%)'
                      : '#c6daee',
                  },
                  '&.MuiButtonBase-root.Mui-disabled': {
                    backgroundColor: '#c6daee!important',
                    color: 'rgba(255, 255, 255, 1)',
                  },
                }}
                onClick={isFormValid ? handleClick : undefined}
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

export default ForgetPassword;
