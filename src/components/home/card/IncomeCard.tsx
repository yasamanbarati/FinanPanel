import { palette } from '@/setup/theme/palette';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface Props {
  title: string;
  profit: string;
  percent: string;
  icon: string;
}

const IncomeCard = ({ title, profit, percent, icon }: Props) => {
  return (
    <Box sx={styles.card}>
      <div style={styles.cardContent}>
        <div>
          <Typography variant="body1" component="h3">
            {title}
          </Typography>
          <Typography variant="h4" mt={2}>
            {profit}
          </Typography>
        </div>
        <Image width={60} height={60} src={icon} alt="icon" />
      </div>
      <Typography variant="body1">{percent}</Typography>
    </Box>
  );
};

const styles = {
  card: {
    padding: ' 16px 24px',
    borderRadius: '14px',
    border: '1px solid rgba(223, 234, 242, 0.5)',
    background: '#fff',
    width: { xs: '50%', xxl: '258px' },
    height: '185px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    '& h3': {
      color: palette.black.dark,
    },
  },
};

export default IncomeCard;
