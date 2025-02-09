import React from 'react';
import Image from 'next/image';
import { Chip, styled, Typography } from '@mui/material';
import { ContractListType } from '@/services/servers/type';
import BasicModal from '..';
import { Close } from '@mui/icons-material';
import ContractForm from './contrant-from';

interface Props {
  open: boolean;
  onClose: () => void;
  card?: ContractListType; // `card` is optional
}

const CustomizeHeaderDiv = styled('div')(({ theme }) => ({
  width: '100%',
  height: '64px',
  padding: '0px 16px 16px 16px',
  borderBottom: `1px solid ${theme.palette.borderBG}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  '& svg': {
    fill: theme.palette.black.main,
  },
}));

const CustomizeHeaderContentDiv = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '8px',
}));

const EditModal = ({ open, card, onClose }: Props) => {
  // If `card` is undefined, return null or a fallback UI
  if (!card) {
    return null; // or return a loading spinner or a message like "No data available"
  }

  return (
    <BasicModal
      open={open}
      onClose={onClose}
      sxStyle={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '24px 0',
        width: '90%',
        maxWidth: '786px',
      }}
    >
      <CustomizeHeaderDiv>
        <CustomizeHeaderContentDiv>
          <Image
            src={card.ImageSrc} // Safe to access because `card` is checked
            alt={card.title}
            width={40}
            height={40}
            objectFit="cover"
          />
          <div>
            <Typography
              component="h4"
              variant="body1"
              display="flex"
              alignItems="baseline"
              gap="16px"
            >
              Edit {card.title} Contract
              <Chip
                variant="outlined"
                color={card.status ? 'success' : 'error'}
                label={card.status ? 'Active' : 'Deactive'}
                sx={{ flexDirection: 'column' }}
              />
            </Typography>
            <Typography component="h6" variant="h6" color="secondary">
              Please update the details of the harbour below and click{' '}
              {'Update'}
              to apply the changes.
            </Typography>
          </div>
        </CustomizeHeaderContentDiv>
        <Close width="14px" height="14px" color="inherit" onClick={onClose} />
      </CustomizeHeaderDiv>

      <ContractForm card={card} handelOnClose={onClose} />
    </BasicModal>
  );
};

export default EditModal;
