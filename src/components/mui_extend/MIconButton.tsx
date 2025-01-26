import React from 'react';
import { CircularProgress, IconButtonProps, IconButton } from '@mui/material';

interface Props {
  isLoading?: Boolean;
}

//===============================//
export function MIconButton({
  children,
  isLoading,
  ...other
}: IconButtonProps & Props) {
  return (
    <IconButton disabled={Boolean(isLoading)} {...other}>
      {isLoading ? (
        <CircularProgress sx={{ ml: 1 }} size={20} color="inherit" />
      ) : (
        children
      )}
    </IconButton>
  );
}
