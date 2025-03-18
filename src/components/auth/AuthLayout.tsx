import Head from 'next/head';
import { ReactNode } from 'react';
import { Grid, Button, styled } from '@mui/material';
import Image from 'next/image';

type AuthLayoutProps = {
  title: string;
  children: ReactNode;
};

const LeftPanel = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: `linear-gradient(296.82deg, #1B105F 0%, #3821C5 100%)`,
  height: '100vh',
  maxWidth: '818px',
  [theme.breakpoints.down(1260)]: {
    padding: '55px 16px',
    '& .MuiGrid-root': {
      justifyContent: 'space-evenly',
      '& img': {
        width: '245px',
        height: '50px',
      },
    },
    '& .admin-image': {
      width: '430px',
      height: '380px',
    },
  },
  [theme.breakpoints.down('md')]: {
    '& .admin-image': {
      width: '380px',
      height: '320px',
    },
  },
  [theme.breakpoints.down('tablet')]: {
    display: 'none',
  },
}));

const CustomizeButton = styled(Button)(({ theme }) => ({
  width: '134px',
  height: '40px',
  padding: '14px 18px',
  borderRadius: '8px',
  borderColor: '1px solid #d0d5dd',
  fontSize: '0.875rem',
  fontWeight: '400',
  lineHeight: '48px',
  '&:hover': {
    backgroundColor: 'rgba(251, 133, 0, 1)',
    color: theme.palette.neutral.main,
  },
}));

const AuthLayout = ({ title, children }: AuthLayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title} | Financial Panel</title>
        <meta name="description" content="Financial Management Panel" />
      </Head>
      <Grid container>
        <LeftPanel item xs={12} tablet={6} padding={{ xl: '88px 31px' }}>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            gap='16px'
            padding={{ tablet: '0 12px', xl: '0 29px' }}
          >
            <Image
              alt="Logo"
              src={'/static/images/Logo1.png'}
              width={328}
              height={72}
            />
            <CustomizeButton
              variant="outlined"
              color="neutral"
              disableFocusRipple
              disableRipple
            >
              Visit Website
            </CustomizeButton>
          </Grid>
          <Image
            alt="login admin dashboard"
            src="/static/images/Ñëîé 1.png"
            width={656}
            height={545}
            className="admin-image"
          />
        </LeftPanel>
        {children}
      </Grid>
    </div>
  );
};

export default AuthLayout;
