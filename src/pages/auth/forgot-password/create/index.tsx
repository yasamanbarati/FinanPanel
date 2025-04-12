import { useMemo, useState } from 'react';
import { Grid, Typography, Button, styled, Box } from '@mui/material';
import CustomizeTextField from '@/components/form-field/text-field';
import { useRouter } from 'next/router';
import AuthLayout from '@/components/auth/AuthLayout';

const RightPanel = styled(Grid)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
}));

const LoginCard = styled('div')(({ theme }) => ({
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

const CreateNewPassword = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    password: '',
    confirmPassword: '',
  });
  const [touched, setTouched] = useState({
    password: false,
    confirmPassword: false,
  });

  const passwordError = useMemo(() => {
    if (!touched.password) return false;
    return credentials.password.length < 8;
  }, [credentials.password, touched.password]);

  const confirmError = useMemo(() => {
    if (!touched.confirmPassword) return false;
    return credentials.password !== credentials.confirmPassword;
  }, [credentials, touched.confirmPassword]);

  const isFormValid = useMemo(
    () =>
      credentials.password.length >= 8 &&
      credentials.password === credentials.confirmPassword,
    [credentials],
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      router.push('/auth/login');
    }
  };

  return (
    <AuthLayout title="Create New Password">
      <RightPanel item xs={12} tablet={6}>
        <LoginCard>
          <Typography variant="h2">Create New Password</Typography>
          <Typography variant="body1" color="black.dark" mb={4}>
            Your new password must be different from previous used passwords
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <CustomizeTextField
                label="New Password*"
                title="password"
                placeholder="Enter new password"
                type="password"
                value={credentials.password}
                handleOnChange={handleChange}
                onBlur={handleBlur('password')}
                sxStyle={{
                  width: '100%',
                  margin: '16px 0 8px 0',
                }}
              />
              <CustomizeTextField
                label="Confirm New Password*"
                title="confirmPassword"
                placeholder="Confirm new password"
                type="password"
                value={credentials.confirmPassword}
                handleOnChange={handleChange}
                onBlur={handleBlur('confirmPassword')}
                error={confirmError}
                sxStyle={{
                  width: '100%',
                  margin: '16px 0 8px 0',
                }}
              />
              {confirmError ? (
                <Grid item xs={12}>
                  <ErrorText>
                    The password confirmation doesn’t match the password
                  </ErrorText>
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    component="span"
                    fontWeight="400"
                    paddingLeft="6px"
                  >
                    Must be at least 8 characters
                  </Typography>
                </Grid>
              )}

              <Grid item xs={12}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 2,
                    mt: 4,
                  }}
                >
                  <Button
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.125rem',
                      height: 56,
                      borderRadius: '10px',
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={!isFormValid}
                    fullWidth
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.125rem',
                      height: 56,
                      borderRadius: '10px',
                      background: isFormValid
                        ? 'linear-gradient(89.46deg, #4283C6 -45.88%, #204060 100%)'
                        : '#c6daee',
                      '&:hover': {
                        background: isFormValid
                          ? 'linear-gradient(89.46deg, #3874AD -45.88%, #1A3452 100%)'
                          : '#c6daee',
                      },
                    }}
                  >
                    Continue
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </LoginCard>
      </RightPanel>
    </AuthLayout>
  );
};

export default CreateNewPassword;
