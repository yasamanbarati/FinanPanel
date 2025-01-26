import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
//==================================//
export default function SuccessBox() {
  return (
    <Stack
      alignItems={'center'}
      textAlign={'center'}
      pt={4}
      px={2}
      minHeight={400}
    >
      <Image
        src={'/static/images/success.svg'}
        width={100}
        height={100}
        alt="icon"
        style={{ width: '100%', transform: 'scale(3)' }}
      />
      <Typography variant="h4" color={'#18181B'} mt={20}>
        Successful!
      </Typography>
      <Typography color={'#3F3F46'} mt={0.5}>
        Your password changed
        <br /> and you will be directed to the login page
      </Typography>
    </Stack>
  );
}
