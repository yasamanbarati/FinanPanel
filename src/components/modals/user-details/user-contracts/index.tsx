import React from 'react';
import { Avatar, Box, Chip, Grid, styled, Typography } from '@mui/material';
import { UserContractProps } from '@/services/servers/type';

interface Props {
  data: UserContractProps[];
  statusLabels: string[];
}

const UserContracts = ({ data, statusLabels }: Props) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setIsScrolled(e.currentTarget.scrollTop > 5);
  };
  const getStatusColor = (status: number) => {
    const statusColors = ['success', 'warning', 'error'];
    return statusColors[status] || 'error';
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={8}
      overflow="auto"
      onScroll={handleScroll}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #e1e1e1',
          paddingBottom: '8px',
          width: '100%',
        }}
      >
        <Typography variant="h6" fontWeight={500} mb={2}>
          Contracts ({data.length})
        </Typography>
        <Typography
          variant="body2"
          component="a"
          sx={{ marginRight: 6, textDecoration: 'underline' }}
          color="primary"
        >
          View All
        </Typography>
      </Box>
      {data.map((item) => (
        <>
          <Box
            display="flex"
            flexDirection="column"
            gap="24px"
            sx={{
              borderBottom: '1px solid #e1e1e1',
              paddingBottom: '16px',
            }}
          >
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  whiteSpace: 'nowrap',
                  '& span': {
                    fontWeight: '400',
                  },
                }}
              >
                <span>Invoice</span> {item.invoice}
              </Typography>
              <Typography
                variant="body2"
                component="a"
                sx={{ marginRight: 6, textDecoration: 'underline' }}
                color="primary"
              >
                Invoice Details
              </Typography>
            </Box>
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar src={item.imageSrc} sx={{ width: 40, height: 40 }} />
                <Box>
                  <Typography variant="h6" sx={{ whiteSpace: 'nowrap' }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight={400}
                  >
                    {item.time} Month
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Chip
                  variant="outlined"
                  color={getStatusColor(item.status) as any}
                  label={statusLabels[item.status] || 'Unknown'}
                  sx={{
                    '& .MuiChip-label': {
                      color: 'rgba(95, 95, 95, 1)',
                      fontSize: '0.75rem', //12
                      fontWeight: '600',
                      padding: 0,
                    },
                  }}
                />
              </Box>
            </Box>
            <Grid container xs={12} rowSpacing={12}>
              <Grid item xs={3}>
                <Typography
                  variant="body2"
                  sx={{ color: '#667085', fontWeight: '400' }}
                >
                  Amount
                </Typography>
                <Typography variant="body2" mt={4}>
                  {item.amount}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  variant="body2"
                  sx={{ color: '#667085', fontWeight: '400' }}
                >
                  Profit Amount
                </Typography>
                <Typography variant="body2" mt={4}>
                  {item.profitAmount}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  variant="body2"
                  sx={{ color: '#667085', fontWeight: '400' }}
                >
                  Start Date
                </Typography>
                <Typography variant="body2" mt={4}>
                  {item.startDate}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  variant="body2"
                  sx={{ color: '#667085', fontWeight: '400' }}
                >
                  End Date
                </Typography>
                <Typography variant="body2" mt={4}>
                  {item.endDate}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  variant="body2"
                  sx={{ color: '#667085', fontWeight: '400' }}
                >
                  Profit
                </Typography>
                <Typography variant="body2" mt={4}>
                  {item.profit}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  variant="body2"
                  sx={{ color: '#667085', fontWeight: '400' }}
                >
                  Time to Withdraw
                </Typography>
                <Typography variant="body2" mt={4}>
                  1st Each Month
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </>
      ))}
    </Box>
  );
};

export default UserContracts;
