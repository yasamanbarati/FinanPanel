import React, { useState } from 'react';
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
  styled,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { UserListProps } from '@/services/servers/type';

interface TableProps {
  headers: string[];
  data: UserListProps[];
}

const StickyTableContainer = styled(TableContainer)(({ theme }) => ({
  overflow: 'auto',
  maxHeight: '70vh',
  WebkitOverflowScrolling: 'touch',
  '& .MuiTableHead-root': {
    position: 'sticky',
    top: 0,
    zIndex: 8,
    transition: 'box-shadow 0.3s',
    '&.scrolled': { boxShadow: theme.shadows[4] },
  },
}));

type ModalState = {
  details: boolean;
  delete: boolean;
  contract: boolean;
  deposit: boolean;
};
const CustomizeTable = ({ headers, data }: TableProps) => {
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);
  const [modalState, setModalState] = useState<ModalState>({
    details: false,
    delete: false,
    contract: false,
    deposit: false,
  });
  const [selectedUser, setSelectedUser] = useState<UserListProps | null>(null);

  const handleModal = (modal: keyof ModalState, isOpen: boolean) => {
    setModalState((prev) => ({ ...prev, [modal]: isOpen }));
  };
  const handleIconClick = (userData: UserListProps) => {
    setSelectedUser(userData); // ذخیره کل شیء کاربر
    const modalMap = {
      Investment: 'contract',
      Transfer: 'delete',
      Deposit: 'deposit',
    } as const;

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
      setSelectedUser(null);
    };
  };
  return (
    <>
      <StickyTableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell
                  key={`header-${index}`}
                  sx={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#667085',
                    backgroundColor: 'background.paper',
                    py: 2,
                    '&:first-of-type': { pl: 3 },
                    '&:last-of-type': { pr: 3 },
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody sx={{ '& .MuiTableCell-root': { borderBottom: 'none' } }}>
            {data.map((user) => (
              <React.Fragment key={user.id}>
                <TableRow>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar
                        src={user.avatar || '/static/images/user-1.svg'}
                        sx={{ width: 40, height: 40 }}
                      />
                      <Box>
                        <Typography fontWeight={600}>
                          {user.fullName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {user.id}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Typography
                      variant="h6"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: '155px',
                      }}
                    >
                      {user.email ?? 'Not Found'}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography
                      variant="h6"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: '155px',
                      }}
                    >
                      {user.walletBalance ?? 'Not Found'}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="h6"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: '155px',
                      }}
                    >
                      {user.contractCount ?? 'Not Found'}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Chip
                      variant="outlined"
                      color={
                        user.status === 'approved'
                          ? 'success'
                          : user.status === 'pending'
                          ? 'warning'
                          : 'error'
                      }
                      label={user.status}
                      sx={{
                        '& span.MuiChip-label': {
                          color: '#5F5F5F',
                        },
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <MoreVertIcon sx={{ fill: '#CBCAD7' }} />
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </StickyTableContainer>
    </>
  );
};

export default CustomizeTable;
