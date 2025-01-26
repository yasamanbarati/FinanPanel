import React from 'react';
import Page from '@/components/Page';
import MainLayout from '@/layout/mainLayout';
import ContractHistory from '@/components/screen/contract/contractHistory';

export default function ContractHistoryPage() {
  return (
    <MainLayout>
      <Page title="Contract History">
        <ContractHistory />
      </Page>
    </MainLayout>
  );
}
