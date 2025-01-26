import React from 'react';
import Page from '@/components/Page';
import MainLayout from '@/layout/mainLayout';
import ContractList from '@/components/screen/contract/contractList';

export default function ContractListPage() {
  return (
    <MainLayout>
      <Page title="Contract List">
        <ContractList />
      </Page>
    </MainLayout>
  );
}
