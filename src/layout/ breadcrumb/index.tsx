import { Breadcrumbs, styled, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
interface Props {
  disabledLink: string;
}
const BreadcrumbsBox = styled(Breadcrumbs)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '4px',
  margin: '0 0 16px',
  '& span': {
    color: theme.palette.black.dark,
  },
}));
const BreadcrumbSection = ({ disabledLink }: Props) => {
  return (
    <>
      <Typography variant="h3" component="h2" mb={2}>
        Contracts
      </Typography>
      <BreadcrumbsBox aria-label="breadcrumb">
        <Typography variant="body1" component="span">
          Contracts
        </Typography>
        <Typography variant="body1" component="span">
          {disabledLink}
        </Typography>
      </BreadcrumbsBox>
    </>
  );
};

export default BreadcrumbSection;
