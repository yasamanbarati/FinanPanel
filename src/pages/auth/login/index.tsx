import { useMemo, useState } from 'react';
import {
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  styled,
  useTheme,
  Box,
} from '@mui/material';
import AuthLayout from '@/components/auth/AuthLayout';
import CustomizeTextField from '@/components/form-field/text-field';
import { useRouter } from 'next/router';

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const ErrorText = styled(Box)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: theme.typography.body2.fontSize,
  marginTop: theme.spacing(0.5),
  textAlign: 'left',
}));

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

const LoginButton = styled(Button)(({ theme }) => ({
  borderRadius: 10,
  padding: theme.spacing(8),
  height: '56px',
  textTransform: 'none',
  fontSize: theme.typography.h5.fontSize,
  fontWeight: 700,
  transition: 'background 0.7s ease',
}));

export default function LoginPage() {
  const theme = useTheme();
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const isFormValid = useMemo(
    () => credentials.email.trim() && credentials.password.trim(),
    [credentials.email, credentials.password],
  );

  const emailError = useMemo(() => {
    if (!touched.email) return false;
    return !validateEmail(credentials.email);
  }, [credentials.email, touched.email]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  const handleBlur = (field: string) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleClick = () => {
    router.push('/auth/forgot-password');
  };

  return (
    <AuthLayout title="Login">
      <RightPanel item xs={12} tablet={6}>
        <LoginCard>
          <Typography variant="h2">Login to your panel</Typography>
          <Typography variant="body1" color="black.dark" mb={4}>
            See what is going on with your business
          </Typography>

          <form>
            <Grid container spacing={3}>
              <CustomizeTextField
                label="Email Address*"
                title="email"
                placeholder="Enter your email address"
                type="email"
                value={credentials.email}
                handleOnChange={handleChange}
                sxStyle={{
                  width: '100%',
                  marginTop: '16px',
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

              <CustomizeTextField
                label="Password*"
                title="password"
                placeholder="Enter your Password"
                type="password"
                value={credentials.password}
                handleOnChange={handleChange}
                sxStyle={{
                  width: '100%',
                  margin: '16px 0 24px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              />
              <Grid item xs={12}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="remember"
                        checked={credentials.remember}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label="Remember me"
                    sx={{
                      color: '#18181B',
                      '& svg': {
                        fill: '#d0d5dd',
                      },
                    }}
                  />
                  <Button
                    variant="text"
                    color="info"
                    sx={{
                      textTransform: 'none',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                    }}
                    onClick={handleClick}
                  >
                    Forgot password
                  </Button>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <LoginButton
                  fullWidth
                  variant="contained"
                  type="submit"
                  disabled={!isFormValid}
                  sx={{
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
                >
                  Log in
                </LoginButton>
              </Grid>
            </Grid>
          </form>
        </LoginCard>
      </RightPanel>
    </AuthLayout>
  );
}
