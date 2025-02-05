import React, { ReactNode } from 'react';
import { Box, Modal, styled, SxProps } from '@mui/material';

interface Props {
  open: boolean;
  children: ReactNode;
  sxStyle?: SxProps;
  onClose: () => void; // اضافه شده
}

const ContentBox = styled(Box)(({ theme }) => ({
  gap: '8px',
  borderRadius: '16px',
  background: theme.palette.neutral.main,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: '24px',
}));

const BasicModal = ({ children, open, sxStyle, onClose }: Props) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ContentBox sx={sxStyle}>{children}</ContentBox>
    </Modal>
  );
};

export default BasicModal;
