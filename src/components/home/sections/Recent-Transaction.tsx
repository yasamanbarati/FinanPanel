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
//   width: '350px',
  height: '446px',
  borderRadius: '14px',
  border: `1px solid ${theme.palette.neutral.main}`,
  background: '#FFFFFF',
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
                <Avatar src={transaction.image} alt={transaction.name} />
              </ListItemAvatar>
              <ListItemText
                primary={transaction.name}
                secondary={transaction.action}
              />
              <Typography variant="body2">{transaction.amount}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </CardBox>
  );
};

export default RecentTransactions;
