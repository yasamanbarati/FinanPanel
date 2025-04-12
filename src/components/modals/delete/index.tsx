import React from 'react';
import Image from 'next/image';
import { Button, styled, Typography } from '@mui/material';
import BasicModal from '..';
import { TrashIcon } from '@/components/icons';

interface Props {
  open: boolean;
  ImageSrc?: string;
  title: string;
  description?: string | undefined;
  onClose: () => void; // اضافه شده
}

const CustomizeDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
}));
const CustomizeImageDiv = styled('div', {
  shouldForwardProp: (prop) => prop !== 'hasImage',
})<{ hasImage: boolean }>(({ theme, hasImage }) => ({
  position: 'relative',
  ...(!hasImage && {
    display: 'flex',
    width: '100%',
    height: '70px',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  '& > div': {
    position: 'absolute',
    width: '64px',
    height: '64px',
    borderRadius: '24px',
    background: '#fbfbfb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...(hasImage
      ? {
          top: '72px',
          right: '-12px',
        }
      : {
          position: 'relative',
          top: 0,
          right: 0,
        }),
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
const DeleteModal = ({
  open,
  ImageSrc,
  title,
  description,
  onClose,
}: Props) => {
  const defaultDescription = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna.
  `;

  return (
    <BasicModal
      open={open}
      onClose={onClose}
      sxStyle={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        alignItems: 'center',
        padding: '40px',
        width: '90%',
        maxWidth: '557px',
      }}
    >
      <CustomizeImageDiv hasImage={!!ImageSrc}>
        <div>
          <TrashIcon />
        </div>
        {ImageSrc && (
          <Image
            src={ImageSrc}
            alt={title}
            width={105}
            height={104}
            style={{ objectFit: 'cover' }}
          />
        )}
      </CustomizeImageDiv>
      <CustomizeDiv>
        <Typography
          variant="h4"
          component="h3"
          color="black.main"
          textAlign="center"
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          component="p"
          color="black.contrastText"
          textAlign="center"
        >
          {description || defaultDescription}
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
