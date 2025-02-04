import React from 'react';
import { Button, Chip, Grid, styled, Typography } from '@mui/material';
import Image from 'next/image';

interface Props {
  contractList: {
    status: number; //0 or 1
    ImageSrc: string;
    title: string;
    time: number;
    minimumAmount: number;
    monthlyProfit: number;
    dropDown: number;
    risk: number;
    limitContrcts: number;
    activeContracts: number;
  };
}

const CustomizeCard = styled(Grid)(({ theme }) => ({
  minHeight: '336px',
  padding: '24px 32px 24px 32px',
  gap: '8px',
  borderRadius: '16px',
  boxShadow: '0px 4px 20px 0px #0000000D',
  background: '#FFFFFF',
  justifyContent: 'space-between',
  [theme.breakpoints.up('xl')]: {
    flexBasis: '48%',
    maxWidth: '48%',
  },
  '& .MuiGrid-item.MuiGrid-grid-xs-4': {
    padding: '32px 32px 32px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    borderRight: `1px solid #E1E1E1`,
    '& .MuiChip-root': {
      position: 'absolute',
      top: '-8px',
      left: '-16px',
    },
  },
  '& .MuiGrid-item.MuiGrid-grid-xs-7': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& ul': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1px',
      '& li': {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        '& span:first-child': {
          color: theme.palette.neutral.dark,
          fontSize: '0.86rem',
          lineHeight: '40px',
          fontWeight: '400',
        },
        '& span:last-child': {
          fontSize: '1rem',
          lineHeight: '40px',
          fontWeight: '500',
        },
        '&::before': {
          position: 'absolute',
          content: `''`,
          width: '6px',
          height: '6px',
          left: '-19px',
          top: '17px',
          borderRadius: '50%',
          background: theme.palette.neutral.dark,
        },
      },
    },
  },
}));
const CustomizeDiv = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '8px',
  '& button': {
    borderRadius: '8px',
  },
}));
const ContractListCard = ({ contractList }: Props) => {
  return (
    <CustomizeCard item container xs={12} xl={6}>
      <Grid item xs={4} flexDirection="column">
        <Chip
          variant="outlined"
          color={contractList.status ? 'success' : 'error'}
          label={contractList.status ? 'Active' : 'Deactive'}
        />
        <Image
          src={contractList.ImageSrc}
          alt={contractList.title}
          width={105}
          height={104}
        />
        <Typography component="h3" variant="h3" mt={16}>
          {contractList.title}
        </Typography>
        <Typography component="h3" variant="h3">
          {contractList.time}
          <Typography component="span" variant="h4">
            Month
          </Typography>
        </Typography>
      </Grid>
      <Grid item xs={7} gap={8}>
        <ul>
          <li>
            <span>Minimum Amount:</span>
            <span>${contractList.minimumAmount.toFixed(2)}</span>
          </li>
          <li>
            <span>Monthly Profit:</span>
            <span>+{contractList.monthlyProfit}%</span>
          </li>
          <li>
            <span>Drop down:</span>
            <span>{contractList.dropDown}%</span>
          </li>
          <li>
            <span>Risk:</span>
            <span>{contractList.risk}%</span>
          </li>
          <li>
            <span>Limit of Contracts:</span>
            <span>{contractList.limitContrcts}</span>
          </li>
          <li>
            <span>Active Contracts:</span>
            <span>{contractList.activeContracts}</span>
          </li>
        </ul>
        <CustomizeDiv>
          <Button variant="contained" color="primary">
            Edit
          </Button>
          <Button variant="outlined" color="secondary">
            Deactive
          </Button>
        </CustomizeDiv>
      </Grid>
    </CustomizeCard>
  );
};

export default ContractListCard;
