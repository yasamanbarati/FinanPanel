import React from 'react';
import Image from 'next/image';
import { Button, styled, Typography } from '@mui/material';
import BasicModal from '..';
import { TrashIcon } from '@/components/icons';

interface Props {
  open: boolean;
  ImageSrc: string;
  title: string;
  onClose: () => void; // اضافه شده
}

const CustomizeDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
}));
const CustomizeImageDiv = styled('div')(({ theme }) => ({
  position: 'relative',
  '& div': {
    position: 'absolute',
    width: '64px',
    height: '64px',
    borderRadius: '24px',
    background: '#fbfbfb',
    bottom: '-27px',
    right: '-17px',
    '& svg': {
      width: '48px',
      height: '48px',
    },
  },
}));
const CustomizeButtonDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  marginTop: '32px',
  '& button': {
    borderRadius: '8px',
    padding: '8px 52px',
    fontSize: '1rem',
    fontWeight: '500',
    '&:last-child': {
      backgroundColor: theme.palette.error.dark,
      border: 'none',
      color: theme.palette.neutral.main,
    },
  },
}));
const DeleteModal = ({ open, ImageSrc, title, onClose }: Props) => {
  return (
    <BasicModal
      open={open}
      onClose={onClose}
      sxStyle={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        alignItems: 'center',
        padding: '40px',
        width: '90%',
        maxWidth: '557px',
      }}
    >
      <CustomizeImageDiv>
        <div>
          <TrashIcon />
        </div>
        <Image
          src={ImageSrc}
          alt={title}
          width={105}
          height={104}
          objectFit="cover"
        />
      </CustomizeImageDiv>
      <CustomizeDiv>
        <Typography
          variant="h4"
          component="h3"
          color="black.main"
          textAlign="center"
        >
          Delete {title} Contract?
        </Typography>
        <Typography
          variant="body1"
          component="p"
          color="black.contrastText"
          textAlign="center"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </Typography>

        <CustomizeButtonDiv>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained">Delete</Button>
        </CustomizeButtonDiv>
      </CustomizeDiv>
    </BasicModal>
  );
};

export default DeleteModal;
