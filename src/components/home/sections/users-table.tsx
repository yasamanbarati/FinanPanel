import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { MoreVert } from '@mui/icons-material';

interface Props {
  users: {
    id: string;
    name: string;
    email: string;
    count: string;
    status: number;
    action: string;
    image: string;
    date: string;
    amount: string;
  }[];
}

const CardBox = styled(Card)(({ theme }) => ({
  height: '348px',
  borderRadius: '14px',
  border: `1px solid ${theme.palette.neutral.main}`,
  background: '#FFFFFF',
  '& .MuiCardContent-root': {
    padding: '16px 24px',
    '& .MuiStack-root': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    '& a': {
      fontSize: '1rem', //16
      lineHeight: '20.16px',
      fontWeight: '600',
      textDecoration: 'underline',
    },
  },
}));

const UsersTable = ({ users }: Props) => {
  return (
    <CardBox>
      <CardContent>
        <Stack pb={8}>
          <Typography variant="h4" component={'h4'}>
            Users List (12.687)
          </Typography>
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
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={user.image} alt={user.name} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.name}
                      secondary={`#${user.id}`}
                    />
                  </ListItem>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.amount}</TableCell>
                <TableCell>{user.count}</TableCell>
                <TableCell>
                  <Chip
                    variant="outlined"
                    color={user.status ? 'success' : 'error'}
                    label={user.status ? 'Active' : 'Deactive'}
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
    </CardBox>
  );
};

export default UsersTable;
