import { useCallback, useMemo, useState } from 'react';
import {
  Tabs,
  Tab,
  Paper,
  Button,
  Menu,
  MenuItem,
  styled,
  Box,
  Pagination,
  PaginationItem,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getTransactions } from '@/services/servers/api/api.transactions';
import { CalendarIcon, SearchIcon } from '@/components/icons';
import TransactionListTable from './transaction-list-table';

const SearchInput = styled(OutlinedInput)(({ theme }) => ({
  display: 'flex',
  width: '195px',
  height: '38px',
  gap: '4px',
  padding: '8px 12px',
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.borderBG}`,
  borderRadius: 8,
  '& .MuiInputBase-root input': {
    color: theme.palette.black.dark,
  },
  '& svg': {
    fill: theme.palette.black.dark,
  },
  '& .MuiInputAdornment-root': {
    width: '20px',
    '& .MuiButtonBase-root': {
      '& .MuiSvgIcon-root': {
        width: '18px',
        height: '18px',
        fill: 'none',
      },
    },
  },
}));

const PeriodSelect = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 8,
  height: '38px',
  gap: '4px',
  padding: '8px 12px',
  width: 129,
  justifyContent: 'space-between',
  alignItems: 'center',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  maxWidth: '120px',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  fontSize: '10px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '16.982px',
  color: theme.palette.black.dark,
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  minWidth: 65,
  fontSize: 16,
  fontWeight: 400,
  '&.Mui-selected': {
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
}));

const TransactionList = () => {
  const [value, setValue] = useState(0);
  const [periodAnchor, setPeriodAnchor] = useState<null | HTMLElement>(null);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 13;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['transactions', value, searchText, currentPage],
    queryFn: () =>
      getTransactions({
        category:
          value !== 0
            ? ['Investment', 'Profits', 'Transfer', 'Deposit', 'Withdrawals'][
                value - 1
              ]?.toLowerCase()
            : undefined,
        phrase: searchText,
      }),
    staleTime: 5000,
    refetchOnWindowFocus: false,
  });

  const serverData = useMemo(
    () => data?.transactions?.data || [],
    [data?.transactions?.data],
  );

  const totalPages = useMemo(
    () => data?.transactions?.total || 1,
    [data?.transactions?.total],
  );
  const current = data?.transactions?.current_page || 1;

  const transactionType = useMemo(() => {
    const types = [
      'All',
      'Investment',
      'Profits',
      'Transfer',
      'Deposit',
      'Withdrawals',
    ];
    return types[value] || 'All';
  }, [value]);

  const headers = useMemo(() => {
    switch (transactionType) {
      case 'Investment':
        return [
          'Full Name',
          'Contract',
          'Amount',
          'Monthly Profit',
          'Wallet Address',
          'Status',
          '',
        ];
      case 'Transfer':
        return [
          'Full Name',
          'Transfer',
          'Amount',
          'Date',
          'Wallet Address',
          'Status',
          '',
        ];
      default:
        return [
          'Full Name',
          'Transaction Type',
          'Amount',
          'Date',
          'Wallet Address',
          'Status',
          '',
        ];
    }
  }, [transactionType]);
  const filteredData = useMemo(() => serverData, [serverData]);

  const paginatedData = useMemo(
    () =>
      filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      ),
    [filteredData, currentPage, itemsPerPage],
  );

  const handlePageChange = useCallback(
    (_: React.ChangeEvent<unknown>, value: number) => setCurrentPage(value),
    [],
  );

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setCurrentPage(current);
  };

  const handlePeriodOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPeriodAnchor(event.currentTarget);
  };

  const handlePeriodClose = () => setPeriodAnchor(null);

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
      setCurrentPage(1);
    },
    [],
  );

  return (
    <Paper
      sx={{
        borderRadius: 14,
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        overflow: 'hidden',
        width: '100%',
        p: '24px',
      }}
    >
      <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider' }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', xl: 'space-between' },
            mb: 16,
            gap: 12,
          }}
        >
          <Tabs
            value={value}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              maxWidth: '100%',
              '& .MuiTabs-scroller': {
                overflow: 'auto !important',
                WebkitOverflowScrolling: 'touch',
              },
              '& .MuiTabs-flexContainer': {
                flexWrap: 'nowrap',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                minWidth: '100%',
              },
              touchAction: 'pan-x', // فعال کردن ژستهای لمسی
              scrollbarWidth: 'none', // مخفی کردن اسکرولبار در فایرفاکس
              '&::-webkit-scrollbar': {
                display: 'none', // مخفی کردن اسکرولبار در مرورگرهای وبکیت
              },
            }}
          >
            {[
              'All',
              'Investment',
              'Profits',
              'Transfer',
              'Deposit',
              'Withdrawals',
            ].map((label, index) => (
              <StyledTab
                key={label}
                label={label}
                value={index}
                sx={{ minWidth: 'unset' }}
              />
            ))}
          </Tabs>

          <Box sx={{ display: 'flex', gap: 4, maxWidth: '100%' }}>
            <SearchInput
              placeholder="Search"
              startAdornment={
                <InputAdornment position="start">
                  <IconButton aria-label="Search">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
              value={searchText}
              onChange={handleSearchChange}
            />

            <PeriodSelect
              variant="outlined"
              startIcon={<CalendarIcon />}
              onClick={handlePeriodOpen}
            >
              Select period
            </PeriodSelect>

            <Menu
              anchorEl={periodAnchor}
              open={Boolean(periodAnchor)}
              onClose={handlePeriodClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              {['Today', 'Last Week', 'Last Month', 'Custom'].map((option) => (
                <MenuItem key={option} onClick={handlePeriodClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>

        <div style={{ overflowX: 'auto' }}>
          <TransactionListTable
            headers={headers}
            data={paginatedData}
            transactionType={transactionType}
          />
        </div>

        {totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  sx={{
                    borderRadius: 32,
                    '&.Mui-selected': {
                      backgroundColor: 'primary.main',
                      color: 'common.white',
                      '&:hover': { backgroundColor: 'primary.dark' },
                    },
                  }}
                />
              )}
            />
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default TransactionList;
