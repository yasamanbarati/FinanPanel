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
import CustomizeTable from '@/components/table';
import { transactionsList } from '@/services/servers/mock';
import { CalendarIcon, SearchIcon } from '@/components/icons';

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
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '16.982px',
  whiteSpace: 'nowrap',
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
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

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

  const filteredData = useMemo(() => {
    if (transactionType === 'All') return transactionsList;
    return transactionsList.filter((item) => item.type === transactionType);
  }, [transactionType]);

  const totalPages = useMemo(
    () => Math.ceil(filteredData.length / itemsPerPage),
    [filteredData.length],
  );

  const paginatedData = useMemo(
    () => filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage),
    [filteredData, page],
  );

  const handlePageChange = useCallback(
    (_: React.ChangeEvent<unknown>, value: number) => setPage(value),
    [],
  );

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setPage(1);
  };

  const handlePeriodOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPeriodAnchor(event.currentTarget);
  };

  const handlePeriodClose = () => setPeriodAnchor(null);

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
      setPage(1);
    },
    [],
  );

  return (
    <Paper sx={{
      borderRadius: 14,
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
      overflow: 'hidden',
      width: '100%',
      p: '24px',
    }}>
      <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 16 }}>
          <Tabs
            value={value}
            onChange={handleTabChange}
            sx={{ '& .MuiTabs-indicator': { backgroundColor: '#53389e', height: 2 } }}
          >
            {['All', 'Investment', 'Profits', 'Transfer', 'Deposit', 'Withdrawals'].map(
              (label, index) => (
                <StyledTab key={label} label={label} value={index} />
              ))}
          </Tabs>

          <Box sx={{ display: 'flex', gap: 4 }}>
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
          <CustomizeTable
            headers={[
              'Full Name',
              'Transaction Type',
              'Amount',
              'Date',
              'Wallet Address',
              'Status',
              '',
            ]}
            data={paginatedData}
            statusLabels={['Success', 'Failed', 'Pending']}
            transactionType={transactionType}
          />
        </div>

        {totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
            <Pagination
              count={totalPages}
              page={page}
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
