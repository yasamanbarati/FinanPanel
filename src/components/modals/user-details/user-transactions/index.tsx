import { userTransactionsType } from '@/services/servers/type';
import { Typography, styled, Box } from '@mui/material';

const TransactionItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1.5, 0),
  borderBottom: `1px solid ${theme.palette.borderBG}`,
}));

interface UserTransactionsProps {
  data?: userTransactionsType;
}

const UserTransactions = ({ data }: UserTransactionsProps) => {
  const defaultData: userTransactionsType = {
    userId: '#LM24859',
    withdraw: 45.5,
    makeContract: 500,
    deposit: 200,
    transactions: [
      {
        date: 'July 3, 2024',
        type: 'Transfer',
        user: 'Emily Davis',
        code: '#LM100253',
        amount: '$45.50',
      },
    ],
  };

  const userData = data || defaultData;

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #e1e1e1',
          paddingBottom: '8px',
          width: '100%',
        }}
      >
        <Typography variant="h6">Recent Transactions</Typography>
        <Typography
          variant="body2"
          component="a"
          sx={{ marginRight: 6, textDecoration: 'underline' }}
          color="primary"
        >
          View All
        </Typography>
      </Box>

      {userData.transactions.map((transaction, index) => (
        <TransactionItem key={`${transaction.code}-${index}`}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" fontWeight={600} color="text.primary">
              {transaction.type}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: 'block', mt: 0.5 }}
            >
              {transaction.user} • {transaction.code}
            </Typography>
          </Box>
          <Typography variant="body2" fontWeight={600} color="text.primary">
            {transaction.amount}
          </Typography>
        </TransactionItem>
      ))}
    </Box>
  );
};

export default UserTransactions;
