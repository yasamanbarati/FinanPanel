import React from 'react';
import { Grid, Typography } from '@mui/material';
import MainLayout from '@/layout';
import TransactionList from '@/components/pages/transaction-list';

export default function TransactionsPage() {
  return (
    <MainLayout>
      <div>
        <Typography variant="h3" component="h2" mb={2}>
          Transactions
        </Typography>
        <Typography variant="body1" component={'p'} mb={12}>
          Manage your website progress to increase your income.
        </Typography>
        <Grid container>
          <TransactionList />
        </Grid>
      </div>
    </MainLayout>
  );
}
