import React, { ReactNode } from 'react';
import { CircularProgress, Button, ButtonProps } from '@mui/material';

interface Props {
  isLoading?: Boolean;
  disabled?: Boolean;
}

//===============================//
export function C_Button(props: ButtonProps & Props) {
  return (
    <Button disabled={Boolean(props?.isLoading)} {...props}>
      {props?.children}
      {props?.isLoading && (
        <CircularProgress sx={{ ml: 1 }} size={20} color="inherit" />
      )}
    </Button>
  );
}
