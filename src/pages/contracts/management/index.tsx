import React from 'react';
import Page from '@/components/Page';
import MainLayout from '@/layout/mainLayout';
import ContractManage from '@/components/screen/contract/contractManage';

export default function ContractManagementPage() {
  return (
    <MainLayout>
      <Page title="Contract Management">
        <ContractManage />
      </Page>
    </MainLayout>
  );
}
