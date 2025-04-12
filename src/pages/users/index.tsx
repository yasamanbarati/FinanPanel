import React from 'react';
import MainLayout from '@/layout';
import Head from 'next/head';
import { Grid, Typography } from '@mui/material';
import UsersList from '@/components/pages/user-list';

export default function UsersPage() {
  return (
    <>
      <Head>
        <title>Fianancial</title>
      </Head>
      <MainLayout>
        <div>
          <Typography variant="h3" component="h2" mb={2}>
            Users List
          </Typography>
          <Typography variant="body1" component={'p'} mb={12}>
            Manage your website progress to increase your income.
          </Typography>
          <Grid container>
            <UsersList />
          </Grid>
        </div>
      </MainLayout>
    </>
  );
}
