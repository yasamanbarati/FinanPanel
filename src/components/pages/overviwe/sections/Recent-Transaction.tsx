import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';
import { UserListProps } from '@/services/servers/type';

interface Props {
  users: UserListProps[];
}

const CardBox = styled(Card)(({ theme }) => ({
  height: '446px',
  borderRadius: '14px',
  border: `1px solid ${theme.palette.neutral.main}`,
  background: '#FFFFFF',
  '& .MuiListItemText-root': {
    '& span': {
      fontWeight: '600',
      fontSize: '0.75rem',
    },
    '& p': {
      fontWeight: '500',
      fontSize: '0.625rem',
    },
  },
}));

const RecentTransactions = ({ users }: Props) => {
  return (
    <CardBox>
      <CardContent>
        <Typography variant="h6" pb={11}>
          Recent Transactions
        </Typography>
        <Divider />
        <List>
          {users.map((transaction) => (
            <ListItem key={transaction.id}>
              <ListItemAvatar>
                <Avatar src={transaction.avatar} alt={transaction.fullName} />
              </ListItemAvatar>
              <ListItemText
                primary={transaction.fullName}
                secondary={transaction.action}
              />
              <Typography variant="body2">
                {transaction.walletBalance}
              </Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </CardBox>
  );
};

export default RecentTransactions;
