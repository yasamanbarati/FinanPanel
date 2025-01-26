import { OutlinedInput, styled } from '@mui/material';
import React from 'react';
import ReactOTPInput, { OTPInputProps } from 'react-otp-input';

//
const StyleInput = styled(OutlinedInput)(({ theme }) => ({
  width: '88px',
  height: '88px',
  margin: '0 0.25rem',
  fontSize: '40px',
  textAlign: 'center',
  '& input': {
    width: '100%',
    textAlign: 'center',
  },
  [theme?.breakpoints.down('sm')]: {
    fontSize: '28px',
    width: '57px',
    height: '57px',
    margin: '0 0.25rem',
  },
  // margin: '0.5rem 0',
}));
//

interface Props {
  value: string;
  numInputs?: number;
  onChange: (value: string) => void;
}

export function OTPInput(props: Props) {
  return (
    <ReactOTPInput
      {...props}
      inputStyle={{ width: '100%' }}
      renderInput={({ value, type, placeholder, ...inputProps }) => (
        <StyleInput
          value={value}
          inputProps={inputProps}
          type="tel"
          placeholder="0"
        />
      )}
    />
  );
}
