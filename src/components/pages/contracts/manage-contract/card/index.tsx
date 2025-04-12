import { palette } from '@/setup/theme/palette';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';

interface ManageContractCardProps {
  title: string;
  value: number;
  percent: number;
  status: number; // 0 یا 1
}

const ManageContractCard: React.FC<ManageContractCardProps> = ({
  title,
  percent,
  value,
  status,
}) => {
  return (
    <Box
      sx={{
        padding: { xs: '4px 12px', md: '8px 16px', xl: '16px 24px' },
        borderRadius: '14px',
        background: '#fff',
        minWidth: { xs: '100%', mobileM: '49%', tablet: '100%', lg: '31%' },
        width: 'auto',
        height: { xs: '96px', tabletM: '120px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: `1px solid ${palette.borderBG}9e`,
        gap: '0',
        '& h6': {
          color: palette.black.contrastText,
          fontWeight: '500',
        },
      }}
    >
      <Typography
        variant="h6"
        component="h6"
        fontSize={{ xs: '12px', tabletM: '14px' }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          '& h3': {
            color: palette.black.main,
            lineHeight: { xs: '28px', tabletM: '48px' },
          },
        }}
      >
        <Typography variant="h3" component="h3">
          ${value}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            minWidth: '65px',
            height: '28px',
            borderRadius: '6px',
            border: `1px solid ${palette.borderBG}`,
            justifyContent: 'center',
            paddingRight: '10px',
          }}
        >
          {status ? (
            <ArrowUpward
              color="success"
              fontSize="small"
              sx={{ fill: 'currentColor' }}
            />
          ) : (
            <ArrowDownward
              color="error"
              fontSize="small"
              sx={{ fill: 'currentColor' }}
            />
          )}
          <Typography
            variant="h6"
            component="span"
            fontSize={{ xs: '12px', tabletM: '14px' }}
          >
            {percent}%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ManageContractCard;
