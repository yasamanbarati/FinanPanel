import { useState, useMemo, useCallback } from 'react';
import {
  Paper,
  Pagination,
  PaginationItem,
  Box,
  Typography,
  OutlinedInput,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  styled,
} from '@mui/material';
import { userList } from '@/services/servers/mock';
import { SearchIcon } from '@/components/icons';
import CustomizeTable from '@/components/table';

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

const SuggestionsList = styled(List)(({ theme }) => ({
  position: 'absolute',
  top: '45px', // Adjust as needed
  right: 0,
  width: '195px',
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.borderBG}`,
  borderRadius: 8,
  zIndex: 10,
  overflowY: 'scroll',
  maxHeight: '120px',
  boxShadow: '0px 6px 25px 0px rgba(0, 0, 0, 0.05)',
}));

const UsersList = () => {
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const itemsPerPage = 10;

  const { filteredUsers, suggestions } = useMemo(() => {
    const lowerSearch = searchText.toLowerCase();
    const filtered = userList.filter(
      (user) =>
        user.fullName.toLowerCase().includes(lowerSearch) ||
        (user.email && user.email.toLowerCase().includes(lowerSearch)),
    );

    const sugg = searchText
      ? userList.filter((user) =>
          user.fullName.toLowerCase().includes(lowerSearch),
        )
      : [];

    return { filteredUsers: filtered, suggestions: sugg };
  }, [searchText]);

  const totalPages = useMemo(
    () => Math.ceil(filteredUsers.length / itemsPerPage),
    [filteredUsers.length],
  );

  const handlePageChange = useCallback(
    (_: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    },
    [],
  );

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const text = event.target.value;
      setSearchText(text);
      setPage(1);
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
        padding: '24px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
          position: 'relative',
          '@media (max-width: 769px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '8px',
          },
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Users List ({filteredUsers.length})
        </Typography>

        <Box
          sx={{
            position: 'relative',
            '@media (max-width: 769px)': {
              width: '100%',
              marginBottom: '16px',
            },
          }}
        >
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
            sx={{
              '@media (max-width: 769px)': { width: '100%' },
            }}
          />

          {suggestions.length > 0 && (
            <SuggestionsList aria-label="Search suggestions">
              {suggestions.map((user) => (
                <ListItem
                  key={user.id}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': { bgcolor: 'action.hover' },
                  }}
                >
                  <ListItemAvatar sx={{ minWidth: 28, mr: 1 }}>
                    <Avatar
                      alt={user.fullName}
                      src={user.avatar}
                      sx={{ width: 24, height: 24 }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.fullName}
                    primaryTypographyProps={{
                      variant: 'caption',
                      fontWeight: 500,
                    }}
                  />
                </ListItem>
              ))}
            </SuggestionsList>
          )}
        </Box>
      </Box>

      <div style={{ overflowX: 'auto' }}>
        <CustomizeTable
          headers={[
            'Full Name',
            'Email Address',
            'Wallet Balance',
            'Register Date',
            'Last Login',
            'Status',
            '',
          ]}
          data={filteredUsers.slice(
            (page - 1) * itemsPerPage,
            page * itemsPerPage,
          )}
          statusLabels={['Active', 'Deactive']}
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
                  '& .MuiSvgIcon-root': { fill: 'currentColor' },
                }}
              />
            )}
          />
        </Box>
      )}
    </Paper>
  );
};

export default UsersList;
