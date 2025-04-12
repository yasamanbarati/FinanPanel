import { formatDate } from '@/services/utils/time';
import { Grid, Typography } from '@mui/material';
import React from 'react';

interface Props {
  Data: {
    email: string;
    registerDate: string;
    lastLogin: string;
    phone: string;
    wallet: string;
    walletBalance: number;
    activeContracts: number;
    completeContracts: number;
  };
}

const UserOverView = ({ Data }: Props) => {
  return (
    <>
      <Grid container spacing={3}>
        <Typography
          variant="h6"
          component="h6"
          sx={{ borderBottom: '1px solid #e1e1e1', width: '100%' }}
        >
          User Information:
        </Typography>
        <Grid container spacing={3} gap={10} mt={8}>
          <Grid item container xs={12} alignItems="center">
            <Grid item xs={4} display="flex" flexDirection="column" gap={4}>
              <Typography
                variant="body2"
                sx={{ color: '#667085', fontWeight: '400' }}
              >
                Email Address
              </Typography>
              <Typography variant="body2">{Data.email}</Typography>
            </Grid>
            <Grid item xs={4} display="flex" flexDirection="column" gap={4}>
              <Typography
                variant="body2"
                sx={{ color: '#667085', fontWeight: '400' }}
              >
                Register Date
              </Typography>
              <Typography variant="body2">{formatDate(Data.registerDate)}</Typography>
            </Grid>
            <Grid item xs={4} display="flex" flexDirection="column" gap={4}>
              <Typography
                variant="body2"
                sx={{ color: '#667085', fontWeight: '400' }}
              >
                Last Login
              </Typography>
              <Typography variant="body2">{formatDate(Data.lastLogin)}</Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12} alignItems="center">
            <Grid item xs={4} display="flex" flexDirection="column" gap={4}>
              <Typography
                variant="body2"
                sx={{ color: '#667085', fontWeight: '400' }}
              >
                Phone Number
              </Typography>
              <Typography variant="body2">{Data.phone}</Typography>
            </Grid>
            <Grid item xs={8} display="flex" flexDirection="column" gap={4}>
              <Typography
                variant="body2"
                sx={{ color: '#667085', fontWeight: '400' }}
              >
                Wallet Address
              </Typography>
              <Typography variant="body2">{Data.wallet}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Typography
          variant="h6"
          fontWeight={600}
          mb={2}
          sx={{
            borderBottom: '1px solid #e1e1e1',
            paddingBottom: '8px',
            width: '100%',
          }}
        >
          Contracts Status (12)
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Typography
              variant="body2"
              sx={{ color: '#667085', fontWeight: '400', margin: '8px 0' }}
            >
              Wallet Balance
            </Typography>
            <Typography variant="body2">{Data.walletBalance}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="body2"
              sx={{ color: '#667085', fontWeight: '400', margin: '8px 0' }}
            >
              Active Contracts
            </Typography>
            <Typography variant="body2">{Data.activeContracts}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="body2"
              sx={{ color: '#667085', fontWeight: '400', margin: '8px 0' }}
            >
              Complete Contract
            </Typography>
            <Typography variant="body2">{Data.completeContracts}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UserOverView;
