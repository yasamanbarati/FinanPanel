import { ContractManagement } from '@/services/servers/mock';
import { Grid } from '@mui/material';
import React from 'react';
import ManageContractCard from './card';

const ManageContract = () => {
  return (
    <>
      <Grid
        container
        mt={8}
        gap={{ xs: '8px', xl: '24px' }}
        justifyContent={{ mobileM: 'center', tablet: 'space-between' }}
      >
        {ContractManagement.map((item) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <ManageContractCard
              title={item.title}
              value={item.value}
              percent={item.percent}
              status={item.status}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default ManageContract;
