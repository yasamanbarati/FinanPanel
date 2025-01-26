import {
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { Icon } from './Icon';
import Image from 'next/image';
import { MButton } from '../mui_extend';

interface PropsType {
  open: boolean;
  onDelete: () => void;
  onClose: () => void;
  isLoading: boolean;
}

//====================================================================//
export function DeleteDialog({
  open,
  onClose,
  onDelete,
  isLoading,
}: PropsType) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent>
        <Stack alignItems={'center'}>
          <IconButton onClick={onClose} sx={{ ml: 'auto' }}>
            <Icon icon="close" />
          </IconButton>
          <Image
            src="/static/images/danger.svg"
            width={120}
            height={120}
            alt="image"
          />
          <Typography variant="h5" gutterBottom>
            Do you want it removed?
          </Typography>
          <Typography variant="caption" color="#9CA3AF" mb={2}>
            If the data is deleted, it cannot be recovered
          </Typography>
          <MButton
            variant="contained"
            color="error"
            isLoading={isLoading}
            onClick={onDelete}
          >
            Delete
          </MButton>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
