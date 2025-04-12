import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  Avatar,
  Chip,
  IconButton,
  styled,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SettingsMenu } from '@/components/table/settings-menu';
import { formatDate } from '@/services/utils/time';
import { userList } from '@/services/servers/mock';
import { DeleteIcon, ViewIcon } from '@/components/icons';
import { UserListProps } from '@/services/servers/type';

const StickyTableContainer = styled(TableContainer)(({ theme }) => ({
  overflow: 'auto',
  '& .MuiTableHead-root': {
    position: 'sticky',
    top: 0,
    zIndex: 8,
    backgroundColor: theme.palette.background.paper,
  },
}));

interface UserTableProps {
  headers: string[];
  data: UserListProps[];
}

const UserTable = ({ headers, data }: UserTableProps) => {
  console.log({ data });
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedUser, setSelectedUser] = useState<UserListProps | null>(null);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    user: UserListProps,
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedUser(null);
  };

  return (
    <StickyTableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell
                key={`header-${index}`}
                sx={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'black.dark',
                  py: 2,
                  borderBottom: '1px solid',
                  borderColor: 'borderBG',
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar src={user.avatar} sx={{ width: 40, height: 40 }} />
                  <Box>
                    <Typography fontWeight={600}>{user.fullName}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      #{user.id}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>

              <TableCell>
                <Typography>{user.email}</Typography>
              </TableCell>

              <TableCell>
                <Typography fontWeight={600}>${user.walletBalance}</Typography>
              </TableCell>

              <TableCell>
                <Typography>
                  {' '}
                  {user.registerDate ? formatDate(user.registerDate) : 'N/A'}
                </Typography>
              </TableCell>

              <TableCell>
                <Typography>
                  {user.lastLogin ? formatDate(user.lastLogin) : 'N/A'}
                </Typography>
              </TableCell>

              <TableCell>
                <Chip
                  label={user.status}
                  variant="outlined"
                  sx={{
                    backgroundColor:
                      user.status === 'Active'
                        ? 'success.light'
                        : 'error.light',
                    borderColor:
                      user.status === 'Active' ? 'success.main' : 'error.main',
                    '& .MuiChip-label': {
                      color: 'black.dark',
                      fontSize: '11px',
                      fontWeight: 600,
                      textOverflow: 'unset',
                    },
                  }}
                />
              </TableCell>

              <TableCell>
                <IconButton
                  onClick={(e) => handleMenuOpen(e, user)}
                  sx={{ color: 'black.light' }}
                >
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <SettingsMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        items={[
          {
            title: 'View Details',
            icon: <ViewIcon width={16} height={16} />,
            handelOpenModel: () => console.log('View', selectedUser),
          },
          {
            title: 'Delete User',
            icon: <DeleteIcon width={16} height={16} />,
            handelOpenModel: () => console.log('Delete', selectedUser),
          },
        ]}
      />
    </StickyTableContainer>
  );
};

export default UserTable;
