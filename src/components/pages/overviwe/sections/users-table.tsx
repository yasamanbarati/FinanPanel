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
import CustomizeTable from '@/components/table';
import { UserListProps } from '@/services/servers/type';

interface Props {
  users: UserListProps[];
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
      borderBottom: `0.6px solid ${theme.palette.borderBG}`,
    },
    '& a': {
      fontSize: '1rem', //16
      lineHeight: '20.16px',
      fontWeight: '600',
      textDecoration: 'underline',
    },
  },
  '& table': {
    minWidth: '600px',
    '& .MuiTableCell-root': {
      border: 0,
      '& li': {
        paddingLeft: 0,
      },
    },
    '& thead th, .MuiListItemText-root span': {
      fontSize: '1rem',
      fontWeight: '600',
      lineHeight: '20.16px',
    },
    '& .MuiListItemText-root p': {
      fontSize: '0.75rem',
      fontWeight: '500',
      lineHeight: '15.12px',
    },
    '& tbody td': {
      fontSize: '0.875rem',
      lineHeight: '17.64px',
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
        <div style={{ overflowX: 'auto' }}>
          <CustomizeTable
            headers={[
              'Full Name',
              'Email Address',
              'Wallet Balance',
              'Contract Count',
              'Status',
              '',
            ]}
            data={users}
            statusLabels={['Active', 'Deactive']}
          />
        </div>
      </CardContent>
    </CardBox>
  );
};

export default UsersTable;
