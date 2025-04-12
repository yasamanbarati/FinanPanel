import { userTransactionsType } from '@/services/servers/type';
import { Typography, styled, Box } from '@mui/material';

const TransactionGroup = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const DateHeader = styled(Typography)(({ theme }) => ({
  fontSize: '0.75rem',
  fontWeight: 500,
  color: theme.palette.black.main,
  paddingBottom: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.borderBG}`,
  marginBottom: theme.spacing(2),
}));

const TransactionRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1.5, 0),
  '&:not(:last-child)': {
    marginBottom: theme.spacing(2),
  },
}));

const UserInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  flex: 1,
});

const AmountText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1rem',
  color: theme.palette.black.dark,
}));

interface UserTransactionsProps {
  data?: userTransactionsType;
}
interface TransactionType {
  date: string;
  type: string;
  user: string;
  code: string;
  amount: string;
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
      {
        date: 'July 3, 2024',
        type: 'Transfer',
        user: 'David Santil',
        code: '#SB569851',
        amount: '$20.00',
      },
    ],
  };

  const userData = data || defaultData;

  const groupTransactionsByDate = (transactions: TransactionType[])=> {
    return transactions.reduce((acc, transaction) => {
      const date = transaction.date;
      if (!acc[date]) acc[date] = [];
      acc[date].push(transaction);
      return acc;
    }, {} as Record<string, TransactionType[]>);
  }
   
  return (
      <Box sx={{ maxHeight: 360, overflowY: 'auto' }}>
        {Object.entries(groupTransactionsByDate(userData.transactions)).map(([date, transactions]) => (
          <TransactionGroup key={date}>
            <DateHeader variant="subtitle2">{date}</DateHeader>
            {transactions.map((transaction, index) => (
              <TransactionRow key={`${date}-${index}`}>
                <UserInfo>
                  {/* Icon would be implemented based on transaction.type */}
                  <Box sx={{ width: 24, height: 24, bgcolor: 'secondary.light', borderRadius: '4px' }} />
                  <Box>
                    <Typography variant="body2" fontWeight={600}>
                      {transaction.type}
                    </Typography>
                    {transaction.user && (
                      <Typography variant="caption" color="textSecondary">
                        {transaction.user} • {transaction.code}
                      </Typography>
                    )}
                  </Box>
                </UserInfo>
                <AmountText>{transaction.amount}</AmountText>
              </TransactionRow>
            ))}
          </TransactionGroup>
        ))}
      </Box>
  );
};

export default UserTransactions;
