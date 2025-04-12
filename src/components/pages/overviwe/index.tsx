import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import IncomeCard from './card/IncomeCard';
import RecentTransactions from './sections/Recent-Transaction';
import UsersTable from './sections/users-table';
import { HEADER_ITEMS, USERS } from '@/services/servers/mock';

export default function Home() {
  return (
    <div>
      <Typography variant="h3" component="h2" mb={2}>
        Overviwe
      </Typography>
      <Typography variant="body1" component={'p'} mb={12}>
        Manage your website progress to increase your income.
      </Typography>
      <Grid container spacing={3}>
        <Grid container item justifyContent="space-between">
          {HEADER_ITEMS.map((item, index) => (
            <IncomeCard key={index} {...item} />
          ))}
        </Grid>
        <Grid item xl={8} lg={7} xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h3">Income Activity</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={4} lg={5} xs={12}>
          <RecentTransactions users={USERS} />
        </Grid>
        <Grid item xs={12}>
          <UsersTable users={USERS} />
        </Grid>
      </Grid>
    </div>
  );
}
