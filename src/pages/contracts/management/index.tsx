import React from 'react';
import { styled } from '@mui/material';
import MainLayout from '@/layout';
import BreadcrumbSection from '@/layout/ breadcrumb';
import ManageContract from '@/components/pages/contracts/manage-contract';

const CustomizeDiv = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
export default function ContractManagementPage() {
  return (
    <MainLayout>
      <CustomizeDiv>
        <div>
          <BreadcrumbSection disabledLink="Contract Management" />
        </div>
      </CustomizeDiv>
      <ManageContract />
    </MainLayout>
  );
}
