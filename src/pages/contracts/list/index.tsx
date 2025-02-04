import React from 'react';
import { Button, Grid, styled } from '@mui/material';
import MainLayout from '@/layout';
import BreadcrumbSection from '@/layout/ breadcrumb';
import ContractListCard from '@/components/pages/contracts/contract-list-card';
import { ContractList } from '@/services/servers/mock';

const CustomizeDiv = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& button': {
    borderRadius: '10px',
    padding: '16px 24px',
  },
}));

export default function ContractListPage() {
  return (
    <MainLayout>
      <CustomizeDiv>
        <div>
          <BreadcrumbSection disabledLink="List of contracts" />
        </div>
        <Button variant="contained" color="primary">
          Create New Contract
        </Button>
      </CustomizeDiv>
      <Grid
        container
        rowGap={'24px'}
        columnGap={'16px'}
        justifyContent="space-between"
      >
        {ContractList.map((item, index) => {
          return (
            <ContractListCard
              key={index}
              contractList={{
                status: item.status,
                ImageSrc: item.ImageSrc,
                title: item.title,
                time: item.time,
                minimumAmount: item.minimumAmount,
                monthlyProfit: item.monthlyProfit,
                dropDown: item.dropDown,
                risk: item.risk,
                limitContrcts: item.limitContrcts,
                activeContracts: item.activeContracts,
              }}
            />
          );
        })}
      </Grid>
    </MainLayout>
  );
}
