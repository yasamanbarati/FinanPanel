import { MoreVert } from '@mui/icons-material';
import {
  Avatar,
  Badge,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <Stack>
      <Typography variant="h3">Overviwe</Typography>
      <Typography variant="subtitle1">
        Manage your website progress to increase your income.
      </Typography>
      <Grid container spacing={3}>
        {HEADER_ITEMS.map(({ title, profit, percent, icon }, index) => (
          <Grid item md={3} key={index}>
            <Card>
              <CardContent sx={{ p: 3 }}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Stack>
                    <Typography variant="caption" color="#3F3F46">
                      {title}
                    </Typography>
                    <Typography variant="h5" color={'#18181B'} mt={2}>
                      {profit}
                    </Typography>
                    <Typography variant="caption" color={'#00B69B'} mt={4}>
                      {percent}
                    </Typography>
                  </Stack>
                  <Image width={60} height={60} src={icon} alt="icon" />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item md={8}>
          <Card>
            <CardContent>
              <Typography variant="h3">Income Activity</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={4}>
          <Card>
            <CardContent>
              <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography variant="subtitle1">Recent Transactions</Typography>
                <Select></Select>
              </Stack>
              <Typography variant="caption">July 3, 2024</Typography>
              <Divider />
              <List>
                {USERS?.map(({ action, amount, image, name }, index) => (
                  <ListItem secondaryAction={amount} key={index}>
                    <ListItemAvatar>
                      <Avatar src={image} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={name}
                      secondary={action}
                    ></ListItemText>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={12}>
          <Card>
            <CardContent>
              <Stack direction={'row'} justifyContent={'space-between'} py={2}>
                <Typography variant="h3">Users List (12.687)</Typography>
                <Link href={'/'}>See all</Link>
              </Stack>
              <Divider />
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Full Name</TableCell>
                    <TableCell>Email Address</TableCell>
                    <TableCell>Wallet Balance</TableCell>
                    <TableCell>Contract Count</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {USERS.map((item) => (
                    <TableRow key={item?.id}>
                      <TableCell>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar src={item?.image} />
                          </ListItemAvatar>
                          <ListItemText
                            primary={item?.name}
                            secondary={item?.id}
                          />
                        </ListItem>
                      </TableCell>
                      <TableCell>{item?.email}</TableCell>
                      <TableCell>{item?.amount}</TableCell>
                      <TableCell>{item?.count}</TableCell>
                      <TableCell>
                        <Chip
                          variant="outlined"
                          color={item?.status ? 'success' : 'error'}
                          label={item?.status ? 'Active' : 'Deactive'}
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton>
                          <MoreVert />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}

const HEADER_ITEMS = [
  {
    title: 'New Income',
    profit: '$3,850',
    percent: '8.5%',
    icon: '/static/icons/card1.svg',
  },
  {
    title: 'Total Income',
    profit: '$40,689',
    percent: '16.2%',
    icon: '/static/icons/card2.svg',
  },
  {
    title: 'New Contracts',
    profit: '28',
    percent: '24%',
    icon: '/static/icons/card3.svg',
  },
  {
    title: 'All Contracts',
    profit: '28',
    percent: '24%',
    icon: '/static/icons/card4.svg',
  },
];

const USERS = [
  {
    id: '#345896',
    name: 'Sofia Miller',
    email: 'Sofia Miller@gmail.com',
    count: '12',
    status: 1,
    action: 'Deposit',
    image: '/static/images/user-1.svg',
    amount: '$45.50',
  },
  {
    id: '#321654',
    name: 'John Manson',
    email: 'Ashley Williams@gmail.com',
    count: '4',
    status: 0,
    action: 'Deposit',
    image: '/static/images/user-2.svg',
    amount: '$45.50',
  },
  {
    id: '#345896',

    name: 'John Manson',
    email: 'ohnManson@gmail.com',
    count: '8',
    status: 0,
    action: 'Deposit',
    image: '/static/images/user-3.svg',
    amount: '$45.50',
  },
  {
    id: '#345896',

    name: 'John Manson',
    email: 'Millersoha10@gmail.com',
    count: '12',
    status: 1,
    action: 'Deposit',
    image: '/static/images/user-4.svg',
    amount: '$45.50',
  },
  {
    id: '#345896',

    name: 'John Manson',
    email: 'Millersoha10@gmail.com',
    count: '12',
    status: 1,
    action: 'Deposit',
    image: '/static/images/user-5.svg',
    amount: '$45.50',
  },
];
