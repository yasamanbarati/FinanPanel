import React, { ReactNode } from 'react';
import { CircularProgress, Button, ButtonProps } from '@mui/material';

interface Props {
  isLoading?: Boolean;
}

//===============================//
export function MButton({
  isLoading,
  children,
  ...other
}: ButtonProps & Props) {
  return (
    <Button disabled={Boolean(isLoading)} {...other}>
      {children}
      {isLoading && (
        <CircularProgress sx={{ ml: 1 }} size={20} color="inherit" />
      )}
    </Button>
  );
}
