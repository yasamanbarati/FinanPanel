import { CircularProgress, styled } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Container = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(296.82deg, #1B105F 0%, #3821C5 100%);',
});

const StyledLoading = styled(CircularProgress)(({ theme }) => ({
  color: '#fff',
  marginTop: '16px',
}));

export const LoadingPage = () => {
  return (
    <Container>
      <Image
        src="/static/images/Logo1.png"
        alt="logo"
        width={250}
        height={50}
      />
      <StyledLoading size={40} /> :
    </Container>
  );
};
